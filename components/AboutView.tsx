import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import Button from './Button';

interface AboutViewProps {
  setView: (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => void;
}

const AboutView: React.FC<AboutViewProps> = ({ setView }) => {
  return (
    <div className="bg-brand-cream overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 border-b border-brand-stone">
        {/* Architectural Texture Simulation */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-stone skew-x-12 origin-top-right transition-transform duration-1000" />
          <div className="absolute top-1/4 left-0 w-1/3 h-1/2 border-r border-brand-dark/20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark mb-10 leading-[1.1] tracking-tight">
              We Manage the Moments <br className="hidden md:block" /> That Matter Most.
            </h1>
            <div className="space-y-8 max-w-2xl">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Steadwell exists to bring clarity, structure, and calm to life’s most complex transitions. We work with families at moments that are emotionally charged, time-sensitive, and deeply personal—when decisions stack quickly and the cost of missteps is high.
              </p>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Our role is simple to describe and difficult to execute well: we take ownership of the entire transition so families don’t have to.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE REFRAME */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              We Don’t Move Boxes. We Manage Outcomes.
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-[1.8] space-y-8">
              <p>
                Most transitions fail not because of effort, but because no one is clearly accountable. In this space, families are often offered help—organizers, movers, estate services—each handling a piece, none responsible for the whole. The result is fragmentation, stress, and avoidable mistakes.
              </p>
              <p>
                Steadwell was built to replace that model with one clear standard: a single, disciplined plan led by one accountable Transition Manager from start to finish.
              </p>
              
              <div className="py-16 md:py-24">
                <blockquote className="text-3xl md:text-5xl font-bold italic text-brand-dark border-l-4 border-brand-primary pl-10 md:pl-16 py-4 leading-tight">
                  “Compassion comforts. Competence carries.”
                </blockquote>
              </div>

              <p>
                We know this work requires heart, but we lead with executive function. We ensure that every engagement is sequenced, owned, and executed against a rigorous standard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: AUSTIN (INNOVATION HUB) */}
      <section className="py-24 lg:py-40 border-y border-brand-stone bg-brand-cream/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                Austin Is Our Home—and Our Standard.
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  Steadwell ATX is headquartered in Austin, and it always will be. Austin isn’t just where we’re based; it’s where our standards were shaped.
                </p>
                <p>
                  This city’s blend of independence, precision, and thoughtful growth reflects how we approach our work: practical, deliberate, and quietly high-performing. As Steadwell expands, Austin remains our home base—the place where our methods are refined and the bar for this industry is set.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] lg:aspect-square bg-brand-stone rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12 lg:p-20"
            >
              {/* Minimalist Architectural abstraction of Austin */}
              <div className="w-full h-full border border-brand-dark/10 relative">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/40 backdrop-blur-sm" />
                <div className="absolute bottom-0 left-0 w-3/4 h-1/3 border-t border-brand-dark/20" />
                <div className="absolute top-1/2 left-1/4 w-full h-px bg-brand-dark/10 -rotate-12" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/30 vertical-rl">Architectural Austin</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE WORK (AUTHORITY) */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-20 border border-brand-stone rounded-[3rem] bg-brand-cream/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 tracking-tight">Single Point of Accountability.</h2>
            <div className="space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Every Steadwell engagement is led by a dedicated Transition Manager. That means:
              </p>
              <ul className="space-y-6">
                {[
                  "Planning before action",
                  "Clear ownership from first call to final walkthrough",
                  "Decisions made early, not under pressure",
                  "A finished home that actually feels finished"
                ].map((item, idx) => (
                  <li key={idx} className="text-lg font-semibold text-brand-dark flex items-start">
                    <span className="mr-6 text-brand-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-500 leading-relaxed pt-6 italic">
                Our clients don’t manage vendors. They don’t chase timelines. They don’t coordinate family logistics. That’s the job.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: TRUST (THE VAULT) */}
      <section className="py-24 border-y border-brand-stone bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">Trust Is the <br /> Foundation.</h2>
            </div>
            <div className="md:w-2/3 space-y-10">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are invited into people’s homes, family dynamics, and private moments. That responsibility shapes every decision we make.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-brand-dark opacity-40" />
                    <h3 className="font-bold text-brand-dark uppercase tracking-widest text-xs">Privacy First</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Information is handled discreetly (with strict NDA compliance available).
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-brand-dark opacity-40" />
                    <h3 className="font-bold text-brand-dark uppercase tracking-widest text-xs">Vetted Teams</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Every team member is background-checked, insured, and bonded.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-medium pt-4">
                Asset Protection: Possessions are treated with a rigorous chain of custody. Our work is designed to feel calm, controlled, and considered—even when circumstances are not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE STANDARD (RESOLUTION) */}
      <section className="py-24 lg:py-48 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold italic text-brand-dark">The Standard We Hold.</h2>
            <div className="text-xl md:text-2xl text-gray-600 leading-[2.2] space-y-4">
              <p>We measure success by what our clients don’t experience:</p>
              <ul className="space-y-2 font-medium text-brand-dark">
                <li>No chaos on move day</li>
                <li>No loose ends weeks later</li>
                <li>No unanswered questions</li>
                <li>No sense that something was missed</li>
              </ul>
              <p className="pt-10 text-brand-dark font-bold text-3xl">
                What remains is clarity, relief, and confidence that the transition was handled correctly. That is the Steadwell standard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-32 lg:py-64 bg-brand-cream border-t border-brand-stone">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tight">Ready to Talk?</h2>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              Even if we’re not the right fit, you’ll leave the conversation with a clearer path forward.
            </p>
            <div className="pt-6">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-16 py-6 border-brand-stone"
                onClick={() => setView('contact')}
              >
                Schedule a Private Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutView;