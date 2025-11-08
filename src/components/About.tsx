import { GraduationCap, Briefcase, Code, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-justify">About Me</h2>
          
          <div className="mt-8 space-y-6 sm:text-lg text-portfolio-text">
            <p>
              I am a passionate Data Science professional with a Master of Science in Data Science from Swansea University and a Bachelor of Technology in Information and Communication Technology from DA-IICT, India. My academic journey has honed my expertise in data analytics, data visualisation, Power BI, statistical analysis, and machine learning,   empowering me to address complex challenges in data-driven environments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              <div className="bg-gray-50 p-6 rounded-lg card-hover border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-portfolio-light-blue rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-dark-blue text-justify">Professional Experience</h3>
                </div>
                <p className="text-gray-700 text-justify text-[15px]">
                worked as a Junior Data Acquisition & Curation Scientist at Opendatabay, where I contributed to data discovery, metadata management, and quality assurance, enabling efficient integration of datasets into organisational platforms.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg card-hover border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-portfolio-highlight rounded-full flex items-center justify-center mr-4">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-dark-blue text-justify">Technical Skills</h3>
                </div>
                <p className="text-gray-700 text-justify text-[15px]">
                Proficient in Python, SQL, Power BI, and AWS, with experience in machine learning algorithms, data engineering, and web development. Strong foundation in statistical analysis and data visualisation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg card-hover border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-portfolio-medium-blue rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-dark-blue text-justify">Educational Background</h3>
                </div>
                <p className="text-gray-700 text-justify text-[15px]">
                MSc in Data Science from Swansea University and a B.Tech in ICT, providing a solid theoretical foundation combined with practical applications in data analysis and technology.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg card-hover border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center mr-4">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-dark-blue text-justify">Aspirations</h3>
                </div>
                <p className="text-gray-700 text-justify text-[15px]">
                Looking to advance my career in data science and analytics, contributing to innovative projects in healthcare, sustainability, and business optimisation, while continuing to expand my expertise in cutting-edge data technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
