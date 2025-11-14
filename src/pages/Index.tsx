import Hero from "@/components/Hero";
import EmailVerifier from "@/components/EmailVerifier";
import EducationalInfo from "@/components/EducationalInfo";
import ProFeatures from "@/components/ProFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmailVerifier />
      <EducationalInfo />
      <ProFeatures />
      <Footer />
    </div>
  );
};

export default Index;
