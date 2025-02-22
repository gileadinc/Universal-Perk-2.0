import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useState } from "react";

const InquiryModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '', // Added phone number field
    company: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.projectType) newErrors.projectType = 'Please select a project type';
      if (!formData.description) newErrors.description = 'Please provide a project description';
    } else if (currentStep === 2) {
      if (!formData.budget) newErrors.budget = 'Please select a budget range';
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    } else if (currentStep === 3) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
      if (!formData.company) newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      try {
        const response = await fetch('/api/send-inquiry', { // Replace with your actual email sending logic
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Inquiry submitted successfully!');
          onClose();
        } else {
          alert('Failed to submit inquiry. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting inquiry:', error);
        alert('Failed to submit inquiry. Please try again.');
      }
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-xl shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b">
            <Dialog.Title className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Let's Build Your AI Solution
            </Dialog.Title>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {['Project Details', 'Timeline & Budget', 'Contact Info'].map((label, index) => (
                  <div 
                    key={label} 
                    className={`flex items-center ${index < step ? 'text-blue-600' : 'text-gray-400'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                      ${index + 1 === step ? 'border-blue-600 bg-blue-50' : 
                        index + 1 < step ? 'border-blue-600 bg-blue-600 text-white' : 
                        'border-gray-300'}`}
                    >
                      {index + 1 < step ? '✓' : index + 1}
                    </div>
                    <span className="ml-2 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Project Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['chat', 'voice', 'both'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => handleInputChange({ target: { name: 'projectType', value: type } })}
                          className={`p-4 border-2 rounded-lg text-left ${
                            formData.projectType === type 
                              ? 'border-blue-600 bg-blue-50' 
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <h3 className="font-medium capitalize">{type} AI</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {type === 'chat' ? 'Intelligent chat solutions' :
                             type === 'voice' ? 'Voice-enabled AI agents' :
                             'Combined chat & voice AI'}
                          </p>
                        </button>
                      ))}
                    </div>
                    {errors.projectType && <p className="mt-2 text-sm text-red-600">{errors.projectType}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Project Description</label>
                    <textarea
                      name="description"
                      rows="4"
                      className={`w-full border rounded-lg p-3 ${errors.description ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="Tell us about your project requirements..."
                      onChange={handleInputChange}
                      value={formData.description}
                    />
                    {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg p-3 ${errors.budget ? 'border-red-300' : 'border-gray-200'}`}
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                    {errors.budget && <p className="mt-2 text-sm text-red-600">{errors.budget}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Timeline (months)</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg p-3 ${errors.timeline ? 'border-red-300' : 'border-gray-200'}`}
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3">1-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12+">12+ months</option>
                    </select>
                    {errors.timeline && <p className="mt-2 text-sm text-red-600">{errors.timeline}</p>}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg p-3 ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg p-3 ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Phone Number</label> {/* Added Phone Number Label */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg p-3 ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg p-3 ${errors.company ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="Enter your company name"
                    />
                    {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company}</p>}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                  >
                    Submit Inquiry
                  </button>
                )}
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default InquiryModal;