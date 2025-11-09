// import { useEffect, useRef, useState } from 'react';
// import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';


// export const ContactSection = () => {
//   const contactRef = useRef<HTMLElement>(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const { toast } = useToast();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('in-view');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = contactRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
//     elements?.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent! ✨",
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const contactInfo = [
//     { icon: Mail, label: 'Email', value: 'karaghofrane2003@gmail.com', href :'https://mail.google.com/mail/?view=cm&fs=1&to=karaghofrane2003@gmail.com'},
//     { icon: Phone, label: 'Phone', value: '+213 697 636 477', href: 'tel:+' },
//     { icon: MapPin, label: 'Location', value: 'Setif - Algeria', href: '#' }
//   ];

//   const socialLinks = [
//     { icon: Github, href: '#', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://www.linkedin.com/in/kara-ghofrane-a7a015383/', label: 'LinkedIn' },
//     { icon: Twitter, href: '#', label: 'Twitter' }
//   ];

//   return (
//     <section id="contact" ref={contactRef} className="py-20 px-6">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 fade-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">Let's Create Together</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           <div className="fade-in-left">
//             <h3 className="text-3xl font-bold text-glow mb-8">Get In Touch</h3>
            
//             <div className="space-y-6 mb-12">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={index}
//                   href={info.href}
//                   className="flex items-center space-x-4 p-4 rounded-xl bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-105 group"
//                 >
//                   <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
//                     <info.icon size={24} className="text-primary" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{info.label}</p>
//                     <p className="font-semibold">{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             <div>
//               <h4 className="text-xl font-bold text-glow mb-6">Find Me Online</h4>
//               <div className="flex space-x-4">
//                 <a 
//                   href="https://github.com/karaghofrane" 
//                   className="p-4 rounded-full bg-card/30 hover:bg-primary/20 hover:text-primary border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
//                 >
//                   <Github size={24} />
//                 </a>
//                 <a 
//                   href="https://www.linkedin.com/in/kara-ghofrane-a7a015383/" 
//                   className="p-4 rounded-full bg-card/30 hover:bg-primary/20 hover:text-primary border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
//                 >
//                   <Linkedin size={24} />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="p-4 rounded-full bg-card/30 hover:bg-primary/20 hover:text-primary border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
//                 >
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//            <div className="fade-in-right">
//             <form onSubmit={handleSubmit} className="card-cosmic space-y-6">
//               <h3 className="text-2xl font-bold text-glow mb-6">Send Me a Message</h3>
              
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="bg-input/50 border-border/50 focus:border-primary transition-colors"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="bg-input/50 border-border/50 focus:border-primary transition-colors"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="bg-input/50 border-border/50 focus:border-primary transition-colors resize-none"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>
//               </div>

//               <Button type="submit" className="btn-cosmic w-full group">
//                 Send Message
//                 <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </form>
//           </div> 


//         </div>
//       </div>
//     </section>
//   );
// };

import { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
// Contact section component

export const ContactSection = () => {
  const contactRef = useRef<HTMLElement>(null);

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

    const elements = contactRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const primaryContacts = [
    { icon: Mail, label: 'Email', value: 'karaghofrane2003@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=karaghofrane2003@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'karaghofrane', href: 'https://github.com/karaghofrane2003-commits' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Ghofrane KARA', href: 'https://www.linkedin.com/in/ghofrane-kara-a7a015383/' }
  ];

  const quickInfo = [
    { icon: Phone, label: 'Phone', value: '+213 697 636 477', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'Setif, Algeria', href: '#' }
  ];


  return (
    <section id="contact" ref={contactRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            {/* <h3 className="text-3xl font-bold text-glow mb-12 text-center">Get In Touch</h3> */}
            
            {/* Primary Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {primaryContacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-8 backdrop-blur-lg border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <contact.icon size={28} className="text-primary group-hover:text-primary-glow transition-colors duration-300" />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-glow transition-all duration-300">{contact.label}</h4>
          
                      <p className="font-semibold text-primary group-hover:text-primary-glow transition-colors duration-300">{contact.value}</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              ))}
            </div>

            {/* Quick Info Icons */}
            <div className="flex justify-center space-x-12 pt-8 border-t border-border/30">
              {quickInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center space-x-3 px-6 py-4 rounded-full bg-card/20 hover:bg-card/40 border border-border/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon size={20} className="text-primary group-hover:text-primary-glow transition-colors duration-300" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">{info.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};