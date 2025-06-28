import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-4xl font-bold text-center mb-12">Resume</h2>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-center max-w-2xl">
              <p className="text-gray-700 text-lg mb-8">
                I'd like you to please download my resume to learn more about my professional experience, skills, and achievements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-portfolio-medium-blue hover:bg-portfolio-dark-blue text-white px-6 py-3 rounded-md transition-colors"
              >
                <a
                  href="https://drive.google.com/file/d/1yhnsId_Icd6WuOALgotchDKIdRA2TgFq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  <span>View Resume</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-portfolio-medium-blue text-portfolio-medium-blue hover:bg-portfolio-light-blue px-6 py-3 rounded-md transition-colors"
              >
                <a
                  href="https://drive.google.com/file/d/1yhnsId_Icd6WuOALgotchDKIdRA2TgFq/view?usp=sharing"
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download PDF</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 
