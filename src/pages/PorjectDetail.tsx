import { Download, Video, FileArchive, FileText } from 'lucide-react';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import blender3D from '@/assets/project-blender-3d.jpg';

const ProjectDetail = () => {
  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 max-w-[1200px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">
          3D Room Model
        </h1>

        {/* Video Animation Section */}
        <section className="mb-16">
          <Card className="card-cosmic">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
               
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                    
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Downloads Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-glow text-center">Téléchargements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blender File */}
            <a
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-8 backdrop-blur-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <FileArchive size={28} className="text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-glow transition-all duration-300">Fichier Blender</h3>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    Accédez au fichier source Blender complet du projet. Inclut tous les matériaux, textures et paramètres d'animation.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                    <Download size={18} />
                    Télécharger
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>

            {/* Project Report */}
            <a
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-8 backdrop-blur-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <FileText size={28} className="text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-glow transition-all duration-300">Rapport de Projet</h3>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    Documentation complète détaillant le processus de création, les techniques utilisées et les défis rencontrés.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                    <Download size={18} />
                    Télécharger
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </div>
        </section>

        {/* Final Renders Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-glow">Rendu Final</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="card-cosmic overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={blender3D}
                    alt={`Rendu 3D ${index}`}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
