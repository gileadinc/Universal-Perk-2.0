import { useState } from 'react';
import { Wallet, ChevronDown } from 'lucide-react'; // Importing Lucide icons

const features = [
  {
    name: 'Paypal checkout form',
    description: 'What has been worked on',
    extraContent: 'This is the extra content for Paypal checkout form.',
  },
  {
    name: 'Drag and Drop form creator',
    description: 'What has been worked on',
    extraContent: 'This is the extra content for Drag and Drop form creator.',
  },
  {
    name: 'Paypal checkout form',
    description: 'What has been worked on',
    extraContent: 'This is the extra content for Paypal checkout form.',
  },
  {
    name: 'Paypal checkout form',
    description: 'What has been worked on',
    extraContent: 'This is the extra content for Paypal checkout form.',
  },
];

export default function Features() {
  const [openStates, setOpenStates] = useState(Array(features.length).fill(false));

  const toggleDropdown = (index) => {
    // Toggle the specific index while keeping other states intact
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-[#4F46E5] mb-12">Our Work</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 h-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between"
            style={{ alignSelf: 'start', minHeight: '200px' }} // Set min-height and align-self
          >
            <div>
              <div className="flex items-start space-x-4">
                <Wallet className="h-10 w-10 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="flex items-center text-sm text-blue-600 focus:outline-none"
                  onClick={() => toggleDropdown(index)}
                >
                  {feature.description} <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            {openStates[index] && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700 text-sm">{feature.extraContent}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
