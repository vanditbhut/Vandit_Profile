import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-portfolio-dark-blue mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-portfolio-medium-blue flex items-center justify-center mb-4">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-portfolio-dark-blue mb-2">Email</h4>
                <a 
                  href="mailto:vanditbhut12@gmail.com" 
                  className="text-portfolio-medium-blue hover:text-portfolio-highlight transition-colors text-center break-all"
                >
                  vanditbhut12@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-portfolio-medium-blue flex items-center justify-center mb-4">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-portfolio-dark-blue mb-2">Phone</h4>
                <a 
                  href="tel:+447393065231" 
                  className="text-portfolio-medium-blue hover:text-portfolio-highlight transition-colors"
                >
                  +91 9998700622
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-portfolio-medium-blue flex items-center justify-center mb-4">
                  <Linkedin className="text-white h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-portfolio-dark-blue mb-2">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/vandit-bhut" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-medium-blue hover:text-portfolio-highlight transition-colors text-center"
                >
                  linkedin.com/in/vandit-bhut
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-portfolio-medium-blue flex items-center justify-center mb-4">
                  <MapPin className="text-white h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-portfolio-dark-blue mb-2">Location</h4>
                <p className="text-portfolio-medium-blue text-center">
                  Bhavnagar, India
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss how we can work together to achieve your goals.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:vanditbhut12@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-portfolio-dark-blue text-white rounded-lg hover:bg-portfolio-medium-blue transition-colors duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/vandit-bhut"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#006396] transition-colors duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
