import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { company } from "../../config/company";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Privacy" }];

export default function Privacy() {
  return (
    <>
      <Seo meta={{ title: "Privacy Policy | ASTechnix", description: "ASTechnix privacy policy describing how we collect, use, and protect personal data." }} />
      <PageHeader breadcrumbs={crumbs} title="Privacy Policy" description="How ASTechnix collects, uses, and protects your personal data." />

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-prose">
          <div className="space-y-6 text-body">
            <div>
              <h2 className="heading-3 text-ink mb-3">1. Overview</h2>
              <p>{company.name} ("we", "us", "our") respects your privacy. This policy describes how we collect, use, and protect personal information when you visit our website or engage our services.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">2. Information We Collect</h2>
              <p>We collect information you voluntarily provide through our contact form — name, email address, company name, and message content. We also collect basic analytics data such as pages visited and referral source.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">3. How We Use Your Information</h2>
              <p>We use the information you provide to respond to your inquiry, schedule consultations, and communicate about our services. We do not sell or rent your personal information to third parties.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">4. Data Storage and Security</h2>
              <p>Your data is stored securely and accessible only to authorized personnel. We apply least-privilege access principles and maintain audit logs of administrative actions.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">5. Cookies</h2>
              <p>We use minimal cookies for analytics and functionality. See our Cookie Policy for details.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">6. Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data by contacting us at {company.email}.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">7. Contact</h2>
              <p>For privacy-related questions, contact us at {company.email} or {company.phoneDisplay}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
