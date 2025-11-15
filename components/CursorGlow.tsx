import React from 'react';

interface CursorGlowProps {
  position: { x: number; y: number };
}

const CursorGlow: React.FC<CursorGlowProps> = ({ position }) => {
  const style: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(0, 242, 234, 0.15), transparent 80%)`
      }}
    />
  );
};

export default CursorGlow;
