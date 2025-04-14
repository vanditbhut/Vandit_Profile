import { Linkedin, Mail, Github, ExternalLink, MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/447393065231" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <WhatsAppButton />
      <footer className="bg-portfolio-dark-blue text-white py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-display font-bold">Vandit Bhut</h2>
                <p className="text-portfolio-accent mt-1">Data Science Professional</p>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/vandit-bhut" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-highlight transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
                <a 
                  href="mailto:vanditbhut12@gmail.com" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-highlight transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-portfolio-accent mb-4 md:mb-0">
                &copy; {currentYear} Vandit Bhut. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-portfolio-accent hover:text-white transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-portfolio-accent hover:text-white transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-portfolio-accent hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-portfolio-accent hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
