import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Contact Me</h2>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-portfolio-dark-blue mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-portfolio-medium-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-dark-blue mb-1">Email</h4>
                      <a 
                        href="mailto:vanditbhut12@gmail.com" 
                        className="text-portfolio-medium-blue hover:text-portfolio-highlight transition-colors"
                      >
                        vanditbhut12@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-portfolio-medium-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-dark-blue mb-1">Phone</h4>
                      <a 
                        href="tel:+447393065231" 
                        className="text-portfolio-medium-blue hover:text-portfolio-highlight transition-colors"
                      >
                        +44 7393 065231
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-portfolio-medium-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <Linkedin className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-dark-blue mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/vandit-bhut" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-medium-blue hover:text-portfolio-highlight transition-colors"
                      >
                        linkedin.com/in/vandit-bhut
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-portfolio-medium-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-portfolio-dark-blue mb-1">Location</h4>
                      <p className="text-portfolio-medium-blue">
                        Swansea, Wales, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Contact */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold text-portfolio-dark-blue mb-6">Let's Connect</h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    I'm currently open to new opportunities in data science and analytics. Whether you have a project in mind, want to discuss potential collaborations, or just want to say hello, I'd love to hear from you!
                  </p>
                  
                  <p className="text-gray-700">
                    Feel free to reach out through email, phone, or connect with me on LinkedIn. I'm always interested in meeting new people and exploring new opportunities in the field of data science.
                  </p>
                  
                  <div className="pt-4">
                    <a 
                      href="mailto:vanditbhut12@gmail.com" 
                      className="inline-flex items-center px-6 py-3 bg-portfolio-dark-blue text-white rounded-md hover:bg-portfolio-medium-blue transition-colors"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send an Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
