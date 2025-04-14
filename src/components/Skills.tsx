import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, LineChart, Brain, Code2, PieChart, Server, Laptop, DatabaseIcon, Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming & Development",
      icon: <Code2 className="h-8 w-8 text-portfolio-medium-blue" />,
      skills: ["Python", "SQL", "HTML/CSS", "JavaScript (Basic)", "C/C++"]
    },
    {
      name: "Data Analysis & Visualization",
      icon: <LineChart className="h-8 w-8 text-portfolio-medium-blue" />,
      skills: ["Power BI", "Data Visualization", "Dashboard Design", "Analytics", "Data Cleaning", "Data Integration"]
    },
    {
      name: "Business Intelligence",
      icon: <PieChart className="h-8 w-8 text-portfolio-medium-blue" />,
      skills: ["Data Analysis", "Business Analytics", "Performance Metrics", "Market Research", "Strategic Planning"]
    },
    {
      name: "Machine Learning & AI",
      icon: <Brain className="h-8 w-8 text-portfolio-medium-blue" />,
      skills: ["Neural Networks", "Deep Learning", "Classification", "Regression"]
    },
    {
      name: "Cloud & Database Management",
      icon: <DatabaseIcon className="h-8 w-8 text-portfolio-medium-blue" />,
      skills: ["SQL", "AWS", "ETL Processes", "Data Modeling", "Big Data Analytics"]
    },
    {
      name: "Soft Skills",
      icon: <Users className="h-8 w-8 text-portfolio-medium-blue" />,
      skills: ["Communication", "Team Collaboration", "Problem Solving", "Time Management", "Adaptability", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="overflow-hidden card-hover border border-gray-200"
              >
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h3 className="ml-3 text-lg font-semibold text-portfolio-dark-blue">{category.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="inline-block px-3 py-1 bg-gray-100 text-portfolio-medium-blue text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
