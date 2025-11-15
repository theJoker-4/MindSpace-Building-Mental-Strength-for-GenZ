import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-red-500 to-cyan-400 text-transparent bg-clip-text animate-gradient ${className}`}>
      {children}
    </span>
  );
};

export default AnimatedText;