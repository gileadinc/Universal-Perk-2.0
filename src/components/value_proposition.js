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
              <span className="text-3xl mr-2">📌</span> The Problem
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
Customer support is eating your budget alive. You’re constantly hiring, training, and managing teams just to keep up—and still, customers sit in long queues. During peak seasons (Black Friday, tax season, product launches), your support system crashes, customers get frustrated, and you lose revenue.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center">
              <span className="text-3xl mr-2">✅</span> The AI Solution
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <DollarSign className="h-8 w-8 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Cut Support Costs by 40%+</h4>
                  <p className="text-gray-600">AI handles 80% of routine queries instantly, reducing your need for large teams</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <Clock className="h-8 w-8 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">24/7 Service Without Overtime Costs</h4>
                  <p className="text-gray-600">AI chatbots & voice agents work around the clock—no breaks, no sick days</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <MessageSquare className="h-8 w-8 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Omnichannel Support, No Extra Staffing</h4>
                  <p className="text-gray-600">AI seamlessly responds on WhatsApp, Instagram, Messenger, and your website</p>
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
                A SaaS company cut support costs by 40% while improving response times—without hiring a single extra agent.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 sm:text-5xl mb-4">
              Slow Lead Qualification & Sales Funnel Drop-Offs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Your sales team is drowning in unqualified leads. Potential customers slip through the cracks because responses are too slow.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
                <span className="text-3xl mr-2">📌</span> The Problem
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Visitors land on your website, but no one engages them fast enough—so they bounce and buy from competitors.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center">
                <span className="text-3xl mr-2">✅</span> The AI Solution
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-lg">🔹</span>
                  <p className="text-gray-600">Instant Lead Engagement – AI chatbots qualify leads in real-time, collecting name, intent, and contact details.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-lg">🔹</span>
                  <p className="text-gray-600">AI Voice Agents Make the First Call for You – AI follows up immediately, verifying interest and scheduling sales calls.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-lg">🔹</span>
                  <p className="text-gray-600">Seamless CRM Integration – AI auto-syncs with HubSpot, Salesforce, or Zoho, ensuring every lead gets the right follow-up.</p>
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
                  Businesses using AI chatbots boost lead conversion rates by 25-40%, turning website visitors into paying customers faster. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;