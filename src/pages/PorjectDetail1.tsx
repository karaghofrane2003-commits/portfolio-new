import { Download, Video, FileArchive, FileText } from 'lucide-react';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import table from '@/assets/table.png';

const ProjectDetail1 = () => {
  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation />
      
      <main className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 max-w-[1200px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3D Room Model</span>
        </h1>

        {/* Video Animation Section */}
        <section className="mb-16">
          <Card className="card-cosmic">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
   
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                 <img
          src={table}     
          alt="Rendu 3D"
          className="w-full h-full object-cover"
        />
           </div>
              
            </CardContent>
          </Card>
        </section>

        {/* Downloads Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-glow">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Téléchargements</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fichier Blender - SOLUTION RECOMMANDÉE */}
            <a
              href="/table.blend"
              download="table.blend"
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
                  <h3 className="text-xl font-bold mb-7 group-hover:text-glow transition-all duration-300">
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
            {/* <a
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-8 backdrop-blur-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <FileText size={28} className="text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-glow transition-all duration-300">Rapport du Projet</h3>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    Documentation complète du projet incluant le processus de création, les techniques utilisées et les défis rencontrés.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                    <Download size={18} />
                    Télécharger
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a> */}
          </div>
        </section>

        {/* Final Renders Section */}
        {/* <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-glow">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rendus Finaux</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={table}
                  alt={`Rendu ${index}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default ProjectDetail1;
