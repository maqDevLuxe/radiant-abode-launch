/* ========================================================================
   INDEX PAGE — Full landing page assembly (14 sections)
   ======================================================================== */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturesSection from "@/components/FeaturesSection";
import InnovativeSolutions from "@/components/InnovativeSolutions";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import AppEngagement from "@/components/AppEngagement";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import StatCounters from "@/components/StatCounters";
import BlogSection from "@/components/BlogSection";
import CustomerSatisfaction from "@/components/CustomerSatisfaction";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterFooter from "@/components/NewsletterFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Sticky Navbar */}
      <Navbar />
      {/* 2. Hero — Split layout */}
      <HeroSection />
      {/* 3. Trusted Partners */}
      <PartnersSection />
      {/* 4. Core Features */}
      <FeaturesSection />
      {/* 5. Innovative Solutions */}
      <InnovativeSolutions />
      {/* 6. Performance Metrics */}
      <PerformanceMetrics />
      {/* 7. App Engagement */}
      <AppEngagement />
      {/* 8. Comprehensive Services */}
      <ServicesSection />
      {/* 9. Promo Video */}
      <VideoSection />
      {/* 10. Stat Counters */}
      <StatCounters />
      {/* 11. Latest Tech News */}
      <BlogSection />
      {/* 12. Customer Satisfaction */}
      <CustomerSatisfaction />
      {/* 13. Testimonials */}
      <TestimonialsSection />
      {/* 14. Newsletter & Footer */}
      <NewsletterFooter />
    </div>
  );
};

export default Index;
