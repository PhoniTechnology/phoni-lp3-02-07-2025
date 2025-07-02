
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" 
            alt="PHONI Logo" 
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold text-gray-900">PHONI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-[#00D563] transition-colors">Home</Link>
          <Link to="/features" className="text-[#00D563] font-semibold">Features</Link>
          <Link to="/about" className="text-gray-600 hover:text-[#00D563] transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#00D563] transition-colors">Contact</Link>
          <Link to="/signin">
            <Button className="text-white hover:bg-[#00C756]" style={{ backgroundColor: '#00D563' }}>SIGN IN</Button>
          </Link>
        </nav>
      </header>

      {/* Features Content */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" 
              alt="PHONI Logo" 
              className="h-24 w-24 mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              <span style={{ color: '#00D563' }}>FEATURES</span>
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The PHONI AI mobile app utilizes and evolves a number of technologies:
            </p>

            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Intelligent M2M (mobile to mobile) gameplay
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                LLM
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Biometrics
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Micro-interactions
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Ocular recognition
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Content generation
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Defined recognition of HI / AI interactions
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Telephony interactions
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Validation of HI / AI interactions
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Next level personalization of AI performance
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                A far more personalized and efficient Chatbot
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Global interconnectivity
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Social Media tools / enhancements
              </li>
              <li className="flex items-start">
                <span className="text-[#00D563] mr-3">•</span>
                Blockchain security
              </li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The PHONI AI mobile app coming to everyone Summer 2025
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our overall goal is to improve HI and AI, to create a far more intelligent experience for both humans and droids, and continuing to build a bridge between the creator and the creation for the sake of humanity; with an emphasis on FUN.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link to="/">
                <Button size="lg" className="text-white hover:bg-[#00C756] px-8" style={{ backgroundColor: '#00D563' }}>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-6 w-6" />
                <span className="text-xl font-bold text-white">PHONI</span>
              </div>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-[#00D563] transition-colors">
                Contact PHONI
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 PHONI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
