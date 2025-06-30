
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-gray-900">PHONI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-[#00D563] transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-[#00D563] transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-[#00D563] transition-colors">Contact</a>
          <Button className="text-white hover:bg-[#00C756]" style={{ backgroundColor: '#00D563' }}>Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-24 w-24 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Intelligent Solutions
            <span className="block" style={{ color: '#00D563' }}>Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            PHONI combines cutting-edge AI technology with intuitive design to deliver smart solutions that enhance your productivity and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white px-8 hover:bg-[#00C756]" style={{ backgroundColor: '#00D563' }}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-[#00D563]/5" style={{ borderColor: '#00D563', color: '#00D563' }}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PHONI?</h2>
            <p className="text-xl text-gray-600">Powerful features designed for modern workflows</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00D563/10' }}>
                  <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart AI Integration</h3>
                <p className="text-gray-600">Advanced artificial intelligence that learns and adapts to your unique needs and preferences.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00D563/10' }}>
                  <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intuitive Design</h3>
                <p className="text-gray-600">Clean, modern interface that makes complex tasks simple and enjoyable to complete.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00D563/10' }}>
                  <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Seamless Performance</h3>
                <p className="text-gray-600">Lightning-fast processing and real-time updates keep you productive without interruption.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20" style={{ backgroundColor: '#00D563' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who have already transformed their workflow with PHONI.
          </p>
          <Button size="lg" className="bg-white hover:bg-gray-100 px-8" style={{ color: '#00D563' }}>
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-6 w-6" />
              <span className="text-xl font-bold text-white">PHONI</span>
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

export default Index;
