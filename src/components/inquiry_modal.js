
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-xl shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b">
            <Dialog.Title className="text-xl font-semibold">Get Started with AI Integration</Dialog.Title>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`flex items-center ${num < step ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${num <= step ? 'border-blue-600 text-blue-600' : 'border-gray-300'}`}>
                      {num}
                    </div>
                    {num < 3 && <div className={`w-24 h-1 mx-2 ${num < step ? 'bg-blue-600' : 'bg-gray-300'}`} />}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium mb-4">What type of AI solution are you looking for?</h3>
                  <div className="space-y-3">
                    <label className="block">
                      <input
                        type="radio"
                        name="projectType"
                        value="voice"
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Voice AI Assistant
                    </label>
                    <label className="block">
                      <input
                        type="radio"
                        name="projectType"
                        value="chat"
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Chat AI Assistant
                    </label>
                    <label className="block">
                      <input
                        type="radio"
                        name="projectType"
                        value="both"
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Both Voice & Chat AI
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2">Project Description</label>
                    <textarea
                      name="description"
                      rows="4"
                      className="w-full border rounded-lg p-2"
                      placeholder="Tell us about your project requirements..."
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Budget & Timeline */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium mb-4">Budget & Timeline</h3>
                  <div>
                    <label className="block mb-2">Budget Range</label>
                    <select
                      name="budget"
                      className="w-full border rounded-lg p-2"
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Expected Timeline</label>
                    <select
                      name="timeline"
                      className="w-full border rounded-lg p-2"
                      onChange={handleInputChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3">1-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12+">12+ months</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  <div>
                    <label className="block mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full border rounded-lg p-2"
                      placeholder="Enter your full name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full border rounded-lg p-2"
                      placeholder="Enter your email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full border rounded-lg p-2"
                      placeholder="Enter your company name"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto"
                  >
                    Submit
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
