
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery & Architecture Planning",
      description: "Our technical team conducts in-depth analysis of your existing infrastructure, data sources, and integration requirements to architect an optimal AI solution.",
      icon: "🔍",
      image: "/form-designer.png"
    },
    {
      title: "Technical Configuration & KPI Definition",
      description: "We establish integration endpoints, define API specifications, configure cloud infrastructure, and implement monitoring systems for performance tracking.",
      icon: "⚙️",
      image: "/PM2.png"
    },
    {
      title: "RAG System Development",
      description: "Our engineers develop custom Retrieval Augmented Generation systems, implement vector databases, and fine-tune Large Language Models for your specific use case.",
      icon: "🧠",
      image: "/lambda.png"
    },
    {
      title: "Enterprise Deployment",
      description: "We implement secure CI/CD pipelines, configure load balancers, and deploy your AI agent across multiple environments with automated failover.",
      icon: "🚀",
      image: "/aws.svg"
    },
    {
      title: "Performance Optimization & Maintenance",
      description: "Continuous monitoring of response latency, token usage, and accuracy metrics. Regular model retraining and knowledge base updates ensure peak performance.",
      icon: "📈",
      image: "/PM.png"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 sm:text-5xl">
            Enterprise AI Agent Development Pipeline
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our systematic approach to building production-ready AI agents with enterprise-grade reliability and performance
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.title} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="rounded-2xl bg-white p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{step.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-[300px] object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="rounded-[10rem] bg-gradient-to-r from-blue-600 to-blue-700 px-20 py-4 text-lg font-semibold text-white shadow-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 transform transition-all duration-300 active:scale-95">
            Start Your Enterprise AI Integration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
