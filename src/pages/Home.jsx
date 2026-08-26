import Hero from '../components/Hero';
import Services from '../components/Services';
import MissionVisionValues from '../components/MissionVisionValues';
import WhyChooseBest from '../components/WhyChooseBest';
import OurFacilities from '../components/OurFacilities';
import StatsBar from '../components/StatsBar';
import ConditionsWeTreat from '../components/ConditionsWeTreat';
import ClinicalSpotlights from '../components/ClinicalSpotlights';
import PopularTreatments from '../components/PopularTreatments';
import AdvancedProcedures from '../components/AdvancedProcedures';
import TreatmentJourney from '../components/TreatmentJourney';
import AwardsRecognition from '../components/AwardsRecognition';
import Testimonials from '../components/Testimonials';
import DiagnosticPartners from '../components/DiagnosticPartners';
import YoutubeVideos from '../components/YoutubeVideos';
import InstagramFeed from '../components/InstagramFeed';
import BlogInsights from '../components/BlogInsights';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <MissionVisionValues />
      <WhyChooseBest />
      <OurFacilities />
      <StatsBar />
      <ConditionsWeTreat />
      <ClinicalSpotlights />
      <PopularTreatments />
      <AdvancedProcedures />
      <TreatmentJourney />
      <AwardsRecognition />
      <Testimonials />
      <YoutubeVideos />
      <DiagnosticPartners />
      <InstagramFeed />
      <BlogInsights />
    </main>
  );
}
