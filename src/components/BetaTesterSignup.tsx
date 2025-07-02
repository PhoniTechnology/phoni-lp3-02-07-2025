
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BetaTesterSignupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaTesterSignup = ({ isOpen, onClose }: BetaTesterSignupProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create email content
    const subject = "PHONI Beta Tester Application";
    const body = `Hello PHONI Team,

I would like to become a beta tester for PHONI.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Country: ${formData.country}

Thank you for considering my application.

Best regards,
${formData.firstName} ${formData.lastName}`;

    // Open email client
    const emailUrl = `mailto:phoni.technology@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl);
    
    // Reset form and close modal
    setFormData({ firstName: "", lastName: "", email: "", country: "" });
    onClose();
  };

  const handleCancel = () => {
    setFormData({ firstName: "", lastName: "", email: "", country: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/4ea69e9c-a7bd-494c-bc88-b9413b9f6ae8.png" 
              alt="PHONI Logo" 
              className="h-12 w-12" 
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Become a <span style={{ color: '#00D563' }}>PHONI</span> Beta Tester
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country of Origin
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

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 text-white hover:bg-[#00C756]"
              style={{ backgroundColor: '#00D563' }}
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BetaTesterSignup;
