
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We analyze your business needs, customer pain points, and identify opportunities where AI can create the most impact.",
      icon: "🔍",
      image: "/form-designer.png"
    },
    {
      title: "Configuration & Success Metrics",
      description: "We establish clear KPIs, configure integration points, and define the metrics that will measure success.",
      icon: "📊",
      image: "/report.png"
    },
    {
      title: "AI Development",
      description: "Our team develops custom RAG systems, builds knowledge bases, and engineers prompts for optimal AI performance.",
      icon: "🤖",
      image: "/lambda.png"
    },
    {
      title: "Deployment",
      description: "We deploy your AI agent across all channels - web, mobile, and voice - with seamless integration into your existing systems.",
      icon: "🚀",
      image: "/phone.png"
    },
    {
      title: "QA & Ongoing Support",
      description: "Continuous testing, refinement, and enhancement of your AI agent to ensure peak performance.",
      icon: "✨",
      image: "/client.png"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 sm:text-5xl">
            Our AI Agent Development Process
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A systematic approach to building custom AI agents that deliver real business value
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.title} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="rounded-2xl bg-white p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{step.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
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
          <button className="rounded-[10rem] bg-blue-600 px-20 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 hover:scale-105 transform transition-all duration-300 active:scale-95">
            Start Building Your Custom AI Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
