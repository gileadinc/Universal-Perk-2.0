import React from "react";

const KeyBenefits = () => {
  const benefits = [
    {
      title: "Scalability",
      description:
        "We facilitate seamless scaling, implementing tailored security protocols and performance monitoring.",
      icon: "🌐", // Replace with your actual icon or SVG
    },
    {
      title: "Security",
      description:
        "Crafts every piece of infrastructure to your business’s growth, while it scales.",
      icon: "🔒", // Replace with your actual icon or SVG
    },
  ];

  return (
    <section className="bg-[#6366F1]  w-full py-16 px-8 mt-10">
      <div className="container">
        <div className="grid lg:grid-cols-4">
          <h2 className="text-3xl font-bold text-white mb-10">Key Benefits</h2>
          <div className="grid md:grid-cols-2 col-span-3 md:gap-x-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-start rounded-lg text-white"
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>

                <p className="text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
