import { Seo } from "../components/Seo";
import { Button } from "../components/Button";
import { ctaConfig } from "../config/cta";

export default function NotFound() {
  return (
    <>
      <Seo meta={{ title: "Page Not Found | AStechnix", description: "The page you are looking for could not be found." }} />
      <section className="flex min-h-[70vh] items-center justify-center bg-canvas px-6 py-20">
        <div className="text-center">
          <p className="font-heading text-7xl font-extrabold text-brand-accent md:text-8xl">404</p>
          <h1 className="heading-2 text-ink mt-4">Page not found</h1>
          <p className="text-lead mt-3 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
            <Button to="/" variant="primary" size="lg">Back to Home</Button>
            <Button to={ctaConfig.primary.path} variant="secondary" size="lg">{ctaConfig.primary.label}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
