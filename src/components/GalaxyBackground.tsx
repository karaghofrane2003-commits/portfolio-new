import { useEffect, useState } from 'react';

interface Star {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  color: string;
}

export const GalaxyBackground = () => {
  const [circles, setCircles] = useState<Array<{ id: number; size: number; left: number; delay: number }>>([]);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const circleArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      left: Math.random() * 100,
      delay: Math.random() * 15
    }));
    setCircles(circleArray);

    // Create colorful animated stars
    const colors = [
      'hsl(var(--primary))',
      'hsl(var(--accent))',
      'hsl(var(--nebula-pink))',
      'hsl(var(--nebula-blue))',
      'hsl(var(--cosmic-teal))',
      'hsl(var(--star-glow))',
      'hsl(var(--primary-glow))',
    ];

    const starArray = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 1, // Sizes from 1px to 7px
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 20 + 15, // Much slower: 15-35 seconds
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setStars(starArray);
  }, []);

  return (
    <>
      <div className="galaxy-bg">
        <div className="stars" />
        
        {/* Animated colorful stars */}
        <div className="animated-stars">
          {stars.map((star) => (
            <div
              key={star.id}
              className="animated-star"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.left}%`,
                top: `${star.top}%`,
                backgroundColor: star.color,
                boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`
              }}
            />
          ))}
        </div>

        <div className="floating-circles">
          {circles.map((circle) => (
            <div
              key={circle.id}
              className="circle"
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                left: `${circle.left}%`,
                animationDelay: `${circle.delay}s`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};