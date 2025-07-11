
import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  
  const hackerChars = ['0', '1', '#', '$', '%', '@', '*', '+', '-', '=', '{', '}', '[', ']', '/', '\\', '|', '~', '`'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'c') {
        event.preventDefault();
        setIsEnabled(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      // Create multiple particles
      for (let i = 0; i < 3; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.textContent = hackerChars[Math.floor(Math.random() * hackerChars.length)];
        
        // Random offset around cursor position
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        
        trail.style.left = `${clientX + offsetX}px`;
        trail.style.top = `${clientY + offsetY}px`;
        
        document.body.appendChild(trail);
        
        // Remove after animation - fix TypeScript error by using window.setTimeout
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
        }, 1000);
      }
    };

    // Throttle mouse move events
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const throttledMouseMove = (event: MouseEvent) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleMouseMove(event);
        timeoutId = null;
      }, 50);
    };

    document.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isEnabled]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className="glass px-3 py-2 rounded-lg text-sm font-mono text-primary hover:bg-primary/10 transition-colors"
        title="Toggle cursor effect (Ctrl+C)"
      >
        Cursor: {isEnabled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default CursorEffect;
