import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      enablePixel();
    }
  }, []);

  const enablePixel = () => {
    window.dispatchEvent(new CustomEvent('cookie-consent-accepted'));
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    enablePixel();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-deep-navy/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pacific-cyan/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-pacific-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">Cookie Settings</h3>
                  <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
                    We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking "Accept All", you agree to our use of cookies as described in our{' '}
                    <Link to="/privacy-policy" className="text-pacific-cyan hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="px-6 py-3 rounded-lg bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors border border-white/10"
                >
                  Decline All
                </button>
                <button
                  onClick={handleAccept}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white text-sm font-semibold hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
