import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Ear, ClipboardList, Lightbulb } from 'lucide-react';
import Button from './Button';

const ContactView: React.FC = () => {
  return (
    <div className="bg-brand-cream overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-40 pb-16 lg:pt-56 lg:pb-24 border-b border-brand-stone">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-8 tracking-tight leading-[1.1]">
              Let’s Map the Path Forward.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              You don’t need to have everything figured out yet. That’s what this conversation is for. Whether you’re planning ahead or navigating an urgent situation, the first step is clarity—not commitment.
            </p>
          </motion.div>
        </div>
        
        {/* Subtle Background Detail */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-stone opacity-10 pointer-events-none skew-x-12" />
      </section>

      {/* MAIN CONTENT AREA: SPLIT LAYOUT */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: WHAT TO EXPECT & DIRECT CONTACT */}
            <div className="space-y-20">
              
              {/* SECTION 2: WHAT TO EXPECT */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <h2 className="text-3xl font-bold text-brand-dark tracking-tight">What Happens Next</h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <Ear className="w-6 h-6 text-brand-primary opacity-60" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2">We Listen</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We understand the timeline, the home, and the family dynamics involved.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <ClipboardList className="w-6 h-6 text-brand-primary opacity-60" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2">We Assess</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We determine whether Steadwell is the right fit and outline appropriate next steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <Lightbulb className="w-6 h-6 text-brand-primary opacity-60" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2">We Clarify</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You leave with a clear picture of what needs to happen next—even if you don’t move forward with us.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 border border-brand-stone p-6 rounded-2xl">
                  <p className="text-sm text-gray-500 leading-relaxed font-medium italic">
                    If the situation is time-sensitive (hospital discharge, lease start, home sale), let us know so we can prioritize appropriately.
                  </p>
                </div>
              </motion.div>

              {/* SECTION 4: DIRECT CONTACT */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10 pt-10 border-t border-brand-stone"
              >
                <h3 className="text-lg font-bold text-brand-dark uppercase tracking-widest">Prefer to speak directly?</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-stone">
                      <Phone className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</span>
                      <a href="tel:5122769194" className="text-2xl md:text-3xl font-bold text-brand-dark hover:text-brand-primary transition-colors">
                        (512) 276-9194
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-stone">
                      <Mail className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</span>
                      <a href="mailto:hello@steadwellhq.com" className="text-xl font-bold text-brand-dark hover:text-brand-primary transition-colors">
                        hello@steadwellhq.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-stone mt-1">
                      <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Service Area</span>
                      <p className="text-brand-dark font-bold mb-1">Austin, Texas</p>
                      <p className="text-gray-500 text-sm">Serving Austin and surrounding Central Texas communities.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: REQUEST A PRIVATE CONSULTATION (THE FORM) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] border border-brand-stone shadow-2xl relative"
            >
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 tracking-tight">Request a Private Consultation</h2>
                <p className="text-gray-600 leading-relaxed">
                  A short, private conversation helps us understand what you’re facing and determine the cleanest, least stressful path forward.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-brand-cream/30 border border-brand-stone rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" 
                    placeholder="Full Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-brand-cream/30 border border-brand-stone rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" 
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 ml-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-brand-cream/30 border border-brand-stone rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" 
                      placeholder="(512) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="situation" className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 ml-1">Briefly describe the situation</label>
                  <textarea 
                    id="situation" 
                    rows={5} 
                    className="w-full bg-brand-cream/30 border border-brand-stone rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium resize-none" 
                    placeholder="Tell us a little about the home, the timing, or what’s causing the most stress right now…"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full justify-center py-5 shadow-xl">
                    Request a Private Consultation
                  </Button>
                  
                  <div className="mt-8 text-center space-y-6">
                    <p className="text-sm text-gray-400 font-medium">
                      We respond within one business day. If you need immediate assistance, please call.
                    </p>
                    
                    {/* SECTION 5: TRUST FOOTER */}
                    <div className="pt-8 border-t border-brand-stone/50">
                      <p className="text-sm text-gray-400 italic font-medium leading-relaxed">
                        Every conversation is handled with discretion and care. Even if Steadwell isn’t the right fit, our goal is to leave you with clarity and confidence about what comes next.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactView;