import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface ProcessProps {
  setView: (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => void;
}

const Process: React.FC<ProcessProps> = ({ setView }) => {
  const steps = [
    {
      title: "Strategic Planning",
      description: "Timeline, floor planning, and budget alignment before a single box is packed."
    },
    {
      title: "Preparation",
      description: "Sorting belongings, coordinating repairs or staging, and preparing both the move and the property."
    },
    {
      title: "Move-Day Leadership",
      description: "On-site supervision of all logistics, vendors, and asset protection."
    },
    {
      title: "Complete Home Setup",
      description: "Unpacking, organizing, furniture placement, and full white-glove arrival."
    },
    {
      title: "Estate Closeout",
      description: "Selling, donating, clearing, and cleaning the former residence—handed off market-ready."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">A Clear, Proven Process — Even When Things Feel Unclear.</h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-stone hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12 p-6 md:p-8 rounded-3xl bg-brand-cream border border-gray-100 shadow-sm">
                  <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full mb-3">STEP 0{index + 1}</span>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Center Circle */}
                <div className="w-8 h-8 rounded-full bg-brand-primary border-4 border-white shadow-md z-10 hidden md:flex items-center justify-center mx-4 flex-shrink-0"></div>

                {/* Spacer */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button 
            size="lg" 
            withArrow
            onClick={() => setView('our-process')}
          >
            See How the Process Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;