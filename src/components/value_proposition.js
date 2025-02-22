
import React from 'react';
import { DollarSign, Clock, MessageSquare } from 'lucide-react';

const ValueProposition = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 sm:text-5xl mb-4">
            High Customer Support Costs & Scalability Issues
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Many businesses struggle with mounting customer support costs and scalability challenges
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
              <span className="text-3xl mr-2">📌</span> The Pain Point
            </h3>
            <ul className="space-y-4 text-gray-600">
              {['High costs of hiring and training human agents',
                'Maintaining large teams for 24/7 support coverage',
                'Managing unpredictable seasonal spikes'].map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-blue-50 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center">
              <span className="text-3xl mr-2">✅</span> The AI Solution
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <DollarSign className="h-8 w-8 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Cost Reduction</h4>
                  <p className="text-gray-600">AI chatbots handle 80% of routine queries without human intervention</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <Clock className="h-8 w-8 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">24/7 Availability</h4>
                  <p className="text-gray-600">Instant responses without overtime costs or wait times</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <MessageSquare className="h-8 w-8 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Omnichannel Support</h4>
                  <p className="text-gray-600">Seamless support across WhatsApp, Instagram, Facebook, and websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🚀</span>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Real Impact</h3>
              <p className="text-blue-50 text-lg">
                SaaS companies using AI chatbots reduce support costs by up to 30-40% while maintaining fast response times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
