import { GraduationCap, Briefcase, Code, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-justify">About Me</h2>
          
          <div className="mt-8 space-y-6 sm:text-lg text-portfolio-text">
            <p>
              I am a Data Science & Analytics professional based in Bhavnagar, India, with an MSc in Data Science from Swansea University, UK, and a B.Tech in ICT from DA-IICT, India. I specialise in Python, SQL, Power BI, and AWS, turning raw data into insights that drive smarter business decisions. 
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
                Worked as a Junior Data Acquisition & Curation Scientist at OpenDataBay (UK), improving metadata workflows for 100+ datasets, cutting retrieval time by 30%, and enhancing data quality through Python and SQL validation.   
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
                Python, SQL, Power BI, AWS, Excel, GA4 | Data Cleaning, ETL, Visualisation, Statistical Analysis, Machine Learning | Business Intelligence & Cloud Integration                </p>
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
               Open to data analytics and data science roles across India — aiming to apply data-driven insights to solve challenges in business optimisation, sustainability, and user analytics.
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
