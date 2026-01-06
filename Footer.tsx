import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import Button from './Button';

interface FooterProps {
  setView?: (view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleNav = (e: React.MouseEvent, view: 'home' | 'what-we-handle' | 'our-process' | 'about' | 'contact') => {
    e.preventDefault();
    if (setView) {
      setView(view);
    } else {
      window.location.hash = view;
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 rounded-t-[2rem] mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-gray-700 pb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-4">Steadwell ATX</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Steadwell provides fully managed life transitions through a single point of accountability — from planning and downsizing to move-day oversight and white-glove home setup.
            </p>
            <div className="text-gray-400">
              <p>Austin, TX</p>
              <p className="italic">Serving Austin & Surrounding Areas</p>
            </div>
            
            <div className="mt-8 flex space-x-4">
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-primary transition-colors"><Facebook className="w-5 h-5"/></a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-primary transition-colors"><Instagram className="w-5 h-5"/></a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-primary transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-2"></div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-gray-200">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:5122769194" className="text-gray-400 hover:text-white transition-colors text-lg">
                  (512) 276-9194
                </a>
              </li>
              <li>
                <a href="mailto:hello@steadwellhq.com" className="text-gray-400 hover:text-white transition-colors text-lg">
                  hello@steadwellhq.com
                </a>
              </li>
              <li className="pt-4">
                 <button 
                  onClick={(e) => handleNav(e, 'contact')} 
                  className="text-brand-primary hover:text-white font-semibold transition-colors flex items-center text-left"
                 >
                    Schedule a Private Consultation &rarr;
                 </button>
              </li>
            </ul>
          </div>

          {/* Credentials Column */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-gray-200">Credentials</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mt-1.5 mr-2"></span>
                NASMM Certified
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mt-1.5 mr-2"></span>
                Insured & Bonded
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mt-1.5 mr-2"></span>
                Background-Checked Staff
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Accessibility</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Steadwell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;