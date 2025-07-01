
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Investment = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    country: "",
    message: ""
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Investment inquiry submitted:", formData);
    console.log("Files:", files);
    
    // Create email content
    const emailBody = `
Investment Inquiry:

Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Message: ${formData.message}

${files && files.length > 0 ? `Files attached: ${Array.from(files).map(file => file.name).join(', ')}` : 'No files attached'}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:phoni.technology@gmail.com?subject=Investment Inquiry&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Investment Inquiry Prepared",
      description: "Your default email client will open with the inquiry ready to send. Please attach your files manually.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">PHONI</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-[#00D563] transition-colors">Home</Link>
          <Link to="/signin">
            <Button className="text-white hover:bg-[#00C756]" style={{ backgroundColor: '#00D563' }}>SIGN IN</Button>
          </Link>
        </nav>
      </header>

      {/* Investment Form */}
      <div className="flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <img src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" alt="PHONI Logo" className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Investment Inquiry</h1>
            <p className="text-gray-600">Connect with us about investment opportunities</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Investment Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country of Origin *
                  </label>
                  <Input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Enter your country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your investment interest"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Documents (PDF, DOCX, TXT)
                  </label>
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.txt"
                    multiple
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You can upload multiple files (PDF, DOCX, or TXT format)
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full text-white hover:bg-[#00C756]"
                  style={{ backgroundColor: '#00D563' }}
                >
                  Send Investment Inquiry
                </Button>
              </form>

              <div className="text-center mt-4">
                <Link to="/" className="text-sm text-gray-500 hover:underline">
                  Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Investment;
