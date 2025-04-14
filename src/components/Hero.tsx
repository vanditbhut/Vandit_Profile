
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 pt-16">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-portfolio-dark-blue to-portfolio-highlight bg-clip-text text-transparent">
            Vandit Bhut
          </h1>
          
          <h2 className="animate-fade-in text-xl md:text-2xl text-portfolio-medium-blue font-medium mb-6">
            Data Science Graduate | B.Tech (ICT) Graduate
          </h2>

          <p className="animate-fade-in text-lg md:text-xl mb-8 text-portfolio-text max-w-3xl">
            Skilled in Python, SQL, Power BI, AWS & Machine Learning | Open to Opportunities in Data Science & Analytics
          </p>

          <div className="animate-fade-in flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-portfolio-dark-blue text-white rounded-full text-sm font-medium">
              Data Science
            </span>
            <span className="px-4 py-2 bg-portfolio-medium-blue text-white rounded-full text-sm font-medium">
              Python
            </span>
            <span className="px-4 py-2 bg-portfolio-light-blue text-white rounded-full text-sm font-medium">
             Power BI
            </span>
            <span className="px-4 py-2 bg-portfolio-highlight text-white rounded-full text-sm font-medium">
              SQL
            </span>
            <span className="px-4 py-2 bg-portfolio-accent text-white rounded-full text-sm font-medium">
            Machine Learning
            </span>
            <span className="px-4 py-2 bg-portfolio-gray text-white rounded-full text-sm font-medium">
              AWS
            </span>
          </div>

          <div className="animate-fade-in">
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 bg-portfolio-dark-blue hover:bg-portfolio-medium-blue text-white px-6 py-3 rounded-md transition-all duration-300"
            >
              Learn More
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? '#2D4262' : '#5E85BC',
                opacity: 0.3,
                transform: `scale(${Math.random() * 0.6 + 0.4})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
