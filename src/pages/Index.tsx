import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import BetaTesterSignup from "@/components/BetaTesterSignup";

const Index = () => {
  const [isBetaSignupOpen, setIsBetaSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">PHONI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-[#00D563] transition-colors">Features</a>
          <Link to="/about" className="text-gray-600 hover:text-[#00D563] transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#00D563] transition-colors">Contact</Link>
          <Link to="/signin">
            <Button className="text-white hover:bg-[#00C756]" style={{ backgroundColor: '#00D563' }}>SIGN IN</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" 
              alt="PHONI Logo" 
              className="h-72 w-72 mx-auto mb-6"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(0, 213, 99, 0.5)) drop-shadow(0 0 25px rgba(0, 213, 99, 0.3))'
              }}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span style={{ color: '#00D563' }}>ARTIFICIAL. FUN. INTELLIGENT.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            PHONI combines cutting-edge AI technology with human interaction, fun and intelligence to bring you the next step forward in HI and AI interaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-white px-8 hover:bg-[#00C756]" 
              style={{ backgroundColor: '#00D563' }}
              onClick={() => setIsBetaSignupOpen(true)}
            >
              BECOME A BETA TESTER
            </Button>
            <Link to="/about">
              <Button size="lg" variant="outline" className="hover:bg-[#00D563]/5" style={{ borderColor: '#00D563', color: '#00D563' }}>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why you will use <span style={{ color: '#00D563' }}>PHONI</span>, and love it.
            </h2>
            <p className="text-xl text-gray-600">A mobile AI application built to reshape FUN, gaming interaction and intelligence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00D563/10' }}>
                  <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ADVANCED INTERACTIVE AI VS HI GAMING</h3>
                <p className="text-gray-600">An advanced, FUN, customizable, fully interactive, gaming experience built to enhance human intelligence and entertainment. Test your intelligence against HIs or our AIs (Eva / Max). Long live HI!</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00D563/10' }}>
                  <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intuitive Design</h3>
                <p className="text-gray-600">A clean, modern telephony interface, that evolves M2M (mobile gameplay) and AI interactions in every way. Complete with animated AI avatars, and universal gameplay to see who the smartest HI (human intelligence) really is.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00D563/10' }}>
                  <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">UNPARALLELED PERFORMANCE</h3>
                <p className="text-gray-600">An AI / HI completely different interactive M2M gaming telephony experience with biometrics, mental stats, and ocular / emotional recognition engineered into the user interactions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How PHONI Creates Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" 
                alt="PHONI Logo" 
                className="h-16 w-16"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              How <span style={{ color: '#00D563' }}>PHONI</span> creates and evolves HI / AI interaction.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is PHONI?</h3>
                <p className="text-gray-600">PHONI is a unique and interactive blend of M2M gaming, education, mental health, social media, LLM chatbot, messaging, and content generation through a mobile telephony platform.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why are we different than any other AI app / agent on the market?</h3>
                <p className="text-gray-600">PHONI provides a uniquely interactive platform for humans (HI) and droids (AI), with real personality and customizable personality characteristics for a female (Eva) or male (Max) AI with a fun, frisky, and free-spirited attitude.</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">How does PHONI enhance your life?</h3>
                <p className="text-gray-600">PHONI connects users from across the world in games based on finding out, Who's the smartest? Whos' the most intelligent? Use it for team-building. Use it for social events with friends. Connect with friends in different parts of the world to not just be on a phone call, but play a game that is truly FUN and makes you smarter.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What technology features does PHONI use to enhance user experience (UX)?</h3>
                <p className="text-gray-600">PHONI incorporates: biometrics, ocular recognition, micro-interactions, LLM, advanced animated AI avatars, real time telephony interactions. Simply put, you'll never look at AI mobile apps the same way ever again.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment</h2>
          <p className="text-xl text-gray-600 mb-8">
            We are currently seeking qualified investors for our project. If you're that person, please contact us.
          </p>
          <Link to="/investment">
            <Button size="lg" className="text-white hover:bg-[#00C756] px-8" style={{ backgroundColor: '#00D563' }}>
              Contact for Investment
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20" style={{ backgroundColor: '#00D563' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's play smart.</h2>
          <p className="text-xl text-white/90 mb-8">
            Become a PHONI user and test the beta before public launch Summer 2025.
          </p>
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 px-8 text-black"
            onClick={() => setIsBetaSignupOpen(true)}
          >
            Want Some Fun?
          </Button>
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

      {/* Beta Tester Signup Modal */}
      <BetaTesterSignup 
        isOpen={isBetaSignupOpen} 
        onClose={() => setIsBetaSignupOpen(false)} 
      />
    </div>
  );
};

export default Index;
