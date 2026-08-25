import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
// import { AdLayout } from "../layouts/AdLayout";
import { ErrorBoundary } from "../components/ErrorBoundary";

const Home = lazy(() => import("../pages/Home"));
const SoftwareEngineering = lazy(
  () => import("../pages/services/SoftwareEngineering"),
);
const ManagedIT = lazy(() => import("../pages/services/ManagedIT"));
const QATesting = lazy(() => import("../pages/services/QATesting"));
const DataEngineering = lazy(() => import("../pages/services/DataEngineering"));
const HelpdeskSupport = lazy(() => import("../pages/services/HelpdeskSupport"));
const SLAGovernance = lazy(() => import("../pages/delivery/SLAGovernance"));
const SecurityCompliance = lazy(
  () => import("../pages/delivery/SecurityCompliance"),
);
const PricingContracts = lazy(
  () => import("../pages/engagement/PricingContracts"),
);
const About = lazy(() => import("../pages/company/About"));
const CaseStudies = lazy(() => import("../pages/company/CaseStudies"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/legal/Privacy"));
const Cookies = lazy(() => import("../pages/legal/Cookies"));
const Terms = lazy(() => import("../pages/legal/Terms"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ItOutsourcing = lazy(() => import("../pages/ItOutsourcing"));

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-brand-accent" />
    </div>
  );
}

export function AppRouter() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="*"
            element={
              <Layout>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                      path="/services/software-engineering-outsourcing"
                      element={<SoftwareEngineering />}
                    />
                    <Route
                      path="/services/managed-it-infrastructure"
                      element={<ManagedIT />}
                    />
                    <Route
                      path="/services/quality-assurance-testing"
                      element={<QATesting />}
                    />
                    <Route
                      path="/services/data-engineering-analytics"
                      element={<DataEngineering />}
                    />
                    <Route
                      path="/services/helpdesk-end-user-support"
                      element={<HelpdeskSupport />}
                    />
                    <Route
                      path="/delivery-model/sla-governance-reporting"
                      element={<SLAGovernance />}
                    />
                    <Route
                      path="/delivery-model/security-compliance-ip-protection"
                      element={<SecurityCompliance />}
                    />
                    <Route
                      path="/engagement/pricing-and-contracts"
                      element={<PricingContracts />}
                    />
                    <Route path="/company/about" element={<About />} />
                    <Route
                      path="/company/case-studies"
                      element={<CaseStudies />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="*" element={<NotFound />} />
                    <Route
                      path="/it-outsourcing"
                      element={
                        // <AdLayout>
                        <ItOutsourcing />
                        // </AdLayout>
                      }
                    />
                  </Routes>
                </Suspense>
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
