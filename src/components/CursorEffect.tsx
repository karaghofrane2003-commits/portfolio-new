import { useEffect, useState } from 'react';
import cursorGlow from '@/assets/cursor-glow.png';

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mouse move listener
    document.addEventListener('mousemove', updateMousePosition);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '32px' : '20px',
          height: isHovering ? '32px' : '20px',
          background: isHovering 
            ? 'radial-gradient(circle, hsl(var(--primary)) 30%, hsl(var(--accent)) 60%, transparent 80%)'
            : 'radial-gradient(circle, hsl(var(--primary)) 50%, transparent 80%)',
          borderRadius: '50%',
          opacity: isHovering ? 0.9 : 0.7,
        }}
      />
      
      {/* Trail cursor */}
      <div
        className="fixed pointer-events-none z-[10000] transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '12px' : '8px',
          height: isHovering ? '12px' : '8px',
          background: isHovering 
            ? 'hsl(var(--accent))'
            : 'hsl(var(--primary))',
          borderRadius: '50%',
          boxShadow: isHovering ? '0 0 15px hsl(var(--accent))' : '0 0 8px hsl(var(--primary))',
          opacity: 1,
        }}
      />
    </>
  );
};