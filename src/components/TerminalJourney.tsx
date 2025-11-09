import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TerminalJourney = () => {
//   const downloadCV = () => {
//     const cvContent = `
// GHOFRANE - Web Developer
// ===============================

// EXPERIENCE:
// • Frontend Development: React, TypeScript, Tailwind CSS
// • Backend Development: Node.js, Python, PostgreSQL  
// • Mobile Development: React Native, Flutter
// • UI/UX Design: Figma, Adobe Creative Suite

// ACHIEVEMENTS:
// • 20+ successful projects completed
// • 98% client satisfaction rate
// • A+ code quality score
// • 3 innovation awards received

// PHILOSOPHY:
// "Code is poetry, design is art, and together they create magic."
//     `;
    
//     const blob = new Blob([cvContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'Ghofrane_CV.txt';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

  const terminalContent = `ghofrane@dev:~$ whoami
Ghofrane - Web Developer
I'm a passionate developer who loves creating digital
experiences that blend functionality with beauty

ghofrane@dev:~$ cat experience.txt
→ Frontend: React, TypeScript, Tailwind CSS
→ Backend: Node.js, Python, PostgreSQL
→ Design: Figma, Adobe XD

ghofrane@dev:~$ ls achievements/
successful_projects.log    10+ completed

ghofrane@dev:~$ echo $PHILOSOPHY
"Code is poetry, design is art, and together they create magic."
Always learning, always growing, always pushing boundaries.

ghofrane@dev:~$ `;

  return (
    <div className="space-y-8">
      <div className="card-cosmic bg-gradient-to-br from-background/95 to-card/50 border border-primary/30 backdrop-blur-sm">
        <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-primary/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-primary"></div>
          </div>
          <span className="text-sm text-muted-foreground ml-4">Terminal </span>
        </div>
        
        <div 
          className="font-mono text-sm text-primary h-70 overflow-y-auto whitespace-pre-wrap"
          style={{ 
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
            textShadow: '0 0 10px hsl(var(--primary)/0.2)'
          }}
        >
          {terminalContent}
          <span className="animate-pulse text-accent">█</span>
        </div>
      </div>

      <div className="text-center">
        <Button>
          <Download size={20} className="mr-2 group-hover:animate-bounce" />
          Download CV
        </Button>
      </div>
    </div>
  );
};