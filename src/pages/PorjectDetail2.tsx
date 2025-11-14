import { Download, FileArchive, FileText } from 'lucide-react';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';
import render1 from '@/assets/1.png';
import render2 from '@/assets/2.png';
import render3 from '@/assets/3.png';
import blender3D from '@/assets/1.png';
import ringVideo from '@/assets/ringannimation.mp4'; 
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useRef } from 'react';

const ProjectDetail2 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 max-w-[1200px]">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            3D Ring Model
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
                  poster={blender3D}
                  preload="metadata"
                  playsInline
                >
                  <source src={ringVideo} type="video/mp4" />
                </video>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* DOWNLOADS SECTION */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-glow">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Téléchargements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Fichier Blender - SOLUTION RECOMMANDÉE */}
            <a
              href="/ring.blend"
              download="ring.blend"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-8 backdrop-blur-lg border border-border/30 hover:border-primary/50 
              transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 
                group-hover:bg-primary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <FileArchive size={28} className="text-primary" />
                </div>

                <div className="text-center">
                 <h3 className="text-xl font-bold mb-5 group-hover:text-glow transition-all duration-300">
                    Fichier Blender
                  </h3>
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r 
                    from-primary to-accent text-primary-foreground font-semibold group-hover:shadow-lg 
                    group-hover:shadow-primary/50 transition-all duration-300"
                  >
                    <Download size={18} />
                    Télécharger
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>

            {/* Project Report */}
            <a
              href="/kara ghofrane.docx"
              download
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-8 
              backdrop-blur-lg border border-border/30 hover:border-primary/50 transition-all duration-500 
              hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 
              group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 group-hover:bg-primary/30 
                flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <FileText size={28} className="text-primary" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-5 group-hover:text-glow transition-all duration-300">
                    Rapport du Projet
                  </h3>
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r 
                    from-primary to-accent text-primary-foreground font-semibold group-hover:shadow-lg 
                    group-hover:shadow-primary/50 transition-all duration-300"
                  >
                    <Download size={18} />
                    Télécharger
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>

          </div>
        </section>

        {/* GALLERY SECTION */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ src: render3 }, { src: render2 }, { src: render1 }].map((render, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border/30 
                hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={render.src}
                  alt="Rendu"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail2;