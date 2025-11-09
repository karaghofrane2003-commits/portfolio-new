import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectEcommerce from '@/assets/uray.png';
import projectMobile from '@/assets/edu.png';
import projectUx from '@/assets/lumiere.png';

export const FeaturedProjectsSection = () => {
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

  const featuredProjects = [
    {
      title: "Fashion Designer Portfolio",
      description: "Complete website with 3D dress model with costumisation with ia using an image generationg model .It highlights projects, concepts, and design .",
      image: projectEcommerce,
      tech: ["React", "TailwindCSS", "Three.js", "Stripe", "AWS"],
      github: "#",
      demo: "#",
      category: "Full Stack"
    },
    {
      title: "E-learning Platform",
      description: "Platerform that allows learners to access courses, training materials, and interactive tools online. It provides features such as video lessons, quizzes, progress tracking ",
      image: projectMobile,
      tech: ["React", "Node.js", "MongoDB", "Firebase", "Plaid API"],
      github: "#",
      demo: "#",
      category: "Full Stack"
    },
    {
      title: "E-commerce Website",
      description: "A modern e-commerce front-end featuring responsive design, smooth navigation, and user-friendly shopping experiences and optimized user experience.",
      image: projectUx,
      tech: ["React", "css", "Javascript", "TypeScript", "Design Tokens"],
      github: "https://github.com/karaghofrane2003-commits/e-commerce-beauty",
      demo: "#",
      category: "Frontend"
    }
  ];

  return (
    <section id="featured-projects" ref={projectsRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, featuring full-stack applications, mobile apps, and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in-up group"
            >
              {/* Project Card */}
              <div className="bg-card/20 rounded-2xl border border-border/20 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                {/* Project Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-glow">{project.title}</h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-card/50 text-foreground rounded-md border border-border/30 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-card/30 hover:bg-card/50 rounded-lg transition-all duration-300 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};