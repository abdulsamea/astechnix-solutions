import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PixelTracker from "./components/PixelTracker";

import Home from "./pages/Home";
import CloudServices from "./pages/CloudServices";
import FullStack from "./pages/FullStack";
import DevOps from "./pages/DevOps";
import UIUX from "./pages/UIUX";
import Contact from "./pages/Contact";
import CloudConsultation from "./pages/CloudConsultation";
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
