import React from 'react';
import Button from './Button';
import TrustBar from './TrustBar';
import AbstractArt from './AbstractArt';
import { motion } from 'framer-motion';

interface HeroProps {
  setView: (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-center lg:text-left z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark mb-6 tracking-tight">
              We Run the <span className="text-brand-primary relative whitespace-nowrap">
                Entire Transition
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <br className="hidden md:block"/>
              So Your Family Doesn’t Have To.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We’re not movers. We’re end-to-end project managers who handle the sorting, vendors, logistics, move-day oversight, and white-glove setup — so your loved one walks into a fully settled home and your family stays focused on each other.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button 
                size="lg" 
                withArrow 
                onClick={() => setView('contact')}
              >
                Schedule a Private Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setView('our-process')}
              >
                See How the Process Works
              </Button>
            </div>

            <TrustBar />
          </motion.div>

          {/* Visual Column */}
          <div className="relative h-[400px] md:h-[500px] w-full lg:block">
            <AbstractArt />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;