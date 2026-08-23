import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { company } from "../../config/company";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Cookies" }];

export default function Cookies() {
  return (
    <>
      <Seo meta={{ title: "Cookie Policy | ASTechnix", description: "ASTechnix cookie policy describing how cookies are used on this website." }} />
      <PageHeader breadcrumbs={crumbs} title="Cookie Policy" description="How ASTechnix uses cookies on this website." />

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-prose">
          <div className="space-y-6 text-body">
            <div>
              <h2 className="heading-3 text-ink mb-3">1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They allow the site to remember your actions and preferences over time.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">2. How We Use Cookies</h2>
              <p>We use cookies for basic analytics — understanding how visitors find and use our site — and for functionality such as remembering form inputs. We do not use cookies for advertising or cross-site tracking.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">3. Managing Cookies</h2>
              <p>You can control and delete cookies through your browser settings. Disabling cookies may affect some website functionality.</p>
            </div>
            <div>
              <h2 className="heading-3 text-ink mb-3">4. Contact</h2>
              <p>For questions about our cookie policy, contact us at {company.email}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
