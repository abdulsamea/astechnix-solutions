import { useEffect } from 'react';
import AnnouncementBar from './sections/AnnouncementBar';
import Hero from './sections/Hero';
import ComplianceBar from './sections/ComplianceBar';
import TalentCategories from './sections/TalentCategories';
import Estimator from './sections/Estimator';
import TalentPreview from './sections/TalentPreview';
import EngagementModels from './sections/EngagementModels';
import OnboardingTimeline from './sections/OnboardingTimeline';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';

export default function ITStaffing() {
  useEffect(() => {
    document.title =
      'Vetted IT, Cloud & Cybersecurity Talent in 48 Hours | AStechnix IT Staffing';
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      <AnnouncementBar />
      <Hero
        onFindSpecialists={() => scrollTo('estimator')}
        onBrowseRoles={() => scrollTo('talent')}
      />
      <ComplianceBar />
      <TalentCategories />
      <Estimator />
      <TalentPreview />
      <EngagementModels />
      <OnboardingTimeline />
      <Faq />
      <FinalCta />
    </div>
  );
}
