import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-black hover:scale-105 shadow-lg shadow-brand-dark/20 focus:ring-brand-dark",
    secondary: "bg-brand-primary text-white hover:bg-[#265040] hover:scale-105 shadow-lg shadow-[#2E5D4B]/20 focus:ring-brand-primary",
    outline: "bg-transparent border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white focus:ring-brand-dark",
    text: "bg-transparent text-brand-dark hover:text-brand-primary p-0 h-auto underline-offset-4 hover:underline"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  // Text variant doesn't need padding/sizing the same way
  const sizeClass = variant === 'text' ? '' : sizes[size];

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizeClass} ${className}`} 
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />}
    </button>
  );
};

export default Button;