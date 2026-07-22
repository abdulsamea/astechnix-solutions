import { useEffect } from "react";
import AnnouncementBar from "./sections/AnnouncementBar";
import Hero from "./sections/Hero";
import ComplianceBar from "./sections/ComplianceBar";
import TalentCategories from "./sections/TalentCategories";
import Estimator from "./sections/Estimator";
import TalentPreview from "./sections/TalentPreview";
import EngagementModels from "./sections/EngagementModels";
import OnboardingTimeline from "./sections/OnboardingTimeline";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";

export default function ITStaffing() {
  useEffect(() => {
    document.title =
      "Vetted IT, Cloud & Cybersecurity Talent in 48 Hours | AStechnix IT Staffing";
  }, []);

  const scrollTo = (id: string) => {
    // document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80; // adjust to your navbar height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <AnnouncementBar />
      <Hero
        onFindSpecialists={() => scrollTo("estimator")}
        onBrowseRoles={() => scrollTo("talent")}
      />
      <ComplianceBar />
      <TalentCategories onFindSpecialists={() => scrollTo("estimator")} />
      <Estimator />
      <TalentPreview onFindSpecialists={() => scrollTo("estimator")} />
      <EngagementModels onFindSpecialists={() => scrollTo("estimator")} />
      <OnboardingTimeline />
      <Faq />
      <FinalCta onFindSpecialists={() => scrollTo("estimator")} />
    </div>
  );
}
