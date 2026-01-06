import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 0,
      label: "The Service",
      questions: [
        {
          q: "Are you a moving company?",
          a: "No. We are project managers who plan, coordinate, and oversee the entire transition. Movers handle transport; Steadwell manages everything else—strategy, floor planning, vendor oversight, and setup. You don’t have to vet vendors or supervise logistics. We act as your single point of accountability."
        },
        {
          q: "Do I have to use your vendors?",
          a: "Not at all. We have a vetted network of trusted partners, but we are happy to coordinate with your preferred mover or realtor. Our role is to quarterback the process and ensure every moving part works together seamlessly."
        },
        {
          q: "What if we only need help with the sorting, but not the move?",
          a: "We offer phased engagements. If you aren't ready to move yet but need help 'editing' the home or clearing out an attic, we can start there. Our process is designed to be flexible to your specific needs."
        }
      ]
    },
    {
      id: 1,
      label: "Belongings",
      questions: [
        {
          q: "How do we decide what fits in the new place?",
          a: "Before a single box is packed, we create a customized floor plan for your new residence and map your furniture and belongings into the space. This removes guesswork, avoids costly mistakes, and ensures you only move what truly fits and belongs."
        },
        {
          q: "What happens to the items I don’t take with me?",
          a: "We manage the full estate dispersion process. Once you’ve decided what you’re keeping, we handle the rest. We coordinate estate sales, donations, and removals, and oversee the clean-out process until the home is “broom swept” and ready for your Realtor to list."
        },
        {
          q: "Will you help me unpack?",
          a: "We do more than unpack; we get you settled. Our white-glove service is designed to make the new house feel like home immediately. We make the beds, hang the art, plug in the electronics, and organize the kitchen. You arrive to a decorated home that is comfortable on your very first night."
        }
      ]
    },
    {
      id: 2,
      label: "Logistics",
      questions: [
        {
          q: "How much does this cost?",
          a: "Every home and timeline is unique. After an initial consultation, we provide a transparent, itemized estimate based on the scope of work. Some clients choose a full turnkey experience; others engage us for specific phases like planning or setup. There are no hidden fees—everything is clearly outlined upfront."
        },
        {
          q: "How soon should we contact you?",
          a: "The sooner, the better. Bringing us in during the planning phase allows us to streamline the sorting and decision-making process before the pressure builds. Early engagement gives you more control and fewer last-minute pressures."
        },
        {
          q: "Do you handle out-of-town family coordination?",
          a: "Frequently. We act as the local 'boots on the ground' for families living out of state. Through regular status updates, we keep everyone aligned and informed without them needing to fly in for every minor decision."
        }
      ]
    },
    {
      id: 3,
      label: "The Team",
      questions: [
        {
          q: "Are your staff insured and background checked?",
          a: "Yes. We are fully insured and bonded, and every team member is background checked. We operate with strict professional standards, discretion, and care."
        },
        {
          q: "My family wants to help. Can they?",
          a: "Absolutely. We welcome family involvement and collaboration. At the same time, having a neutral, experienced third party allows families to stay focused on supporting one another, not managing logistics."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-brand-cream border-t border-brand-stone">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Straight answers for complex transitions.</p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 ${
                activeTab === cat.id 
                  ? 'bg-brand-dark text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Questions Area */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {categories[activeTab].questions.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-bold text-brand-dark pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-primary w-5 h-5 flex-shrink-0" /> : <ChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;