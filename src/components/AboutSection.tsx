import { useEffect, useRef } from 'react';
import { Code, Smartphone, Palette, Star } from 'lucide-react';
import { TerminalJourney } from './TerminalJourney';
import computer3D from '@/assets/3d-computer.png';

export const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { 
      year: "2024 - 2026", 
      title: "Master Degree in Data Engineering and web technologies", 
      company: "University of Setif 1",
      type: "Studies",
      duration: "2024 - 2026",
      location: "Setif, Algeria",
      description: "Advanced studies in data engineering and modern web technologies.",
      achievements: [
        "machine learning and deep learning",
        "DevOps",
        "full stack websites and application"
      ],
      tech: ["Docker", "Oracle", "Kali Linux", "Blender"]
    },
    { 
      year: "2021 - 2024", 
      title: "Bachelor Degree in computer science", 
      company: "University of Setif 1",
      type: "Studies",
      duration: "2021 - 2024",
      location: "Setif, Algeria",
      description: "Computer science fundamentals with focus on software development and best practices.",
      achievements: [
        "Increased user engagement by 40% through UI/UX improvements",
        "team work developement",
        "SOLID best practices",
        "Implemented design system used across 6+ projects"
      ],
      tech: ["React", "Html", "Java", "CSS", "JavaScript", "Python", "MySQL", "C++", "PHP", "Figma"]
    },
    // { 
    //   year: "2022", 
    //   title: "Python Developer", 
    //   company: "MBI School",
    //   type: "Training",
    //   duration: "2022",
    //   location: "Setif - Algeria",
    //   description: "Specialized Python development training with practical projects.",
    //   achievements: [
    //     "improving my python skills",
    //     "Mini project: Sudoku game"
    //   ],
    //   tech: ["Python"]
    // },
    { 
      year: "2022", 
      title: "Frontend Developer", 
      company: "El Khawarizmi",
      type: "Internship",
      duration: "2022 - 2022",
      location: "Setif - Algeria",
      description: "Created responsive websites and web applications for clients in various industries.",
      achievements: [
        "web design",
        "An overview of the backend",
        "full stack photography website"
      ],
      tech: ["JavaScript", "HTML", "CSS", "Figma", "PHP"]
    }
  ];

  const specialties = [
    { icon: Code, title: 'Web Development', desc: 'Full-stack applications with modern frameworks' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform mobile solutions' },
    { icon: Palette, title: 'UX/UI Design', desc: 'Beautiful and intuitive user interfaces' }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">About Me</h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that blend functionality with beauty
          </p> */}
        </div>

        <div className="flex justify-center mb-20">
          <div className="fade-in-up">
            <TerminalJourney />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-glow mb-12 fade-in-up">My Specialties</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="card-cosmic text-center fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <specialty.icon size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-semibold mb-3">{specialty.title}</h4>
                <p className="text-muted-foreground">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-center text-glow mb-12">My Timeline</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card-cosmic">
                    <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <div className="text-accent font-medium mb-1">{item.company}</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {item.type} • {item.duration} • {item.location}
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-sm">Réalisations clés :</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background">
                  <Star size={12} className="absolute inset-0.5 text-primary-foreground" />
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};