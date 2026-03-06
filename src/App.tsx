import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PixelTracker from "./components/PixelTracker";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import CloudServices from "./pages/CloudServices";
import FullStack from "./pages/FullStack";
import DevOps from "./pages/DevOps";
import UIUX from "./pages/UIUX";
import Contact from "./pages/Contact";
import CloudConsultation from "./pages/CloudConsultation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DataRequest from "./pages/DataRequest";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PixelTracker />
      <CookieConsent />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cloud-services" element={<CloudServices />} />
          <Route path="full-stack" element={<FullStack />} />
          <Route path="devops" element={<DevOps />} />
          <Route path="ui-ux" element={<UIUX />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cloud-consultation" element={<CloudConsultation />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="data-request" element={<DataRequest />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
