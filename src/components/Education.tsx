import { GraduationCap, CalendarIcon, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "Swansea University",
      degree: "M.Sc Data Science",
      period: "September 2023 - September 2024",
      location: "Swansea, Wales, United Kingdom",
      description: "Advanced studies in data science, focusing on Data analytics,  statistical analysis, data visualization  machine learning, and Power BI. Completed dissertation on object recognition using neural networks."
    },
    {
      school: "Dhirubhai Ambani Institute of Information and Communication Technology",
      degree: "Bachelor's degree, ICT",
      period: "July 2018 - June 2022",
      location: "Gandhinagar, Gujarat, India",
      description: "Comprehensive education in information and communication technology, with emphasis on programming, data structures, algorithms, and software development."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Education</h2>
          
          <div className="mt-10 timeline-container">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="timeline-item relative mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center mb-2 gap-2 md:gap-4">
                    <GraduationCap size={28} className="text-portfolio-highlight" />
                    <h3 className="text-xl font-bold text-portfolio-dark-blue">{edu.school}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-portfolio-medium-blue mb-3">{edu.degree}</h4>
                  
                  <div className="flex flex-wrap text-sm text-portfolio-gray mb-4 gap-y-2">
                    <div className="flex items-center mr-4">
                      <CalendarIcon size={16} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    
                    {edu.location && (
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
