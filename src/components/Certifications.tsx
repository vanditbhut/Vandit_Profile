const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Certifications</h2>
          
          <div className="mt-10">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <ul className="space-y-4">               
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-portfolio-highlight mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-portfolio-dark-blue">Introduction to Data Analytics</h4>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-portfolio-highlight mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-portfolio-dark-blue">Python for Data Science, AI, and Development</h4>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-portfolio-highlight mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-portfolio-dark-blue">Introduction to Project Management</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
