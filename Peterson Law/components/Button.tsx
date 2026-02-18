import React from 'react';
import { scrollToElement } from '../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ease-in-out border-2";
  
  const variants = {
    primary: "bg-gold-500 border-gold-500 text-white hover:bg-gold-600 hover:border-gold-600 shadow-md",
    outline: "bg-transparent border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white",
    white: "bg-transparent border-white text-white hover:bg-white hover:text-navy-900",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isAnchor = href.startsWith('#');
    
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isAnchor) {
        e.preventDefault();
        scrollToElement(href);
      }
      if (props.onClick) {
        props.onClick(e as any);
      }
    };

    return (
      <a href={href} className={combinedClasses} onClick={handleAnchorClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};