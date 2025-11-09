import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import projectEcommerce from '@/assets/rest.png';
import projectMobile from '@/assets/weather.png';
import projectUX from '@/assets/project-ux.jpg';
import { Link } from 'react-router-dom';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';

export const ProjectsSection = () => {
  const projectsRef = useRef<HTMLElement>(null);

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

    const elements = projectsRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: ' Healthcare Web App',
      description: 'A user-friendly healthcare web application designed to provide easy access to medical information, appointment booking, and patient management. It offers a secure and modern platform to connect patients with healthcare providers.',
      image: "",
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Restaurant Website',
      description: 'A modern and responsive restaurant website that showcases the menu, highlights special dishes, and allows customers to make reservations online. Designed with an elegant interface to create an engaging dining experience before stepping into the restaurant.',
      image:  projectEcommerce ,
      tech: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/karaghofrane2003-commits/Restaurant-',
      demo: '#',
      featured: false
    },
    {
      title: 'Weather Web App',
      description: 'An intuitive web application that delivers real-time weather forecasts with a clean and modern interface. It allows users to check temperature, humidity, wind speed, and weather conditions for any city worldwide.',
      image: projectMobile,
      tech: ['Html', 'Css', 'JavaScript'],
      github: 'https://github.com/karaghofrane2003-commits/weather-App',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">My Projects</h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, featuring full-stack applications, mobile apps, and creative solutions
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group card-cosmic relative overflow-hidden fade-in-up ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
                  
                Coming Soon
                </div>
              )}

              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    className="flex-1 bg-card/90 hover:bg-card text-center py-2 px-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} className="inline mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 btn-cosmic text-center py-2 px-4"
                  >
                    <ExternalLink size={18} className="inline mr-2" />
                    Demo
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-glow">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up">
          <button className="btn-cosmic">
                             <Link to="/projects" className="btn-cosmic group">
                View All Projects
            
              </Link>
             
          </button>
              
   {/* <a
  href="https://github.com/karaghofrane2003-commits?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="btn-cosmic">
    View All Projects
 
  </button>
</a> */}


        </div>
      </div>
    </section>
  );
};