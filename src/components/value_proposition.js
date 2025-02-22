
import React from 'react';
import { DollarSign, Clock, Globe } from 'lucide-react';

const ValueProposition = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-4">
            High Customer Support Costs & Scalability Issues
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Many businesses, especially in enterprise and SaaS sectors, face mounting customer support costs and critical scalability challenges.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="text-red-600 mr-3">📌</span> Business Challenge
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Traditional customer support operations are becoming increasingly unsustainable. Companies face rising operational costs, staffing challenges, and diminishing service quality during peak periods. This results in extended response times, customer dissatisfaction, and lost revenue opportunities.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="text-green-600 mr-3">✓</span> Strategic Solution
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <DollarSign className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Cut Support Costs by 40%+</h4>
                  <p className="text-gray-600">AI handles 80% of routine queries instantly, reducing your need for large teams</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <Clock className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Enterprise-Grade Service</h4>
                  <p className="text-gray-600">AI chatbots & voice agents deliver consistent support around the clock</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <Globe className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Omnichannel Integration</h4>
                  <p className="text-gray-600">Seamless support across all digital channels without additional staffing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white shadow-xl">
          <div className="flex items-center gap-6">
            <span className="text-4xl">🚀</span>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Proven Results</h3>
              <p className="text-blue-50 text-lg">
                Enterprise clients achieve 40% reduction in support costs while improving response times and maintaining high customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-4">
              Lead Qualification & Sales Pipeline Optimization
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Maximize revenue potential by transforming your lead qualification process and optimizing sales conversions.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="text-red-600 mr-3">📌</span> Business Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sales teams are overwhelmed with unqualified leads, resulting in delayed follow-ups and missed opportunities. The lack of immediate engagement leads to decreased conversion rates and lost revenue potential.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="text-green-600 mr-3">✓</span> Strategic Solution
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Intelligent Lead Qualification</h4>
                  <p className="text-gray-600">AI chatbots qualify leads in real-time, collecting key information and intent signals</p>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Automated First Response</h4>
                  <p className="text-gray-600">AI voice agents initiate immediate contact, verify interest, and schedule sales meetings</p>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Enterprise CRM Integration</h4>
                  <p className="text-gray-600">Seamless synchronization with major CRM platforms ensures proper lead routing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white shadow-xl">
            <div className="flex items-center gap-6">
              <span className="text-4xl">🚀</span>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Proven Results</h3>
                <p className="text-blue-50 text-lg">
                  Businesses using our AI solutions see 25-40% higher lead conversion rates and significantly reduced sales cycles.
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
