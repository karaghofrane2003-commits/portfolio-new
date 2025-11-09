import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

export const SkillsSection = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (!animated) {
              setAnimated(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = skillsRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [animated]);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Three.js', level: 60 },
        { name: 'Tailwind CSS', level: 70 }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 50 },
        { name: 'Python', level: 70 },
        { name: 'PostgreSQL', level: 50 },
        { name: 'Django', level: 50 }
      ]
    },
    // {
    //   icon: Smartphone,
    //   title: 'Mobile',
    //   skills: [
    //     { name: 'React Native', level: 85 },
    //     { name: 'Flutter', level: 70 },
    //     { name: 'iOS', level: 65 },
    //     { name: 'Android', level: 70 }
    //   ]
    // },
    {
      icon: Palette,
      title: 'Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'UI/UX', level: 90 },
        { name: 'Prototyping', level: 80 }
      ]
    }
  ];

  // const tools = [
  //   { name: "VS Code", icon: "⚡" },
  //   { name: "Git", icon: "🔧" },
  //   { name: "Docker", icon: "🐳" },
  //   { name: "AWS", icon: "☁️" },
  //   { name: "Figma", icon: "🎨" },
  //   { name: "Notion", icon: "📝" },
  //   { name: "Postman", icon: "🚀" },
  //   { name: "Slack", icon: "💬" },
  //   { name: "Jira", icon: "📋" },
  //   { name: "Firebase", icon: "🔥" },
  //   { name: "Vercel", icon: "▲" },
  //   { name: "MongoDB Atlas", icon: "🍃" },
  //   { name: "Stripe", icon: "💳" },
  //   { name: "Supabase", icon: "⚡" },
  //   { name: "Framer", icon: "🎯" },
  //   { name: "Adobe XD", icon: "🎨" }
  // ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life
          </p>
        </div>
        
        {/* <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16"> //hakd kant avec 4 card ( mobiele est supprime) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-cosmic fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <category.icon size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-glow">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="progress-cosmic">
                      <div
                        className="progress-fill transition-all duration-1000 ease-out"
                        style={{
                          width: animated ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2 + skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-up">
          {/* <h3 className="text-3xl font-bold text-center text-glow mb-12">Favorite Tools</h3> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* {tools.slice(0, 12).map((tool, index) => (
              <div
                key={index}
                className="card-cosmic text-center hover:scale-110 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">{tool.icon}</div>
                <h4 className="font-semibold text-glow">{tool.name}</h4>
              </div>
            ))} */}
          </div>
        </div>
{/* 
        <div className="mt-16 text-center fade-in-up">
          <div className="card-cosmic inline-block">
            <h3 className="text-2xl font-bold text-glow mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-6">
              Currently exploring AI/ML integration, Web3 technologies, and advanced animation techniques
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm animate-pulse">AI/ML</span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm animate-pulse">Web3</span>
              <span className="px-4 py-2 bg-nebula-pink/20 text-nebula-pink rounded-full text-sm animate-pulse">WebGL</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};