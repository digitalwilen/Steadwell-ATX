import React from 'react';
import { Award, ShieldCheck, UserCheck, MapPin } from 'lucide-react';

const TrustBar: React.FC = () => {
  const items = [
    { icon: Award, text: "NASMM Certified" },
    { icon: ShieldCheck, text: "Insured & Bonded" },
    { icon: UserCheck, text: "Background-Checked Staff" },
    { icon: MapPin, text: "Serving Austin & Surrounding Areas" },
  ];

  return (
    <div className="w-full border-t border-gray-200 lg:border-none pt-6 lg:pt-0">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center text-gray-500">
            <item.icon className="w-4 h-4 mr-2 text-brand-secondary" />
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;