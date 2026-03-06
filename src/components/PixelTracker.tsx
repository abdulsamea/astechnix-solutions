import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PixelTracker() {
  const location = useLocation();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      setHasConsent(true);
    }

    const handleConsent = () => setHasConsent(true);
    window.addEventListener('cookie-consent-accepted', handleConsent);
    return () => window.removeEventListener('cookie-consent-accepted', handleConsent);
  }, []);

  useEffect(() => {
    if (hasConsent && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location, hasConsent]);

  return null;
}
