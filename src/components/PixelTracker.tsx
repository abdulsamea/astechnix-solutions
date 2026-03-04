import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
}
