// import { useState } from 'react';
// import { ExternalLink, Github, Star } from 'lucide-react';
// import { GalaxyBackground } from '@/components/GalaxyBackground';
// import { Navigation } from '@/components/Navigation';

// type Category = 'ALL' | 'WEB_3D' | 'WEBSITE' | 'MOBILE_APP' | 'DESIGN';

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: Category;
//   url: string;
//   github: string;
//   technologies: string[];
// }

// const PROJECTS: Project[] = [
//   {
//     id: '1',
//     title: '3D Room Model',
//     description: 'A 3D model of a small room using Blender',
//     image: '/placeholder.svg',
//     category: 'WEB_3D',
//     url: 'https://example.com/project1',
//     github: 'https://github.com/example/project1',
//     technologies: ['Blender']
//   },
//   {
//     id: '2',
//     title: '3D Ring Animation',
//     description: 'A 3D animated scene representing a ring using Blender',
//     image: '/placeholder.svg',
//     category: 'WEB_3D',
//     url: 'https://example.com/project2',
//     github: 'https://github.com/example/project2',
//  technologies: ['Blender']
//   },
//   {
//     id: '3',
//     title: '3D Portfolio Gallery',
//     description: 'Interactive 3D gallery experience featuring smooth animations and intuitive navigation',
//     image: '/placeholder.svg',
//     category: 'WEB_3D',
//     url: 'https://example.com/project3',
//     github: 'https://github.com/example/project3',
//      technologies: ['Blender']
//   },
  // {
  //   id: '4',
  //   title: 'E-Commerce Platform',
  //   description: 'Modern online shopping experience with seamless checkout, product filtering, and responsive design',
  //   image: '/placeholder.svg',
  //   category: 'WEBSITE',
  //   url: 'https://example.com/project4',
  //   github: 'https://github.com/example/project4',
  // },
  // {
  //   id: '5',
  //   title: 'Fitness Tracking App',
  //   description: 'Mobile app for comprehensive health monitoring with workout tracking and progress analytics',
  //   image: '/placeholder.svg',
  //   category: 'MOBILE_APP',
  //   url: 'https://example.com/project5',
  //   github: 'https://github.com/example/project5',
  // },
  // {
  //   id: '6',
  //   title: 'Brand Identity Design',
  //   description: 'Complete brand design system including logo design, color palette, typography, and brand guidelines',
  //   image: '/placeholder.svg',
  //   category: 'DESIGN',
  //   url: 'https://example.com/project6',
  //   github: 'https://github.com/example/project6',
  // }
// ];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');

//   const filteredProjects = PROJECTS.filter(project => {
//     const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
//     return matchesCategory;
//   });

//   const categories = [
//     { id: 'ALL', label: 'ALL' },
//     { id: 'WEB_3D', label: 'WEB 3D' },
//     { id: 'WEBSITE', label: 'WEBSITES' },
//     { id: 'MOBILE_APP', label: 'MOBILE APP' },
//     { id: 'DESIGN', label: 'DESIGN' }
//   ];

//   const getCategoryProjects = (category: Category) => {
//     if (category === 'ALL') return filteredProjects;
//     return filteredProjects.filter(p => p.category === category);
//   };

//   const getCategoryLabel = (category: Category) => {
//     const cat = categories.find(c => c.id === category);
//     return cat?.label || category;
//   };

//   return (
//     <div className="relative min-h-screen">
//       <GalaxyBackground />
//       <Navigation />
      
//       <main className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 max-w-[1400px]">
//         {/* Header */}
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-glow">
//           MY <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PROJECTS</span>
//         </h1>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id as Category)}
//               className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 selectedCategory === category.id
//                   ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/50'
//                   : 'bg-card/40 backdrop-blur-lg border border-border/50 text-foreground hover:border-primary/50 hover:bg-card/60'
//               }`}
//             >
//               {category.label}
//             </button>
//           ))}
//         </div>

