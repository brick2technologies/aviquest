import SEO from "../components/SEO";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import ClientsSection from "../components/ClientsSection";
import TestimonialSection from "../components/TestimonialSection";
import BlogSection from "../components/Blogsection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Aviquest | Poultry Medicines & Health Solutions for Egg & Meat Production"
        description="Aviquest is a poultry pharmaceutical manufacturer producing medicines and supplements that improve egg production, meat growth, and hen and chick health."
        keywords="poultry medicines, poultry pharma company, egg production supplements, broiler growth medicine, hen health products, chick immunity supplements"
        canonical="https://aviquest.in/"
      />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <ClientsSection />
        <TestimonialSection />
        <BlogSection />
      </main>
    </>
  );
}
