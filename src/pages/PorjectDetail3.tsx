import { Download, FileArchive, FileText } from 'lucide-react';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';
import cube from '@/assets/cube1.png';
import cubevideo from '@/assets/cube.mp4'; 
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectDetail3 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 max-w-[1200px]">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dual Cube 3D scene
          </span>
        </h1>

        {/* VIDEO SECTION */}
        <section className="mb-16">
          <Card className="card-cosmic">
            <CardHeader></CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  onClick={() => videoRef.current?.play()}
                  className="w-full h-full object-cover cursor-pointer"
                  controls
                  poster={cube}
                  preload="metadata"
                  playsInline
                >
                  <source src={cubevideo} type="video/mp4" />
                </video>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* DOWNLOADS SECTION */}
        <section className="mb-16">
          {/* <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-glow">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              View Project On GitHub
            </span>
          </h2> */}

          <div className="grid md:grid-cols-2 gap-8">

            {/* Fichier Blender - SOLUTION RECOMMANDÉE */}
            <a
              href="https://github.com/karaghofrane2003-commits/3d-cube"
              
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-8 backdrop-blur-lg border border-border/30 hover:border-primary/50 
              transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
               

                <div className="text-center">
                 <h3 className="text-xl font-bold mb-5 group-hover:text-glow transition-all duration-300">
                    View Project On GitHub
                  </h3>
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r 
                    from-primary to-accent text-primary-foreground font-semibold group-hover:shadow-lg 
                    group-hover:shadow-primary/50 transition-all duration-300"
                  >
                    <Github size={18} className="inline mr-0.8" />
                    Code
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>

            {/* Project Report */}
            
          </div>
        </section>

        {/* GALLERY SECTION */}
       
      </main>
    </div>
  );
};

export default ProjectDetail3;