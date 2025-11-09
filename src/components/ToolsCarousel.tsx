import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Atom, 
  Leaf, 
  Server, 
  Cog, 
  Container, 
  Cloud, 
  Database, 
  GitBranch, 
  Flame,
  Braces
} from 'lucide-react';

export const ToolsCarousel = () => {
  const carouselRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const techTools = [
    { name: "JavaScript", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", color: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", color: "#339933", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", color: "#3776AB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Docker", color: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", color: "#47A248", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", color: "#336791", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", color: "#F05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Three.js", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = carouselRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techTools.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [techTools.length]);

  return (
    <section ref={carouselRef} className="py-10 px-6">
      <div className="container mx-auto">
        {/* <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">Tools & Technologies</h2>
         
        </div> */}

        <div className="relative flex justify-center items-center min-h-[400px] fade-in-up">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {techTools.map((tool, index) => {
              const angle = (index * 360) / techTools.length;
              const currentAngle = angle - (currentIndex * (360 / techTools.length));
              const x = Math.cos((currentAngle * Math.PI) / 180) * 140;
              const y = Math.sin((currentAngle * Math.PI) / 180) * 140;
              const z = Math.sin((currentAngle * Math.PI) / 180) * 50;
              const scale = 0.8 + (z + 50) / 100;
              const opacity = 0.4 + (z + 50) / 100;

              return (
                <div
                  key={tool.name}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out cursor-pointer group"
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: Math.round(z + 50)
                  }}
                >
                  {/* Technology logo with glow effect */}
                  <div className="relative flex items-center justify-center">
                    {/* Main logo */}
                    <img 
                      src={tool.logo}
                      alt={tool.name}
                      className="w-12 h-12 group-hover:scale-125 transition-all duration-300 relative z-10" 
                      style={{
                        filter: `drop-shadow(0 0 10px ${tool.color})`
                      }}
                    />
                    
                    {/* Glow background */}
                    <div 
                      className="absolute inset-0 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 w-16 h-16 rounded-full"
                      style={{
                        backgroundColor: tool.color
                      }}
                    />
                  </div>
                  
                </div>
              );
            })}
          </div>

          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 mt-8 fade-in-up">
          {techTools.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};