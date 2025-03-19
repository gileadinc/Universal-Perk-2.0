import React from 'react';
import Image from "next/image";

const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery & Project Planning",
      description: "Our technical team conducts in-depth analysis of your existing infrastructure, data sources, and integration requirements to architect an optimal AI solution.",
      icon: "🔍",
      image: "/discovery.jpg"
    },
    {
      title: "Define your KPIs & Success Metrics",
      description: "We establish integration endpoints, define API specifications, configure cloud infrastructure, and implement monitoring systems for performance tracking.",
      icon: "⚙️",
      image: "/kpi.png"
    },
    {
      title: "AI Agent Development",
      description: "This is the backbone of the AI Agent. Our engineers develop custom Retrieval Augmented Generation systems, implement vector databases, and fine-tune Large Language Models for your specific use case.",
      icon: "🧠",
      image: "/chatbot-illustration-min.png"
    },
    {
      title: "Enterprise Deployment",
      description: "We implement secure CI/CD pipelines, configure load balancers, and deploy your AI agent across multiple environments with automated failover.",
      icon: "🚀",
      image: '/deploy.png'
    },
    {
      title: "Performance Optimization & Maintenance",
      description: "Continuous monitoring, performance tuning, and proactive maintenance to ensure optimal AI agent performance and reliability.",
      icon: "📈",
      image: "/performance-min.jpg"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-0">
        <img 
          src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2000&auto=format&fit=crop" 
          alt="AI Cloud Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 sm:text-5xl">
            Enterprise AI Agent Development Pipeline
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our systematic approach to building production-ready AI agents with enterprise-grade reliability and performance
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[50%] w-px bg-blue-200"></div>
          {steps.map((step, index) => (
            <div key={step.title} className="relative mb-24 last:mb-0">
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center z-10">
                  <span className="w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center z-10">{index + 1}</span>
                </div>

                <div className="flex-1">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
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