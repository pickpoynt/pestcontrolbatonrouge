import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does it cost to have someone get rid of black mold?",
    answer: "Professional toxic black mold cleanup in Brevard typically ranges from $1,500 to $5,000+. The cost is influenced by the extent of the infestation, the structural materials involved, and the complexity of the containment needed to protect your home."
  },
  {
    question: "How much does it cost to fix black mold?",
    answer: "Fixing black mold involves both removal and material replacement. In Brevard NC, homeowners should budget for professional remediation plus the cost of rebuilding affected areas like drywall, insulation, or flooring."
  },
  {
    question: "What kills 100% of black mold?",
    answer: "Only physical removal and replacement of contaminated materials, combined with industrial-grade antimicrobial treatments and total moisture elimination, can guarantee 100% eradication of toxic black mold."
  },
  {
    question: "Does black mold need to be professionally cleaned?",
    answer: "Absolutely. Toxic black mold (Stachybotrys) releases mycotoxins that are hazardous to inhale. Professionals use hazmat gear and negative air pressure to prevent these spores from spreading during the cleaning process."
  },
  {
    question: "Can you live in a house with black mold in the basement?",
    answer: "It is not recommended. Even if the mold is in the basement, HVAC systems and the 'stack effect' can distribute toxic spores and mycotoxins throughout the entire Brevard home, posing a risk to all occupants."
  },
  {
    question: "Is professional mold removal worth it?",
    answer: "Yes. Professional remediation ensures the root cause is addressed, prevents cross-contamination, and provides a 'clearance' certificate that protects your family's health and your property's resale value."
  },
  {
    question: "Can a house with black mold be saved?",
    answer: "Yes, almost any home in Brevard can be saved with thorough, professional remediation. The key is identifying all hidden colonies and completely resolving the moisture source that fueled the growth."
  },
  {
    question: "Will homeowners insurance pay for black mold?",
    answer: "Insurance coverage often depends on the source. If the mold resulted from a sudden, accidental water discharge (like a burst pipe), it may be covered. Long-term neglect or humidity issues are typically excluded."
  },
  {
    question: "How do professionals get rid of black mold?",
    answer: "Our Brevard specialists use a 5-step process: Containment with thick poly-sheeting, establishing negative air pressure, HEPA air scrubbing, physical removal of contaminated materials, and surface disinfection."
  },
  {
    question: "What are the 10 warning signs of mold toxicity?",
    answer: "1. Persistent coughing 2. Chronic fatigue 3. Severe headaches 4. Brain fog/memory loss 5. Skin rashes 6. Shortness of breath 7. Eye irritation 8. Sneezing fits 9. Sinus congestion 10. Sudden mood changes or anxiety."
  },
  {
    question: "Will mold go away if it dries out?",
    answer: "No. Drying out mold makes it go dormant, but the spores and mycotoxins remain active and extremely brittle, making them even easier to inhale. Only physical removal solves the problem."
  },
  {
    question: "Is it okay to sleep in a house with black mold?",
    answer: "Sleeping in a home with active toxic mold is dangerous because your respiratory rate changes and you are exposed for 7-9 hours continuously. This can lead to severe nocturnal asthma and systemic inflammation."
  },
  {
    question: "Has black mold ever killed anyone?",
    answer: "Yes, documented cases exist where severe Stachybotrys exposure led to pulmonary hemorrhage in infants and fatal respiratory failure in immunocompromised individuals. It is a serious biological threat."
  },
  {
    question: "What are signs of hidden mold?",
    answer: "Look for a persistent musty odor, bubbling or peeling paint, warped baseboards, or 'ghost' spots on ceilings. Often, the first sign of hidden mold in Brevard homes is unexplained family illness."
  },
  {
    question: "What stops black mold from spreading?",
    answer: "Isolation and moisture control are key. Professionals use industrial-grade containment hurdles and antimicrobial barriers to 'lock' the mold in place until it can be safely extracted from the building."
  },
  {
    question: "What kills mold spores instantly?",
    answer: "While some high-level biocides can kill spores on contact, removal is the only 'instant' way to make a home safe. Spores (dead or alive) remain toxic until they are physically removed from the environment."
  },
  {
    question: "How do I test myself for mold toxicity?",
    answer: "You should visit a functional medicine doctor or toxicologist in Brevard for a Mycotoxin Urine Panel or a blood test checking for specific mold antibodies and inflammatory markers like C4a."
  },
  {
    question: "Can air purifiers remove mold spores?",
    answer: "Yes, but only if they utilize a True HEPA filter (Grade 13 or higher). These filters capture 99.97% of particles as small as 0.3 microns, effectively pulling mold spores out of your Brevard home's air."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Toxic Black Mold Cleanup <span className="text-indigo-600">in Brevard NC FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about professional toxic mold removal, severe mold costs, and critical health concerns in Brevard, North Carolina.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-xs">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
