import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPin, Power } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      "company": "Opendatabay",
      "title": "Junior Data Acquisition & Curation Scientist",
      "period": "October 2024 - Present",
      "location": "United Kingdom",
      "description": "As a Junior Data Acquisition & Curation Scientist at Opendatabay, I was responsible for sourcing, organizing, and standardizing over 100 publicly available datasets to enhance discoverability and reusability. I developed consistent metadata standards to streamline data retrieval and collaborated closely with developers and analysts to ensure data compatibility across platforms. Leveraging Power BI and data visualization tools, I transformed raw data into actionable insights. This experience sharpened my skills in data curation, metadata design, data visualization, and effective collaboration in a cross-functional environment.",
      "skills": ["Data Curation", "Metadata Management", "Data Acquisition", "Data Cleaning & Structuring", "Power BI", "Data Visualization", "DAX", "Data Documentation", "Problem Solving", "Cross-functional Team Collaboration", "Stakeholder Engagement", "Data-Driven Decision-Making"]
    }
    ,
    {
      "company": "Midnight Digital Pvt. Ltd.",
      "title": "Web Designer",
      "period": "March 2023 - June 2023",
      "location": "Bhavnagar, Gujarat, India",
      "description": "Collaborative and detail-oriented web designer with hands-on experience in HTML, CSS (Bulma and Bootstrap), JavaScript, and user-centric design. Contributed to the development and optimization of 10+ websites, enhancing speed, performance, and responsiveness. Delivered successful client projects, including ENpower School and India's Future Tycoons (IFT), by aligning design with brand goals and user expectations. Played an active role in mentoring junior team members by reviewing their work and sharing foundational design and coding practices, promoting a culture of continuous learning and quality improvement.",
      "skills": ["UI/UX Design", "HTML/CSS", "Web Development", "Responsive Design", "Performance Optimization", "Team Collaboration"]
    }
    ,
    {
      "company": "Accenture North America",
      "title": "Data Analytics Job Simulation",
      "period": "June 2024",
      "location": "Online",
      "description": "Completed a data analytics job simulation where I analyzed seven datasets totaling over 100,000 records to identify key business trends and deliver actionable insights. I created concise, stakeholder-friendly presentations that highlighted core findings and led to over 10 strategic recommendations. This experience enhanced my ability to interpret complex data, craft clear narratives from analytics, and present data-driven strategies in a business context.",
      "skills": ["Data Analysis", "Data Interpretation", "Excel", "Business Intelligence", "Data Storytelling", "Presentation Design", "Analytical Thinking", "Stakeholder Communication", "Problem Solving", "Decision-Making Support"]
    },
    {
      "company": "PwC Switzerland",
      "title": "Power BI Virtual Experience",
      "period": "June 2024",
      "location": "Online",
      "description": "Completed a Power BI job simulation focused on solving HR reporting challenges through dashboard development. Designed and built an interactive dashboard using Power BI, incorporating calculated fields, filters, and dynamic visuals powered by DAX. The solution led to a 40% improvement in reporting efficiency and provided stakeholders with clear, actionable insights. This experience sharpened my skills in data visualization, DAX, and creating business-focused reporting tools to support informed decision-making.",
      "skills": ["Power BI", "Dashboard Design", "DAX", "Data Visualization", "HR Analytics", "Data Modeling", "Interactive Reporting", "Efficiency Optimization", "Analytical Thinking", "Business Intelligence"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-justify">Experience</h2>
          
          <div className="mt-10">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-portfolio-dark-blue">{exp.company}</h3>
                  <h4 className="text-lg font-semibold text-portfolio-medium-blue mb-3 ">{exp.title}</h4>
                  
                  <div className="flex flex-wrap text-sm text-portfolio-gray mb-4 gap-y-2">
                    <div className="flex items-center mr-4">
                      <CalendarIcon size={16} className="mr-1" />
                      <span className="">{exp.period}</span>
                    </div>
                    
                    {exp.location && (
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span className="">{exp.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-700 sm:text-lg mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-100 text-portfolio-medium-blue">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
