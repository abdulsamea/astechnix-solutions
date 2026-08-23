import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { company } from "../../config/company";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Terms" }];

export default function Terms() {
  return (
    <>
      <Seo meta={{ title: "Terms of Service | ASTechnix", description: "ASTechnix terms of service governing the use of this website and engagement of services." }} />
      <PageHeader breadcrumbs={crumbs} title="Terms of Service" description="The terms governing use of this website and engagement of ASTechnix services." />

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-prose">
          <div className="space-y-6 text-body">
            <div>
              <h2 className="heading-3 text-ink mb-3">1. Acceptance of Terms</h2>
              <p>By accessing this website, you agree to these terms of service. If you do not agree, please do not use this website.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">2. Services</h2>
              <p>{company.name} provides managed IT outsourcing and technology delivery services. Specific engagement terms are defined in separate service agreements signed by both parties.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">3. Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, and design elements — is the property of {company.name} unless otherwise stated. You may not reproduce or distribute our content without permission.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">4. Disclaimer</h2>
              <p>Information on this website is provided for general informational purposes. Service availability, pricing, and terms are confirmed through formal engagement agreements.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">5. Limitation of Liability</h2>
              <p>{company.name} is not liable for any indirect or consequential damages arising from the use of this website. Service-related liability is defined in individual engagement contracts.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">6. Governing Law</h2>
              <p>These terms are governed by applicable laws in India. Any disputes shall be resolved in accordance with Indian legal procedures.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">7. Contact</h2>
              <p>For questions about these terms, contact us at {company.email}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
