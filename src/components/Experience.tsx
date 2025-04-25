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
    // {
    //   company: "Swansea University",
    //   title: "MSc Project (Object Recognition)",
    //   period: "July 2024 - September 2024",
    //   location: "Swansea, Wales, United Kingdom",
    //  description: "I used Convolutional Neural Networks (CNNs) like Basic CNN, DenseNet and EfficientNet to recognize images from the CIFAR-100 database and achieved an accuracy of over 80%. Additionally, I handled data engineering tasks, including managing raw data, converting data into useful analysis results, and maintaining data quality. I also applied Majority Voting and Weighted Majority Voting to enhance the output.",
    //   skills: ["Neural Networks", "Image Recognition", "Data Engineering"]
    // },
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
    
    
   // {
    //   company: "Dhirubhai Ambani Institute of Information and Communication Technology",
    //   title: "BTP Project (Students Academic Projects Management System)",
    //   period: "January 2022 - May 2022",
    //   location: "Gandhinagar, Gujarat, India",
    //   description: "Collaborated with a team of two under the guidance of Prof. Jayprakash Lalchandani on a BTP Project for the final semester. Designed and developed the front end of a web application using HTML, CSS, and Figma. The project aimed to streamline the management of academic projects, allowing professors to create, update, and review project details while students could apply and track project updates. Managed the development process, ensuring the website's functionality and user interface met project requirements.",
    //   skills: ["Web Development", "UI Design", "Project Management"]
  //  },
   // {
    //   company: "Dhirubhai Ambani Institute of Information and Communication Technology",
    //   title: "Research Internship (Algorithm to Find the Balance factor for each Binary tree node)",
    //   period: "May 2021 - July 2021",
    //   location: "Gandhinagar, Gujarat, India",
    //   description: "Collaborated with a friend to design and implement an efficient algorithm for determining balance factors in binary trees. Under the guidance of Prof. Puneet Bhateja, we developed a highly accurate solution to calculate balance factors for each node. Our algorithm improved the efficiency and precision of balance factor calculations, enhancing the performance of binary tree operations. Thrilled to have contributed to advancing the field of binary tree analysis.",
    //   skills: ["Algorithm Design", "Binary Trees", "Research"]
    // },
    // {
    //   company: "P.N.R. SOCIETY",
    //   title: "Rural Internship",
    //   period: "December 2019",
    //   location: "Bhavnagar, Gujarat, India",
    //  description: "Participated in a transformative rural internship program at P.N.R. Society, Bhavnagar. Engaged in a diverse range of activities, including visiting medical camps and hospitals, conducting surveys to assess the physical and mental well-being of disabled women in multiple villages of Ghogha Taluka, Bhavnagar district. This internship involved collaborating with a team of 13 members. Grateful for the opportunity to contribute to healthcare outreach and empower disabled women in rural communities.",
    //   skills: ["Healthcare Outreach", "Community Service", "Survey Analysis"]
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-justify">Experience</h2>
          
          <div className="mt-10 timeline-container">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="timeline-item relative mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-portfolio-dark-blue text-justify">{exp.company}</h3>
                  <h4 className="text-lg font-semibold text-portfolio-medium-blue mb-3 text-justify">{exp.title}</h4>
                  
                  <div className="flex flex-wrap text-sm text-portfolio-gray mb-4 gap-y-2">
                    <div className="flex items-center mr-4">
                      <CalendarIcon size={16} className="mr-1" />
                      <span className="text-justify">{exp.period}</span>
                    </div>
                    
                    {exp.location && (
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-justify">{exp.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-700 text-justify mb-4">{exp.description}</p>
                  
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
