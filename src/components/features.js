import {
  ChevronDown,
  Cloud,
  Code,
  Pencil,
  Server,
  Shield,
  Smartphone,
  UserCheck,
} from "lucide-react"; // Example icons

const services = [
  {
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    description:
      "Benefit from ongoing technical support with mobile app development. CRM system ensures efficient and effective user interactions.",
    icon: <Smartphone className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Web App Development",
    subtitle: "Web-based Applications",
    description:
      "Benefit from ongoing technical support for web applications. CRM ensures efficient and effective user interactions.",
    icon: <Code className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Custom Software Solutions",
    subtitle: "Tailored Solutions",
    description:
      "Benefit from ongoing technical support for custom software. CRM ensures efficient and effective operations.",
    icon: <Server className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Cloud Solutions and Managed IT Services",
    subtitle: "Cloud Integration",
    description:
      "Benefit from ongoing technical support for cloud services. CRM ensures efficient and effective infrastructure management.",
    icon: <Cloud className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "UI/UX Design",
    subtitle: "User Experience",
    description:
      "Benefit from ongoing technical support with UI/UX design. CRM ensures efficient and effective user interfaces.",
    icon: <Pencil className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Cybersecurity",
    subtitle: "Security Solutions",
    description:
      "Benefit from ongoing technical support with cybersecurity. CRM ensures efficient and effective protection.",
    icon: <Shield className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Customer Relationship Management",
    subtitle: "CRM Solutions",
    description:
      "Benefit from ongoing technical support with CRM systems. Ensures efficient and effective user interactions.",
    icon: <UserCheck className="h-10 w-10 text-blue-600" />,
  },
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-[#4F46E5] mb-12">
        Our Capabilities
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-start space-y-4">
              {service.icon}
              <div className="w-full">
                <h3 className="text-lg font-semibold text-left">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">{service.subtitle}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{service.description}</p>
            <button className="mt-4 text-blue-600 text-sm flex items-center focus:outline-none">
              Show More <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
