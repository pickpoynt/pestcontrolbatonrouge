import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ToxicBlackMoldInfo from "@/components/landing/ToxicBlackMoldInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Wind, Microscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>toxic black mold cleanup Brevard NC | Brevard Toxic Black Mold Cleanup Pros</title>
        <meta name="description" content="Looking for professional toxic black mold cleanup Brevard NC? Expert black mold removal, air purification, and full property remediation for Brevard homes. Call 3802660944 today!" />
        <meta name="keywords" content="toxic black mold cleanup Brevard NC, Brevard black mold cleaning, toxic mold removal Brevard NC, professional black mold remediation Brevard" />
        <link rel="canonical" href="https://toxicblackmoldcleanupbrevardnc.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brevard Toxic Black Mold Cleanup Pros",
            "image": "/1.jpeg",
            "@id": "https://toxicblackmoldcleanupbrevardnc.vercel.app/",
            "url": "https://toxicblackmoldcleanupbrevardnc.vercel.app/",
            "telephone": "+13802660944",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "101 S Broad St",
              "addressLocality": "Brevard",
              "addressRegion": "NC",
              "postalCode": "28712",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.2334",
              "longitude": "-82.7343"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Black Mold Remediation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Brevard Toxic Black Mold Cleanup Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Brevard, NC"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Toxic Black Mold Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Toxic Black Mold Cleanup" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Black Mold Air Quality Testing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Safe Mold Containment & Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HEPA Air Scrubbing" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="toxic black mold cleanup Brevard NC | Brevard Toxic Black Mold Cleanup Pros" />
        <meta property="og:description" content="Expert toxic black mold cleanup services in Brevard, NC. Professional removal, air filtering, and property restoration to make your home safe again. Call 3802660944!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toxicblackmoldcleanupbrevardnc.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Toxic Black Mold <br />
              <span className="text-white drop-shadow-sm uppercase">Cleanup in Brevard NC</span>
            </>
          }
          subtitle="Brevard's premier specialists in professional toxic black mold cleanup. We use strictly controlled containment and advanced removal techniques to rid your property of dangerous Stachybotrys chartarum, protecting your air and health in the Blue Ridge Mountains."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="BREVARD BLACK MOLD PROS"
          phone="3802660944"
          features={[
            { icon: Microscope, text: "Toxicity Testing" },
            { icon: Wind, text: "HEPA Filtration" },
            { icon: ShieldCheck, text: "Full Remediation" }
          ]}
        />
        <Services />
        <WhyUs />
        <ToxicBlackMoldInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://wildliferemovalgastonianc.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Wildlife Removal Gastonia NC</a>
              <a href="https://wildliferemovaldouglasvillega.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Wildlife Removal Douglasville GA</a>
              <a href="https://toxicblackmoldcleanupgulfbreeze.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Toxic Black Mold Cleanup Gulf Breeze</a>
              <a href="https://moldremediationeauclairewi.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Mold Remediation Eau Claire WI</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
