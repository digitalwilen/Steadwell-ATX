import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clipboard, 
  CheckCircle2, 
  Search, 
  Map, 
  Zap, 
  Truck, 
  Sparkles,
  Users,
  MessageSquare,
  Calendar,
  Check
} from 'lucide-react';
import Button from './Button';

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  icon: any;
  body: string;
  emphasis?: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    step: "Step 1",
    title: "Private Consultation",
    subtitle: "Clarify the Situation",
    icon: Search,
    body: "We start by understanding the full picture: the timeline, the family dynamics, and the constraints driving the move. If there’s a discharge date, lease start, or home sale involved, we plan around it immediately.",
    deliverables: [
      "High-level assessment of scope and urgency",
      "Recommended next steps",
      "Clear fit decision (we’ll tell you if we’re not the right solution)"
    ]
  },
  {
    step: "Step 2",
    title: "Walkthrough & Scope",
    subtitle: "Define What “Finished” Looks Like",
    icon: Map,
    body: "We assess the home, the volume of belongings, the complexity of the transition, and what 'finished' actually looks like.",
    deliverables: [
      "Defined scope and timeline",
      "Vendor plan (who is needed and when)",
      "Transparent pricing and next actions"
    ]
  },
  {
    step: "Step 3",
    title: "The Transition Plan",
    subtitle: "Build the Roadmap",
    icon: Clipboard,
    body: "You receive a clear, sequenced plan showing what happens first, what can wait, and what must not be missed. This becomes the operating plan for the entire transition.",
    deliverables: [
      "Sequenced schedule and milestone plan",
      "Decision checklist (documents, key items, approvals)",
      "Communication plan for family and stakeholders"
    ]
  },
  {
    step: "Step 4",
    title: "Sorting & Coordination",
    subtitle: "Execute With Structure",
    icon: Zap,
    body: "We lead the work room by room while coordinating vendors behind the scenes. Decisions stay organized. Logistics stay aligned. Nothing piles up at the last minute.",
    deliverables: [
      "Items labeled and organized by destination",
      "Confirmed vendor schedule",
      "Reduced last-minute chaos and decision fatigue"
    ]
  },
  {
    step: "Step 5",
    title: "Move Day Leadership",
    subtitle: "Control the Day",
    emphasis: "You are not the help desk.",
    icon: Truck,
    body: "A Steadwell Project Lead is on-site to direct flow, protect priorities, and resolve issues as they arise.",
    deliverables: [
      "Controlled, supervised move execution",
      "Immediate problem resolution",
      "No “box dump” into the new home"
    ]
  },
  {
    step: "Step 6",
    title: "White-Glove Setup & Closeout",
    subtitle: "Finish the Job",
    icon: Sparkles,
    body: "We complete the transition. The home becomes functional, safe, and settled—not just unpacked.",
    deliverables: [
      "Essential rooms fully set up",
      "Remaining items organized as scoped",
      "Final walkthrough and closeout checklist"
    ]
  }
];

interface OurProcessViewProps {
  setView: (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => void;
}

const OurProcessView: React.FC<OurProcessViewProps> = ({ setView }) => {
  return (
    <div className="pt-24 pb-16 bg-brand-cream overflow-hidden">
      {/* Page Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-brand-primary font-extrabold uppercase tracking-widest text-sm mb-4 block">Our Process</span>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight leading-[1.1]">
            A Clear Path From Uncertainty <br className="hidden lg:block" /> to a Finished Home
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Transitions go smoothly when the work is sequenced correctly and someone owns the details.
            </p>
          </div>

          <div className="mt-8">
            <Button size="lg" withArrow onClick={() => setView('contact')}>Schedule a Private Consultation</Button>
          </div>
        </motion.div>
      </section>

      {/* Snake Timeline Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          {/* Vertical Line Container */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-stone hidden lg:block -translate-x-1/2"></div>

          <div className="space-y-16 lg:space-y-28">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Block */}
                <div className="w-full lg:w-5/12">
                   <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-brand-stone shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-brand-primary/10 p-3 rounded-2xl text-brand-primary">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-bold text-brand-primary uppercase tracking-widest">{step.step}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-1">{step.title}</h2>
                      <h3 className="text-lg md:text-xl font-medium text-gray-400 mb-4 italic">{step.subtitle}</h3>
                      
                      {step.emphasis && (
                        <p className="text-brand-primary font-bold text-lg mb-4 italic border-l-2 border-brand-primary pl-4 py-1">
                          {step.emphasis}
                        </p>
                      )}

                      <p className="text-gray-600 leading-relaxed mb-8">
                        {step.body}
                      </p>

                      {/* Deliverables Section */}
                      <div className="pt-6 border-t border-brand-stone">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 block">Deliverables</span>
                         <ul className="space-y-3">
                            {step.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start group">
                                <div className="mt-1 mr-3 flex-shrink-0 bg-brand-stone/40 p-1 rounded-full group-hover:bg-brand-secondary transition-colors">
                                  <Check className="w-3 h-3 text-gray-500 group-hover:text-white" />
                                </div>
                                <span className="text-sm md:text-base font-semibold text-brand-dark/80 group-hover:text-brand-dark transition-colors">{item}</span>
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex w-2/12 items-center justify-center relative">
                   <div className="w-10 h-10 rounded-full bg-brand-primary border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-black text-sm">
                      {idx + 1}
                   </div>
                </div>

                {/* Spacer / Aesthetic Placeholder */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-16 bg-brand-dark text-white rounded-[4rem] mx-4 md:mx-6 my-12">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-primary font-black uppercase tracking-widest text-sm mb-4 block">Family Alignment</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">One Source of Truth for the Whole Family</h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  When multiple family members are involved, miscommunication becomes its own stressor. Steadwell acts as the central nervous system for the transition.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Weekly status summaries", icon: Calendar },
                    { title: "Upcoming decisions and approvals", icon: MessageSquare },
                    { title: "The Sibling Memo: clear updates for local and out-of-town family", icon: Users }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                       <item.icon className="w-6 h-6 text-brand-primary" />
                       <span className="text-lg font-bold">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 rounded-3xl p-6 border border-white/20 aspect-square flex items-center justify-center text-center">
                  <div className="max-w-sm">
                    <CheckCircle2 className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                    <p className="text-xl md:text-2xl font-bold mb-4 italic">“The clarity we didn’t know was possible.”</p>
                    <p className="text-gray-400">— Client, West Lake Hills</p>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 md:px-6 text-center py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-primary/10 rounded-[3rem] p-10 md:p-16 border border-brand-primary/20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Ready to Replace the Chaos <br className="hidden md:block"/> With a Plan?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a Private Consultation. You’ll get clarity even if we’re not the right fit.
          </p>
          <Button size="lg" withArrow onClick={() => setView('contact')}>Schedule Your Consultation</Button>
        </motion.div>
      </section>
    </div>
  );
};

export default OurProcessView;