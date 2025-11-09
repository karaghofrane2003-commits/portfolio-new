import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileCircle from '@/assets/profile-circle.jpg';
import { Link } from 'react-router-dom';

const TITLES = ["Web Developer", "App Developer", "UI/UX Designer"] as const;

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);


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

    const elements = heroRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Typewriter effect (fixed)
  useEffect(() => {
    const currentTitleText = TITLES[currentTitle];
    const timeouts: number[] = [];

    if (isTyping) {
      for (let i = 0; i <= currentTitleText.length; i++) {
        const timeout = window.setTimeout(() => {
          setDisplayText(currentTitleText.slice(0, i));
          if (i === currentTitleText.length) {
            const pauseId = window.setTimeout(() => setIsTyping(false), 1200);
            timeouts.push(pauseId);
          }
        }, i * 100);
        timeouts.push(timeout);
      }
    } else {
      for (let i = currentTitleText.length; i >= 0; i--) {
        const timeout = window.setTimeout(() => {
          setDisplayText(currentTitleText.slice(0, i));
          if (i === 0) {
            setCurrentTitle((prev) => (prev + 1) % TITLES.length);
            setIsTyping(true);
          }
        }, (currentTitleText.length - i) * 60);
        timeouts.push(timeout);
      }
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [currentTitle, isTyping]);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-glow">
                Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ghofrane</span>
              </h1>
              <div className="h-16 flex items-center">
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Crafting digital experiences with code, creativity, and a touch of cosmic magic. 
                I build beautiful, functional applications that make a difference.
              </p>
            </div>
          </div>

          {/* Colorful Space Animation */}
          <div className="fade-in-right flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Multi-layered space animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-nebula-pink/50 via-nebula-blue/40 to-cosmic-teal/50 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-bl from-star-glow/60 via-primary/50 to-accent/40" style={{animation: 'float 6s ease-in-out infinite'}} />
              <div className="absolute inset-12 rounded-full bg-gradient-to-r from-cosmic-teal/60 to-nebula-pink/50" style={{animation: 'spin-slow 8s linear infinite reverse'}} />
              
              {/* Central energy core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent opacity-90 animate-ping" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-accent to-secondary opacity-80" style={{animation: 'float 4s ease-in-out infinite reverse'}} />
              
              {/* Dynamic floating particles */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce" style={{animationDelay: '0s'}} />
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-nebula-pink to-cosmic-teal rounded-full animate-bounce" style={{animationDelay: '1s'}} />
              <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-r from-cosmic-teal to-star-glow rounded-full animate-bounce" style={{animationDelay: '2s'}} />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
              <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-nebula-blue rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
              <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-star-glow rounded-full animate-bounce" style={{animationDelay: '2.5s'}} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up space-y-8">
            <div className="flex flex-col sm:flex-row gap-6">
                          <Link to="/projects" className="btn-cosmic group">
                View My Work
                <ArrowDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </Link>
             <button
  className="btn-cosmic"
  onClick={() => {
    const ContactSection = document.getElementById('contact');
    if (ContactSection) {
      ContactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Get In Touch
</button>

              
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/karaghofrane2003-commits" className="p-4 rounded-full bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-110 hover:animate-glow">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ghofrane-kara-a7a015383/" className="p-4 rounded-full bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-110 hover:animate-glow">
                <Linkedin size={24} />
              </a>
              {/* <a href="#" className="p-4 rounded-full bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-110 hover:animate-glow">
                <Mail size={24} />
              </a> */}
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=karaghofrane2003@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="p-4 rounded-full bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-110 hover:animate-glow"
>
  <Mail size={24} />
</a>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-primary" />
        </button>
      </div>
    </section>
  );
};