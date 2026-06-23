import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PixelTracker from "./components/PixelTracker";

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
import RemoteDevOps from "./pages/RemoteDevOps";
import RemoteDevOpsSuccess from "./pages/RemoteDevOpsSuccess";
import EngagementModels from "./pages/EngagementModels";
import CostOptimization from "./pages/CostOptimization";
import WhyChooseUs from "./pages/WhyChooseUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <PixelTracker />

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
          <Route path="services/devops" element={<RemoteDevOps />} />
          <Route
            path="services/devops/success"
            element={<RemoteDevOpsSuccess />}
          />
          <Route path="engagement-models" element={<EngagementModels />} />
          <Route path="services/cost-optimization" element={<CostOptimization />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
