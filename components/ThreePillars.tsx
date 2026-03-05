import React from 'react';
import { ClipboardList, Truck, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const ThreePillars: React.FC = () => {
  const pillars = [
    {
      id: 1,
      label: "The Decisions",
      technical: "Strategic Downsizing",
      description: "We help your loved one decide what moves, what stays, and how everything fits before a single box is packed.",
      icon: ClipboardList,
      color: "bg-blue-50 text-blue-600",
      delay: 0
    },
    {
      id: 2,
      label: "The Move",
      technical: "Managed Move & Setup",
      description: "We manage vendors, oversee move-day, and handle the white-glove setup so the new home is comfortable immediately.",
      icon: Truck,
      color: "bg-[#2E5D4B]/10 text-brand-primary",
      delay: 0.1
    },
    {
      id: 3,
      label: "The House",
      technical: "Estate Dispersion",
      description: "We handle what happens before and after: sorting, donations, shipping, disposal, repairs, cleaning, and getting the home market-ready if needed.",
      icon: Home,
      color: "bg-green-50 text-brand-secondary",
      delay: 0.2
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-white rounded-t-[3rem] shadow-sm -mt-8 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            We Manage the Three Pillars of a <br className="hidden md:block" /> Complex Transition.
          </h2>
          <p className="text-lg text-gray-600">
            A successful transition requires coordinating decisions, the move itself, and the home — simultaneously. Steadwell manages all three under one plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pillar.delay, duration: 0.5 }}
              className="relative group p-8 rounded-3xl border border-gray-100 bg-brand-cream hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${pillar.color}`}>
                <pillar.icon className="w-7 h-7" />
              </div>
              
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-brand-dark">{pillar.label}</h3>
                <span className="inline-block mt-1 text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-primary transition-colors">
                  {pillar.technical}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                {pillar.description}
              </p>

              {/* Decorative Number */}
              <div className="absolute top-6 right-8 text-6xl font-bold text-gray-100 group-hover:text-gray-50 transition-colors pointer-events-none -z-10">
                {pillar.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;