
import React from 'react';
import { DollarSign, Clock, MessageSquare } from 'lucide-react';

const ValueProposition = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            High Customer Support Costs & Scalability Issues
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Many businesses struggle with mounting customer support costs and scalability challenges
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">📌 The Pain Point</h3>
            <ul className="space-y-4 text-gray-600">
              <li>• High costs of hiring and training human agents</li>
              <li>• Maintaining large teams for 24/7 support coverage</li>
              <li>• Managing unpredictable seasonal spikes</li>
            </ul>
          </div>

          <div className="rounded-xl bg-blue-50 p-8">
            <h3 className="text-xl font-semibold text-green-600 mb-4">✅ The AI Solution</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <DollarSign className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Cost Reduction</h4>
                  <p className="text-gray-600">AI chatbots handle 80% of routine queries without human intervention</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">24/7 Availability</h4>
                  <p className="text-gray-600">Instant responses without overtime costs or wait times</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Omnichannel Support</h4>
                  <p className="text-gray-600">Seamless support across WhatsApp, Instagram, Facebook, and websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-blue-600 p-8 text-white">
          <h3 className="text-xl font-semibold mb-2">🚀 Real Impact</h3>
          <p>
            SaaS companies using AI chatbots reduce support costs by up to 30-40% while maintaining fast response times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
