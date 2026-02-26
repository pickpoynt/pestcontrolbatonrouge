import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Toxic Mold Removal",
    description: "Our Brevard specialists provide strict containment and thorough removal of toxic black mold (Stachybotrys) from your property."
  },
  {
    icon: Search,
    title: "Black Mold Inspections",
    description: "Comprehensive air quality testing and inspections designed to identify the source and severity of toxic mold growth safely."
  },
  {
    icon: Activity,
    title: "HEPA Air Scrubbing",
    description: "We deploy industrial-grade HEPA 13 air scrubbers to capture toxic spores and purify the air in your Brevard home."
  },
  {
    icon: Zap,
    title: "Emergency Cleanup",
    description: "Toxic black mold requires immediate attention. We offer rapid response in Brevard to halt mold progression and begin safe removal."
  },
  {
    icon: Sprout,
    title: "Post-Removal Treatment",
    description: "Anti-microbial treatments and surface encapsulants applied to prevent black mold from ever returning to your property."
  },
  {
    icon: ShieldCheck,
    title: "Certified Safety Protocols",
    description: "Our technicians wear hazmat protection and follow strict safety procedures to keep toxic spores from spreading to clean areas."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">Toxic Black Mold Cleanup Brevard NC</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Specialized black mold removal and containment solutions designed strictly for toxic infestations. We restore Brevard properties back to safe living conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
