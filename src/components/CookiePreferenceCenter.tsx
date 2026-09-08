import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronDown,
  Check,
  Shield,
  ExternalLink,
  Cookie,
} from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  saveCookieConsent,
  type CookieConsentState,
  CONSENT_VERSION_CURRENT,
} from "../utils/cookieConsent";
import { cookieCategories } from "../data/cookieCategories";

type CategoryId = "essential" | "functional" | "analytics" | "marketing";

const STORAGE_KEY = "user_cookie_preferences";

const OPEN_EVENT = "opencookiepreferencecenter";

function readStoredChoices(): CookieConsentState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsentState & {
      timestamp: string;
      version: string;
    };
    if (parsed.version !== CONSENT_VERSION_CURRENT) return null;
    return {
      essential: true,
      functional: parsed.functional,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
    };
  } catch {
    return null;
  }
}

const acceptAll: CookieConsentState = {
  essential: true,
  functional: true,
  analytics: true,
  marketing: true,
};

const rejectAll: CookieConsentState = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export function CookiePreferenceCenter() {
  const reducedMotion = useReducedMotion();
  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [choices, setChoices] = useState<CookieConsentState>(rejectAll);
  const [openCategory, setOpenCategory] = useState<CategoryId | null>("essential");
  const modalRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = readStoredChoices();
    if (stored) {
      setChoices(stored);
    } else {
      // No valid consent — show banner
      setBannerVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      const stored = readStoredChoices();
      if (stored) setChoices(stored);
      setModalOpen(true);
      setBannerVisible(false);
    };
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  // Focus trap for modal
  useEffect(() => {
    if (!modalOpen) return;
    const container = modalRef.current;
    if (!container) return;

    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKey);
    return () => container.removeEventListener("keydown", handleKey);
  }, [modalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [modalOpen]);

  const handleAcceptAll = useCallback(() => {
    saveCookieConsent(acceptAll);
    setChoices(acceptAll);
    setBannerVisible(false);
    setModalOpen(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    saveCookieConsent(rejectAll);
    setChoices(rejectAll);
    setBannerVisible(false);
  }, []);

  const handleSaveChoices = useCallback(() => {
    saveCookieConsent(choices);
    setModalOpen(false);
    setBannerVisible(false);
  }, [choices]);

  const toggleCategory = (id: CategoryId) => {
    if (id === "essential") return;
    setChoices((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* --- Banner --- */}
      <AnimatePresence>
        {bannerVisible && !modalOpen && (
          <motion.div
            ref={bannerRef}
            initial={reducedMotion ? false : { y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reducedMotion ? undefined : { y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title"
          >
            <div className="mx-auto max-w-5xl rounded-xl border border-ink/10 bg-white shadow-card-hover">
              <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                <div className="flex items-start gap-3 sm:flex-1">
                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent sm:flex">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h2
                      id="cookie-banner-title"
                      className="heading-4 text-ink"
                    >
                      We respect your privacy
                    </h2>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      We use essential cookies to keep our site running smoothly.
                      With your permission, we'd also like to use optional cookies
                      to analyze site traffic and help us understand how you
                      interact with our platform.
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-col sm:items-stretch">
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary w-full justify-center !py-2.5 !text-sm"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="btn-secondary w-full justify-center !py-2.5 !text-sm"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setBannerVisible(false);
                    }}
                    className="btn-ghost w-full justify-center !py-2.5 !text-sm"
                  >
                    Customize Preferences
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Modal --- */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-end justify-center bg-brand-dark/60 backdrop-blur-sm sm:items-center sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <motion.div
              ref={modalRef}
              initial={reducedMotion ? false : { y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={reducedMotion ? undefined : { y: 30, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-xl bg-white shadow-card-hover sm:max-w-2xl sm:rounded-xl"
            >
              {/* Modal header */}
              <div className="flex items-start justify-between gap-4 border-b border-ink/10 p-5 sm:p-6">
                <div>
                  <h2
                    id="cookie-modal-title"
                    className="heading-3 text-ink"
                  >
                    Cookie Preferences
                  </h2>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                    Control which cookies you allow. You can update these
                    settings anytime using the "Cookie Settings" link in the
                    footer.
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                  aria-label="Close cookie preferences"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal body — scrollable */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6">
                <div className="divide-y divide-ink/10 border-y border-ink/10">
                  {cookieCategories.map((cat) => {
                    const isOpen = openCategory === cat.id;
                    const isOn = choices[cat.id];
                    const isLocked = cat.alwaysActive === true;
                    return (
                      <div key={cat.id}>
                        <button
                          onClick={() =>
                            setOpenCategory(isOpen ? null : cat.id)
                          }
                          className="flex w-full items-center justify-between gap-3 py-4 text-left"
                          aria-expanded={isOpen}
                          aria-controls={`cookie-panel-${cat.id}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-heading font-semibold text-ink sm:text-base">
                              {cat.title}
                            </span>
                            {isLocked && (
                              <span className="badge bg-brand-accent/10 text-brand-accent !px-2 !py-0.5 !text-[10px]">
                                Always Active
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <ToggleSwitch
                              isOn={isOn}
                              disabled={isLocked}
                              label={`Toggle ${cat.title}`}
                              onClick={() => toggleCategory(cat.id)}
                            />
                            <ChevronDown
                              className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-brand-accent" : ""
                              }`}
                            />
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`cookie-panel-${cat.id}`}
                              initial={
                                reducedMotion
                                  ? false
                                  : { height: 0, opacity: 0 }
                              }
                              animate={{ height: "auto", opacity: 1 }}
                              exit={
                                reducedMotion
                                  ? undefined
                                  : { height: 0, opacity: 0 }
                              }
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pb-5 pt-1 space-y-4">
                                <div>
                                  <p className="text-sm text-ink-soft leading-relaxed">
                                    {cat.purpose}
                                  </p>
                                </div>

                                <div className="rounded-lg border border-ink/10 bg-canvas/50 p-4 space-y-3">
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                                      Data collected
                                    </p>
                                    <ul className="mt-1.5 space-y-1">
                                      {cat.dataCollected.map((item) => (
                                        <li
                                          key={item}
                                          className="flex items-start gap-2 text-sm text-ink-soft"
                                        >
                                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="pt-2 border-t border-ink/10">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                                      Retention
                                    </p>
                                    <p className="mt-1 text-sm text-ink-soft">
                                      {cat.retention}
                                    </p>
                                  </div>
                                </div>

                                {cat.vendors.length > 0 && (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-2">
                                      Third-party vendors
                                    </p>
                                    <div className="overflow-hidden rounded-lg border border-ink/10">
                                      <table className="w-full text-left text-sm">
                                        <thead className="bg-surface/60">
                                          <tr>
                                            <th className="px-3 py-2.5 font-semibold text-ink text-xs">
                                              Vendor
                                            </th>
                                            <th className="hidden px-3 py-2.5 font-semibold text-ink text-xs sm:table-cell">
                                              Domain
                                            </th>
                                            <th className="px-3 py-2.5 font-semibold text-ink text-xs text-right">
                                              Privacy Policy
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-ink/5">
                                          {cat.vendors.map((vendor) => (
                                            <tr
                                              key={vendor.name}
                                              className="bg-white"
                                            >
                                              <td className="px-3 py-2.5 text-ink-soft">
                                                {vendor.name}
                                              </td>
                                              <td className="hidden px-3 py-2.5 text-ink-muted sm:table-cell">
                                                {vendor.domain}
                                              </td>
                                              <td className="px-3 py-2.5 text-right">
                                                <a
                                                  href={vendor.privacyPolicyUrl}
                                                  target={
                                                    vendor.privacyPolicyUrl.startsWith(
                                                      "http",
                                                    )
                                                      ? "_blank"
                                                      : undefined
                                                  }
                                                  rel={
                                                    vendor.privacyPolicyUrl.startsWith(
                                                      "http",
                                                    )
                                                      ? "noopener noreferrer"
                                                      : undefined
                                                  }
                                                  className="inline-flex items-center gap-1 text-xs font-medium text-brand-accent hover:underline"
                                                >
                                                  View
                                                  <ExternalLink className="h-3 w-3" />
                                                </a>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal footer — master action bar */}
              <div className="flex flex-col gap-2.5 border-t border-ink/10 p-5 sm:flex-row sm:justify-end sm:p-6">
                <button
                  onClick={handleAcceptAll}
                  className="btn-primary w-full justify-center !py-2.5 !text-sm sm:w-auto"
                >
                  Accept All
                </button>
                <button
                  onClick={handleSaveChoices}
                  className="btn-secondary w-full justify-center !py-2.5 !text-sm sm:w-auto"
                >
                  Save My Choices
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Persistent floating trigger --- */}
      {!bannerVisible && !modalOpen && (
        <button
          onClick={() => {
            const stored = readStoredChoices();
            if (stored) setChoices(stored);
            setModalOpen(true);
          }}
          className="fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-dark shadow-card-hover border border-ink/10 transition-all duration-300 hover:bg-surface hover:text-brand-accent"
          aria-label="Open cookie settings"
          title="Cookie Settings"
        >
          <Cookie className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

function ToggleSwitch({
  isOn,
  disabled,
  label,
  onClick,
}: {
  isOn: boolean;
  disabled?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${
        isOn
          ? "bg-brand-accent"
          : "bg-ink/15"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
          isOn ? "translate-x-5" : "translate-x-0.5"
        }`}
      >
        {isOn && disabled && (
          <Check className="h-3 w-3 text-brand-accent" />
        )}
      </span>
    </button>
  );
}
