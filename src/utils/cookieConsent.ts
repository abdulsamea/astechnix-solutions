export interface CookieConsentState {
  essential: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface StoredConsent extends CookieConsentState {
  timestamp: string;
  version: string;
}

const STORAGE_KEY = "user_cookie_preferences";
const CONSENT_VERSION = "2026-09-08-v1";

export const COOKIE_CATEGORIES = [
  "essential",
  "functional",
  "analytics",
  "marketing",
] as const;

export type CookieCategory = (typeof COOKIE_CATEGORIES)[number];

const defaultConsent: CookieConsentState = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

function isStoredConsent(value: unknown): value is StoredConsent {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.essential === "boolean" &&
    typeof v.functional === "boolean" &&
    typeof v.analytics === "boolean" &&
    typeof v.marketing === "boolean" &&
    typeof v.timestamp === "string" &&
    typeof v.version === "string"
  );
}

export function getCookieConsent(): CookieConsentState {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConsent;
    const parsed: unknown = JSON.parse(raw);
    if (!isStoredConsent(parsed)) return defaultConsent;
    return {
      essential: true,
      functional: parsed.functional,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
    };
  } catch {
    return defaultConsent;
  }
}

export function hasUserConsented(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw !== null;
  } catch {
    return false;
  }
}

export function saveCookieConsent(
  choices: CookieConsentState,
): StoredConsent {
  const record: StoredConsent = {
    ...choices,
    essential: true,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage may be unavailable in private browsing — consent
    // remains session-only
  }
  window.dispatchEvent(new CustomEvent("cookieconsentchange", { detail: record }));
  return record;
}

export function hasConsentFor(
  category: CookieCategory,
): boolean {
  const consent = getCookieConsent();
  return consent[category];
}

export const CONSENT_VERSION_CURRENT = CONSENT_VERSION;
export const COOKIE_STORAGE_KEY = STORAGE_KEY;
