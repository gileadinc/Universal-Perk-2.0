
const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery & Architecture Planning",
      description: "Our technical team conducts in-depth analysis of your existing infrastructure, data sources, and integration requirements to architect an optimal AI solution.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1572177215152-32f247303126?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Technical Configuration & KPI Definition",
      description: "We establish integration endpoints, define API specifications, configure cloud infrastructure, and implement monitoring systems for performance tracking.",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "RAG System Development",
      description: "Our engineers develop custom Retrieval Augmented Generation systems, implement vector databases, and fine-tune Large Language Models for your specific use case.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Enterprise Deployment",
      description: "We implement secure CI/CD pipelines, configure load balancers, and deploy your AI agent across multiple environments with automated failover.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Performance Optimization & Maintenance",
      description: "Continuous monitoring of response latency, token usage, and accuracy metrics. Regular model retraining and knowledge base updates ensure peak performance.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
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

        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex items-center mb-16">
              <div className="flex-1 flex items-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl text-white z-10">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 flex-grow mx-4"></div>
                )}
              </div>
              <div className="absolute top-20 left-0 w-full">
                <div className="bg-white rounded-xl shadow-xl p-6 mx-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <button className="rounded-[10rem] bg-gradient-to-r from-blue-600 to-blue-700 px-20 py-4 text-lg font-semibold text-white shadow-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 transform transition-all duration-300 active:scale-95">
            Start Your Enterprise AI Integration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
