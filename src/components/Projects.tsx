import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    setExpandedProjects(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    {
      title: "UK Amazon Consumer Trends Analysis",
      shortDescription: "Led end-to-end analysis of UK Amazon marketplace data, processing over 1 million product records. Implemented optimized SQL queries for efficient data extraction and storage, performed data cleaning to handle missing values, and conducted sentiment analysis on customer reviews.",
      fullDescription: `Technical Details:
• SQL Data Engineering:
  - Designed and implemented optimized SQL queries to efficiently extract structured data
  - Structured the dataset into relational tables based on product category, review metadata, and pricing info
  - Ensured scalability and performance by indexing key fields

• Python-based Analysis:
  - Cleaned and standardized messy data using pandas
  - Calculated sales velocity metrics to identify fast-moving products
  - Created custom visual plots for sentiment insights

• Interactive Dashboard (Power BI):
  - Built multi-page dashboard visualizing sales trends, price distribution, and customer sentiment
  - Implemented interactive features for non-technical stakeholders

Impact:
• Discovered mid-range priced products had highest customer satisfaction
• Identified seasonal sales patterns during Black Friday and Boxing Day
• Provided marketing teams with data-backed insights for decision-making`,
      tags: ["SQL", "Python", "Power BI", "Data Analysis", "Sentiment Analysis", "Pandas", "NumPy", "Jupyter Notebook"],
      date: "December 2024",
      role: "Sole Data Analyst & Engineer",
      link: "https://github.com/vanditbhut/UK_Amazon"
    },
    {
      title: "Marvel Movie Universe (MCU) Data Analysis",
      shortDescription: "Conducted comprehensive analysis of Marvel Cinematic Universe using cloud-based architecture. Implemented automated data retrieval with AWS Lambda, processed data on 30+ MCU movies, and created visualizations to uncover patterns in release schedules, character dynamics, and creative influences.",
      fullDescription: `Technical Details:
• Cloud-based Data Pipeline:
  - Created automated data retrieval system using AWS Lambda
  - Stored and version-controlled datasets using AWS S3
  - Implemented cloud automation via AWS EventBridge

• Data Processing & Enrichment:
  - Cleaned and structured data on 30+ MCU movies
  - Used Pandas for data manipulation and aggregation
  - Created 7 informative charts using Matplotlib and Seaborn

• Analysis & Insights:
  - Revealed increasing release frequency and box office revenue trends
  - Identified key character clusters and team formations
  - Demonstrated effectiveness of Marvel's long-form storytelling strategy

• Scheduling & Monitoring:
  - Implemented cloud automation via AWS EventBridge to schedule Lambda functions
  - Ensured regular and reliable updates to the dataset

Impact & Insights:
• The Marvel Cinematic Universe (MCU) has seen significant growth in movie releases, reflecting increased demand and popularity. 
• Key characters like Iron Man and Captain America play central roles across multiple phases, highlighting their enduring appeal. 
• Directors such as Joss Whedon and the Russo brothers have significantly influenced the franchise's creative direction. 
• Each phase strategically builds on previous narratives while introducing new characters and storylines.`,
      tags: ["Python", "AWS", "Data Visualization", "Cloud Computing", "Pandas", "Matplotlib", "Seaborn"],
      date: "December 2024",
      role: "Sole Analyst & Developer",
      link: "https://github.com/vanditbhut/Marvel_Movie_Universe"
    },
    {
      title: "Object Recognition",
      shortDescription: "Developed and compared Convolutional Neural Networks (CNNs) for image recognition using the CIFAR-100 dataset, achieving over 80% accuracy through model optimization and ensemble techniques.",
      fullDescription: `Technical Details:
• Data Engineering & Quality Control:
  - Managed complete dataset pipeline from raw image ingestion to preprocessed data
  - Implemented normalization, augmentation, and label encoding
  - Improved dataset consistency by 20% through quality control measures

• Model Design & Comparison:
  - Developed and trained three CNN architectures: Basic CNN, DenseNet, and EfficientNet
  - Evaluated models using accuracy, precision, recall, and F1-score metrics
  - Implemented ensemble methods (Majority Voting and Weighted Majority Voting)

• Performance Monitoring:
  - Created visualization dashboards using Matplotlib and Seaborn
  - Monitored training accuracy, loss curves, and confusion matrices
  - Used insights to optimize hyperparameters and model performance

Impact & Insights:
• Achieved over 80% accuracy through ensemble methods, reducing false negatives by 19%
• Demonstrated EfficientNet's superior accuracy with minimal computational cost
• Showed DenseNet's effectiveness with underrepresented and noisy classes
• Improved model generalizability through proper data handling and preprocessing`,
      tags: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Matplotlib", "Deep Learning", "Computer Vision"],
      date: "July 2024 - September 2024",
      role: "Sole Developer & Researcher",
      link: "https://github.com/vanditbhut/Object_Recognition"
    },
    {
      title: "Hydrostatic Thrust Bearing Optimisation",
      shortDescription: "Developed and implemented optimization algorithms (Random Search and Simulated Annealing) to optimize hydrostatic thrust bearing designs, minimizing power losses while maintaining load-bearing capacity.",
      fullDescription: `Technical Details:
• Objective Function & Physical Constraints:
  - Designed multi-objective cost function combining pressure and frictional power loss
  - Implemented 7 physical constraints for load capacity, pressure, temperature, and geometry
  - Ensured realistic designs through comprehensive constraint handling

• Optimisation Algorithm Development:
  - Developed custom implementations of Random Search and Simulated Annealing
  - Implemented penalty-based constraint handling and cooling schedules
  - Optimized parameter neighborhoods for better exploration

• Robustness Testing & Validation:
  - Conducted 21 independent experiments per algorithm.
  - Performed statistical testing using paired t-tests.
  - Created visualizations for convergence analysis and performance comparison

Impact & Insights:
• Simulated Annealing consistently outperformed Random Search with better solutions
• Demonstrated the effectiveness of metaheuristics in complex engineering problems
• Established a foundation for applying optimization strategies in mechanical systems`,
      tags: ["Python", "NumPy", "Matplotlib", "Pandas", "Optimization", "Engineering", "Statistical Analysis"],
      date: "November 2023",
      role: "Sole Developer & Researcher",
      link: "https://github.com/vanditbhut/Hydrostatic-Bearing-Optimisation"
    },
    //{
    //  title: "Academic Project Management System",
    //  description: "Designed and developed a web application for managing academic projects at DA-IICT. The system allowed professors to post project opportunities and students to apply and track their progress, streamlining the project management process.",
    //  tags: ["Web Development", "HTML/CSS", "UI Design"],
    //  image: "/lovable-uploads/28ed327d-afaa-47fb-b739-c8789f98adea.png"
    //},
    //{
    //  title: "Binary Tree Algorithm Optimization",
    //  description: "Researched and implemented an efficient algorithm to calculate balance factors in binary tree nodes. The solution improved computational efficiency and accuracy in tree balancing operations, enhancing overall binary tree performance.",
    //  tags: ["Algorithms", "Data Structures", "Python"],
    //  image: "/lovable-uploads/b736da4f-3a6b-48a0-9807-9c1fbffadd85.png"
    //}
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-4xl font-bold text-center mb-12">Projects</h2>
          
          <div className="mt-10 grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden card-hover border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-portfolio-medium-blue bg-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-portfolio-dark-blue mb-2 text-justify">{project.title}</h3>
                      <span className="text-sm text-gray-500 text-justify">{project.date}</span>
                    </div>
                    {project.role && (
                      <span className="mt-2 md:mt-0 px-3 py-1 bg-portfolio-light-blue text-portfolio-dark-blue text-sm rounded-full text-justify">
                        {project.role}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="inline-block px-3 py-1 bg-gray-100 text-portfolio-medium-blue text-sm rounded-full hover:bg-portfolio-light-blue transition-colors text-justify"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-portfolio-medium-blue text-white rounded-md hover:bg-portfolio-dark-blue transition-colors"
                      >
                        <span className="text-justify">View Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    <button
                      onClick={() => toggleProject(index)}
                      className="flex items-center gap-2 px-4 py-2 text-portfolio-medium-blue hover:text-portfolio-dark-blue transition-colors"
                    >
                      {expandedProjects.includes(index) ? (
                        <>
                          <span className="text-justify">Show Less</span>
                          <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span className="text-justify">Show More Details</span>
                          <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {expandedProjects.includes(index) && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed text-justify">
                        {project.fullDescription}
                      </pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
