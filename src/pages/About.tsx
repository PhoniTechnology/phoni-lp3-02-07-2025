
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">PHONI</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-[#00D563] transition-colors">Home</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#00D563] transition-colors">Contact</Link>
          <Link to="/signin">
            <Button className="text-white hover:bg-[#00C756]" style={{ backgroundColor: '#00D563' }}>SIGN IN</Button>
          </Link>
        </nav>
      </header>

      {/* About Content */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-24 w-24 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How <span style={{ color: '#00D563' }}>PHONI</span> creates and evolves HI / AI interaction.
            </h1>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is PHONI?</h2>
              <p className="text-lg text-gray-600">
                PHONI is a unique and interactive blend of M2M gaming, education, mental health, social media, LLM chatbot, messaging, and content generation through a mobile telephony platform.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why are we different than any other AI app / agent on the market?</h2>
              <p className="text-lg text-gray-600">
                PHONI provides a uniquely interactive platform for humans (HI) and droids (AI), with real personality and customizable personality characteristics for a female (Eva) or male (Max) AI with a fun, frisky, and free-spirited attitude.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How does PHONI enhance your life?</h2>
              <p className="text-lg text-gray-600">
                PHONI connects users from across the world in games based on finding out, Who's the smartest? Whos' the most intelligent? Use it for team-building. Use it for social events with friends. Connect with friends in different parts of the world to not just be on a phone call, but play a game that is truly FUN and makes you smarter.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What technology features does PHONI use to enhance user experience (UX)?</h2>
              <p className="text-lg text-gray-600">
                PHONI incorporates: biometrics, ocular recognition, micro-interactions, LLM, advanced animated AI avatars, real time telephony interactions. Simply put, you'll never look at AI mobile apps the same way ever again.
              </p>
            </div>
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
    </div>
  );
};

export default About;
