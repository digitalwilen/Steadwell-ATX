import React from 'react';
import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Accountability: React.FC = () => {
  const painPoints = [
    "Hiring, coordinating, and chasing multiple vendors",
    "Hard decisions about what stays, what goes, and what matters",
    "Move-day chaos without an on-site lead",
    "Weeks of living among boxes while the home gets “finished later”",
    "The former home still needing clean-out, repairs, and handoff"
  ];

  const benefits = [
    { title: "Strategic Planning", desc: "Floor plan + room-by-room sorting before packing begins" },
    { title: "Vendor Management", desc: "Single-point of coordination across movers, haulers, and shippers" },
    { title: "Turn-Key Setup", desc: "Beds made, kitchen functional, art hung, so it feels like home immediately" },
    { title: "Property Closeout", desc: "Donations, dispersal, and “broom-swept” handoff for listing readiness" }
  ];

  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">A Single Point of Accountability</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Boxes aren’t the hard part. The hard part is coordinating five vendors, two homes, and a thousand decisions - while trying to keep life together. Steadwell replaces the chaos with one responsible lead, one documented plan, and a finished home on the other side.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Pain Points */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-8">What Families Get Stuck Managing</h3>
            <ul className="space-y-6">
              {painPoints.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1.5 mr-4 flex-shrink-0 bg-gray-50 p-1 rounded">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-gray-500 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Steadwell Standard */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <h3 className="text-xl font-bold text-brand-primary uppercase tracking-widest mb-8">The Steadwell Standard</h3>
            <ul className="space-y-8">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 bg-brand-secondary p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Accountability;