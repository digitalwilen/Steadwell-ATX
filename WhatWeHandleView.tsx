import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Truck, 
  Home, 
  CheckCircle2, 
  Scale, 
  Briefcase, 
  Palmtree, 
  Info
} from 'lucide-react';
import Button from './Button';

interface WhatWeHandleViewProps {
  setView: (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => void;
}

const WhatWeHandleView: React.FC<WhatWeHandleViewProps> = ({ setView }) => {
  const pillars = [
    {
      id: 1,
      title: "The Decisions",
      subtitle: "Strategic Downsizing & Transition Planning",
      intro: "Before anything is packed, we establish clarity. This phase replaces emotional overwhelm with a structured, calm decision process.",
      icon: ClipboardCheck,
      details: [
        { label: "Floor Planning & Fit", text: "We measure the new residence and design a layout around the pieces that matter most—so everything fits before it moves." },
        { label: "Guided Downsizing (“The Edit”)", text: "We work side-by-side to determine what stays, what goes, and what’s preserved—respecting memories while planning for the future." },
        { label: "Inventory & Tracking", text: "A professional tagging and tracking system ensures nothing is lost and every item lands exactly where it belongs." }
      ],
      outcome: "Fewer regrets, fewer surprises, and a move plan built on intention—not stress.",
      color: "blue"
    },
    {
      id: 2,
      title: "The Move",
      subtitle: "Logistics Leadership & White-Glove Setup",
      intro: "We are not movers. We are the general contractors of your transition.",
      icon: Truck,
      details: [
        { label: "Vendor Management", text: "We vet, hire, schedule, and supervise all vendors. You never negotiate rates, coordinate timing, or manage a loading dock." },
        { label: "Asset Protection", text: "Oversight of packing and handling for high-value art, antiques, and heirlooms using professional-grade standards." },
        { label: "Turn-Key Arrival", text: "We don’t leave boxes behind. We unpack essentials, organize kitchens and closets, make the beds, hang the art, and set up the home for daily living." }
      ],
      outcome: "A calm move day—and a home that feels settled immediately.",
      color: "orange"
    },
    {
      id: 3,
      title: "The House",
      subtitle: "Estate Dispersion & Market Preparation",
      intro: "What happens to the old home matters just as much as the new one. We manage the entire back end.",
      icon: Home,
      details: [
        { label: "Estate Sales & Auctions", text: "We identify marketable assets and manage the sale process to recover value and offset costs." },
        { label: "Donation Coordination", text: "Charity drop-offs, logistics, and tax receipts handled end-to-end." },
        { label: "Market-Ready Clear-Out", text: "Junk removal, shredding, and deep cleaning—leaving the property broom-swept and ready for listing." }
      ],
      outcome: "No loose ends delaying the sale or draining the family’s energy.",
      color: "green"
    }
  ];

  const specialtyItems = [
    { icon: Scale, title: "Divorce & Family Transitions", desc: "Discreet, neutral coordination during sensitive household separations." },
    { icon: Briefcase, title: "Executive Relocations", desc: "For clients who cannot afford downtime or distraction." },
    { icon: Palmtree, title: "Second Home Setup", desc: "Turn-key furnishing and setup for secondary or seasonal homes." }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Page Header */}
      <section className="container mx-auto px-4 md:px-6 mb-16 lg:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-8 tracking-tight leading-[1.1]">
            Comprehensive Project Management <br className="hidden lg:block" /> for Life’s Most Complex Moves
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
            Most companies handle one task. <span className="text-brand-dark font-bold">Steadwell manages the entire transition.</span>
          </p>

          <div className="space-y-3">
            <p className="text-xl md:text-2xl font-bold text-brand-dark">
              From the attic to the closing table.
            </p>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed">
              We act as your single point of accountability—so nothing falls through the cracks and your family doesn’t carry the burden.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Intro Subtitle */}
      <section className="bg-white py-16 border-y border-brand-stone">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">The Three Pillars of a Successful Transition</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A complex move only works when decisions, logistics, and the home itself are managed together. Steadwell runs all three under one plan.
          </p>
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 
                  ${pillar.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                    pillar.color === 'orange' ? 'bg-orange-50 text-brand-primary' : 
                    'bg-green-50 text-brand-secondary'}`}
                >
                  <pillar.icon className="w-8 h-8" />
                </div>

                <div className="mb-8">
                  <span className="text-brand-primary font-extrabold text-sm uppercase tracking-widest mb-2 block">{pillar.id}. {pillar.title}</span>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{pillar.subtitle}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.intro}</p>
                </div>

                <div className="flex-grow space-y-6 mb-10">
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="group">
                      <h4 className="font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">{detail.label}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{detail.text}</p>
                    </div>
                  ))}
                </div>

                {/* Outcome Box */}
                <div className={`p-6 rounded-2xl flex items-start shadow-sm border
                  ${pillar.color === 'blue' ? 'bg-blue-50/50 border-blue-100' : 
                    pillar.color === 'orange' ? 'bg-orange-50/50 border-orange-100' : 
                    'bg-green-50/50 border-green-100'}`}
                >
                  <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 
                    ${pillar.color === 'blue' ? 'text-blue-500' : 
                      pillar.color === 'orange' ? 'text-brand-primary' : 
                      'text-brand-secondary'}`} 
                  />
                  <p className="text-sm font-semibold italic text-brand-dark">
                    <span className="not-italic block text-[10px] uppercase tracking-wider text-gray-400 mb-1">Outcome:</span>
                    {pillar.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Transitions */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden rounded-[3rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialty Transitions</h2>
            <p className="text-gray-400 text-lg">The Same Model, Applied to High-Stakes Situations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialtyItems.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-brand-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do (Subtle) */}
      <section className="py-20 mt-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white border border-brand-stone rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-gray-50 p-4 rounded-2xl text-gray-400">
                <Info className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">What We Don’t Do</h3>
                <p className="text-gray-500 leading-relaxed">
                  Steadwell is not a medical provider or home-health agency. We manage decisions, logistics, vendors, and execution. When care services are needed, we coordinate with your chosen providers to ensure alignment—without stepping outside our role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="container mx-auto px-4 md:px-6 text-center pb-12">
        <div className="bg-brand-primary/10 rounded-[2.5rem] py-16 px-6">
           <h2 className="text-3xl font-bold text-brand-dark mb-6">Ready to replace the chaos with a plan?</h2>
           <Button size="lg" withArrow onClick={() => setView('contact')}>Schedule Your Consultation</Button>
        </div>
      </section>
    </div>
  );
};

export default WhatWeHandleView;