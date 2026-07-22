declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const reportLeadConversion = () => {
  window.gtag?.("event", "conversion", {
    send_to: "AW-18247449976/gHElCMCN39QcEPj6h_1D",
  });
};
