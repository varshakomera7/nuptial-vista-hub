import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import SuccessStories from "@/components/SuccessStories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