//         {/* Projects by Category */}
//         {selectedCategory === 'ALL' ? (
//           // Show all projects without category titles
//           <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//             {filteredProjects.map(project => (
//               <ProjectCard key={project.id} project={project} />
//             ))}
//           </div>
//         ) : (
//           // Show selected category projects
//           <div>
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 {getCategoryLabel(selectedCategory)}
//               </span>
//             </h2>
//             <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//               {filteredProjects.map(project => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>
//             {filteredProjects.length === 0 && (
//               <p className="text-center text-muted-foreground text-base py-10">
//                 No projects found
//               </p>
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard = ({ project }: ProjectCardProps) => {
//   const getCategoryLabel = (category: Category) => {
//     const labels: Record<Category, string> = {
//       'ALL': 'All',
//       'WEB_3D': 'WEB 3D',
//       'WEBSITE': 'Website',
//       'MOBILE_APP': 'Mobile App',
//       'DESIGN': 'Design'
//     };
//     return labels[category];
//   };

//   return (
//     <div className="group card-cosmic relative overflow-hidden">
    

//       <div className="relative overflow-hidden rounded-xl mb-6">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 bg-card/90 hover:bg-card text-center py-2 px-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
//           >
//             <Github size={18} className="inline mr-2" />
//             Code
//           </a>
//           <a
//             href={project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 btn-cosmic text-center py-2 px-4"
//           >
//             <ExternalLink size={18} className="inline mr-2" />
//             Demo
//           </a>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h3 className="text-2xl font-bold text-glow">{project.title}</h3>
//         <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        
//         <div className="flex flex-wrap gap-2">
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

/////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { ExternalLink, Github, Star } from 'lucide-react';
// import { GalaxyBackground } from '@/components/GalaxyBackground';
// import { Navigation } from '@/components/Navigation';

// type Category = 'ALL' | 'WEB_3D' | 'WEBSITE' | 'MOBILE_APP' | 'DESIGN';

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: Category;
//   url: string;
//   github: string;
//   technologies: string[];
//   featured?: boolean;
// }

// const PROJECTS: Project[] = [
//   {
//     id: '1',
//     title: '3D Space Explorer',
//     description: 'Interactive 3D space exploration experience with realistic physics and stunning visual effects powered by WebGL technology',
//     image: '/placeholder.svg',
//     category: 'WEB_3D',
//     url: 'https://example.com/project1',
//     github: 'https://github.com/example/project1',
//     technologies: ['Three.js', 'WebGL', 'React', 'TypeScript'],
//     featured: true
//   },
//   {
//     id: '2',
//     title: '3D Product Showcase',
//     description: 'Immersive 3D product visualization platform with real-time rendering and interactive camera controls',
//     image: '/placeholder.svg',
//     category: 'WEB_3D',
//     url: 'https://example.com/project2',
//     github: 'https://github.com/example/project2',
//     technologies: ['Three.js', 'GLSL', 'React Three Fiber'],
//     featured: true
//   },
//   {
//     id: '3',
//     title: '3D Portfolio Gallery',
//     description: 'Interactive 3D gallery experience featuring smooth animations and intuitive navigation',
//     image: '/placeholder.svg',
//     category: 'WEB_3D',
//     url: 'https://example.com/project3',
//     github: 'https://github.com/example/project3',
//     technologies: ['Three.js', 'WebGL', 'GSAP', 'Vite']
//   },
//   {
//     id: '4',
//     title: 'E-Commerce Platform',
//     description: 'Modern online shopping experience with seamless checkout, product filtering, and responsive design',
//     image: '/placeholder.svg',
//     category: 'WEBSITE',
//     url: 'https://example.com/project4',
//     github: 'https://github.com/example/project4',
//     technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
//     featured: true
//   },
//   {
//     id: '5',
//     title: 'Fitness Tracking App',
//     description: 'Mobile app for comprehensive health monitoring with workout tracking and progress analytics',
//     image: '/placeholder.svg',
//     category: 'MOBILE_APP',
//     url: 'https://example.com/project5',
//     github: 'https://github.com/example/project5',
//     technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js']
//   },
//   {
//     id: '6',
//     title: 'Brand Identity Design',
//     description: 'Complete brand design system including logo design, color palette, typography, and brand guidelines',
//     image: '/placeholder.svg',
//     category: 'DESIGN',
//     url: 'https://example.com/project6',
//     github: 'https://github.com/example/project6',
//     technologies: ['Figma', 'Adobe Illustrator', 'Photoshop']
//   }
// ];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');

//   const filteredProjects = PROJECTS.filter(project => {
//     const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
//     return matchesCategory;
//   });

//   const categories = [
//     { id: 'ALL', label: 'ALL' },
//     { id: 'WEB_3D', label: 'WEB 3D' },
//     { id: 'WEBSITE', label: 'WEBSITES' },
//     { id: 'MOBILE_APP', label: 'MOBILE APP' },
//     { id: 'DESIGN', label: 'DESIGN' }
//   ];

//   const getCategoryProjects = (category: Category) => {
//     if (category === 'ALL') return filteredProjects;
//     return filteredProjects.filter(p => p.category === category);
//   };

//   const getCategoryLabel = (category: Category) => {
//     const cat = categories.find(c => c.id === category);
//     return cat?.label || category;
//   };

//   return (
//     <div className="relative min-h-screen">
//       <GalaxyBackground />
//       <Navigation />
      
//       <main className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 max-w-[1400px]">
//         {/* Header */}
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-glow">
//           MY <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PROJECTS</span>
//         </h1>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id as Category)}
//               className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 selectedCategory === category.id
//                   ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/50'
//                   : 'bg-card/40 backdrop-blur-lg border border-border/50 text-foreground hover:border-primary/50 hover:bg-card/60'
//               }`}
//             >
//               {category.label}
//             </button>
//           ))}
//         </div>

//         {/* Projects by Category */}
//         {selectedCategory === 'ALL' ? (
//           // Show all projects without category titles
//           <div className="hidden grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//             {filteredProjects.map(project => (
//               <ProjectCard key={project.id} project={project} />
//             ))}
//           </div>
//         ) : (
//           // Show selected category projects
//           <div className="hidden">
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 {getCategoryLabel(selectedCategory)}
//               </span>
//             </h2>
//             <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//               {filteredProjects.map(project => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>
//             {filteredProjects.length === 0 && (
//               <p className="text-center text-muted-foreground text-base py-10">
//                 No projects found
//               </p>
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard = ({ project }: ProjectCardProps) => {
//   const getCategoryLabel = (category: Category) => {
//     const labels: Record<Category, string> = {
//       'ALL': 'All',
//       'WEB_3D': '3D Design',
//       'WEBSITE': 'Website',
//       'MOBILE_APP': 'Mobile App',
//       'DESIGN': 'Design'
//     };
//     return labels[category];
//   };

//   return (
//     <div className="group card-cosmic relative overflow-hidden">
//       {project.featured && (
//         <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
//           <Star size={12} />
//           Featured
//         </div>
//       )}

//       <div className="relative overflow-hidden rounded-xl mb-6">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 bg-card/90 hover:bg-card text-center py-2 px-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
//           >
//             <Github size={18} className="inline mr-2" />
//             Code
//           </a>
//           <a
//             href={project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 btn-cosmic text-center py-2 px-4"
//           >
//             <ExternalLink size={18} className="inline mr-2" />
//             Demo
//           </a>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h3 className="text-2xl font-bold text-glow">{project.title}</h3>
//         <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// 3version-----------------------------------------------------------------------
import { useState } from 'react';
import { FileText, Star } from 'lucide-react';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router-dom';
import Ring from '@/assets/1.png';
import House from '@/assets/image.png';


type Category = 'ALL' | 'WEB_3D' | 'WEBSITE' | 'MOBILE_APP' | 'DESIGN';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
  url: string;
  github: string;
  technologies: string[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: '3D Room Model',
    description: 'A 3D model of a small room using Blender',
    image: House,
    category: 'WEB_3D',
    url: 'https://example.com/project1',
    github: 'https://github.com/example/project1',
    technologies: ['Blender'],
    featured: false
  },
  {
    id: '2',
    title: '3D Ring Model',
    description: 'A 3D animated scene representing a modern diamond ring using Blender',
    image: Ring,
    category: 'WEB_3D',
    url: 'https://example.com/project2',
    github: 'https://github.com/example/project2',
    technologies: ['Blender'],
    featured: false
  },
  // {
  //   id: '3',
  //   title: '3D Green House',
  //   description: 'comming soon',
  //   image: Ring,
  //   category: 'WEB_3D',
  //   url: 'https://example.com/project3',
  //   github: 'https://github.com/example/project3',
  //   technologies: ['Blender'],
  //   featured: false
  // }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
    return matchesCategory;
  });

  const categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'WEB_3D', label: ' WEB 3D ' },
    { id: 'WEBSITE', label: 'WEBSITES' },
    { id: 'MOBILE_APP', label: 'MOBILE APP' },
    { id: 'DESIGN', label: 'DESIGN' }
  ];

  const getCategoryProjects = (category: Category) => {
    if (category === 'ALL') return filteredProjects;
    return filteredProjects.filter(p => p.category === category);
  };

  const getCategoryLabel = (category: Category) => {
    const cat = categories.find(c => c.id === category);
    return cat?.label || category;
  };

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 max-w-[1400px]">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-glow">
          MY <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PROJECTS</span>
        </h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/50'
                  : 'bg-card/40 backdrop-blur-lg border border-border/50 text-foreground hover:border-primary/50 hover:bg-card/60'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects by Category */}
        {selectedCategory === 'ALL' ? (
          // Show all projects without category titles
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          // Show selected category projects
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {getCategoryLabel(selectedCategory)}
              </span>
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <p className="text-center text-muted-foreground text-base py-10">
                No projects found
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getCategoryLabel = (category: Category) => {
    const labels: Record<Category, string> = {
      'ALL': 'All',
      'WEB_3D': 'WEB 3D ',
      'WEBSITE': 'Website',
      'MOBILE_APP': 'Mobile App',
      'DESIGN': 'Design'
    };
    return labels[category];
  };

  return (
    <div className="group relative overflow-hidden card-cosmic">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
          <Star size={12} />
          Featured
        </div>
      )}

      <div className="relative overflow-hidden rounded-xl mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex justify-center">
            <Link 
              to={`/project-detail-${project.id}`}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
          {getCategoryLabel(project.category)}
        </div>
        
        <h3 className="text-2xl font-bold text-glow">{project.title}</h3>
        
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
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
  );
};

export default Projects;
