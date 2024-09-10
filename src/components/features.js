import {
  BookUser,
  Cloud,
  Cog,
  FileText,
  MonitorSpeaker,
  Wrench,
} from "lucide-react";
import React from "react";

const features = [
  {
    name: "Comprehensive ERP Development for Non-Profits",
    description:
      "Tailored to fit your unique workflows, our custom project management software streamlines tasks, enhances collaboration, and boosts productivity, giving you full control over your projects from start to finish.",
    icon: Cloud,
  },
  {
    name: "Customer Relationship Management",
    description:
      "Develop a CRM system tailored specifically for non-profits, enabling you to efficiently manage relationships with donors, volunteers, and stakeholders.",
    icon: MonitorSpeaker,
  },
  {
    name: "Website Development",
    description:
      "Our Web Development service delivers tailored, high-performance websites designed to meet your unique business needs. From intuitive design to seamless functionality, we create engaging online experiences that drive results.",
    icon: Wrench,
  },
  {
    name: "Mobile Development",
    description:
      "Our Mobile Development service delivers high-performance, user-friendly apps for Android and iOS, tailored to your business needs",
    icon: FileText,
  },
  {
    name: "UI/UX Design",
    description:
      "Crafting intuitive and visually appealing interfaces that enhance user experience, ensuring seamless interaction and engagement across all digital platforms.",
    icon: BookUser,
  },
  {
    name: "Comprehensive Cloud Architecture ",
    description:
      "Streamline your cloud operations with our all-in-one service, including Cloud Cost Optimization, seamless Cloud Migration, and efficient Cloud Integration to maximize performance and minimize expenses.",
    icon: Cog,
  },
];

const Features = () => {
  return (
    <div className="relative bg-white py-4" id="features">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Services we provide
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Our comprehensive range of services is designed to support non-profits
          and international organizations in achieving their mission more
          efficiently
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                        <feature.icon
                          aria-hidden="true"
                          className="h-8 w-8 text-white"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
