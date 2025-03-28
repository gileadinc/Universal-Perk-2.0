"use client"
import {
  BarChart,
  ChevronDown,
  ChevronRight,
  Cloud,
  CloudDownload,
  Code,
  Coins,
  Computer,
  Computer as ComputerIcon,
  Database,
  HelpCircle,
  Network,
  Pencil,
  Server,
  Settings,
  Shield,
  Smartphone,
  User,
  UserCheck,
  Wallet,
  Globe as WholeWord,
  Rocket,
  Users,
  Clock,
  Bell,
  BarChart as ChartBar,
  Headset,
  HelpCircle as QuestionMarkCircle,
  Cog,
  ShieldCheck,
  Search,
  ClipboardCheck,
  Calendar,
  CalendarCheck,
  MessageSquare as ChatAlt2,
  TrendingUp
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    body: "Universal Perk has proudly partnered with renowned organizations to elevate their lead acquisition strategies and optimize sales funnels.",
    title: "Lead Generation & Sales AI",
    subtitle: "AI Chatbots & Voice Assistants",
    subheader:
      "At Universal Perk, we build intelligent AI-driven chatbots and voice assistants designed to proactively qualify leads, schedule follow-ups, and seamlessly book appointments. Our solutions integrate directly with your CRM, ensuring you never miss a high-value opportunity.",
    description:
      "Leverage ongoing technical and strategic support to enhance your sales pipeline. Our AI seamlessly identifies qualified prospects, accelerates lead-to-deal velocity, and empowers your sales team to focus on high-impact conversations.",
    icon: <Rocket className="h-10 w-10 text-blue-600" />,
    features: [
      {
        icon: <Users />,
        title: "Automated Lead Qualification",
        description:
          "Instantly engages potential clients, collects crucial info, and prioritizes high-intent leads without manual intervention."
      },
      {
        icon: <Clock />,
        title: "Efficient Follow-Up Scheduling",
        description:
          "Allows prospects to schedule callbacks or demos automatically, reducing response time and boosting conversion rates."
      },
      {
        icon: <ChartBar />,
        title: "Data-Driven Insights",
        description:
          "Generates performance analytics to help you refine lead criteria, tailor outreach, and optimize the overall sales funnel."
      }
    ],
    innovation: [
      {
        title: "SwiftTech Innovations",
        description:
          "Deployed AI-driven voice assistants to screen inbound calls and direct potential high-value leads to the top-performing sales reps."
      },
      {
        title: "Beacon Sales Group",
        description:
          "Integrated real-time chatbot solution, reducing manual lead qualification by 60% and boosting appointment bookings by 40%."
      },
      {
        title: "Global Outreach Partners",
        description:
          "Developed advanced machine learning filters that improved lead accuracy, significantly enhancing sales conversion rates."
      }
    ]
  },
  {
    body: "Universal Perk has forged successful relationships with global companies seeking to elevate their customer experience through AI-driven interactions.",
    title: "Customer Support AI",
    subtitle: "Intelligent Chat & Voice Agents",
    subheader:
      "Our robust customer support AI solutions deliver rapid, accurate responses, solve common inquiries, and troubleshoot complex issues—ultimately reducing workloads on human agents and elevating overall satisfaction.",
    description:
      "Benefit from an AI-driven customer support system that adapts to user behavior, logs detailed interaction records, and seamlessly integrates with existing CRMs or ticketing tools.",
    icon: <Headset className="h-10 w-10 text-blue-600" />,
    features: [
      {
        icon: <QuestionMarkCircle />,
        title: "Automatic FAQ Resolution",
        description:
          "24/7 response to common inquiries, resolving up to 80% of routine questions without any human intervention."
      },
      {
        icon: <Cog />,
        title: "Multi-Channel Troubleshooting",
        description:
          "Handles complex troubleshooting steps on voice calls or chat, guiding users through detailed diagnostic flows."
      },
      {
        icon: <ShieldCheck />,
        title: "Secure & Compliant",
        description:
          "Designed with stringent data protection protocols, ensuring all user interactions are secure and privacy-compliant."
      }
    ],
    innovation: [
      {
        title: "ServiceX Ventures",
        description:
          "Implemented voice AI for round-the-clock customer service, cutting ticket resolution time by 35%."
      },
      {
        title: "Healthcare Hub Inc.",
        description:
          "Developed HIPAA-compliant chatbot solutions, improving patient engagement and administrative efficiency."
      },
      {
        title: "Retail Connect Solutions",
        description:
          "Integrated AI agents with warehouse and logistics, accelerating issue resolution for shipping and returns."
      }
    ]
  },
  {
    body: "Universal Perk has collaborated with leading staffing firms to revolutionize recruiting workflows through cutting-edge AI automation.",
    title: "AI Recruiting Assistant",
    subtitle: "Candidate Sourcing & Screening",
    subheader:
      "Our recruiting AI transforms candidate sourcing, screening, and scheduling into a seamless process. By automating repetitive tasks, we empower recruiters to focus on building meaningful connections with top talent.",
    description:
      "Harness real-time insights on candidate suitability, leverage AI for automated follow-ups, and expedite the hiring process with a data-driven approach—ultimately finding the best candidate fit faster.",
    icon: <UserCheck className="h-10 w-10 text-blue-600" />,
    features: [
      {
        icon: <Search />,
        title: "Automated Candidate Sourcing",
        description:
          "Proactively identifies and targets qualified talent across multiple platforms, saving significant time and resources."
      },
      {
        icon: <ClipboardCheck />,
        title: "Smart Screening & Ranking",
        description:
          "Analyzes resumes and conversational cues to rank candidates, prioritizing the most suitable prospects for recruiters."
      },
      {
        icon: <Calendar />,
        title: "Streamlined Interview Scheduling",
        description:
          "Eliminates back-and-forth emails by automatically setting interviews around recruiters’ and candidates’ availability."
      }
    ],
    innovation: [
      {
        title: "StaffingPro Elite",
        description:
          "Reduced time-to-hire by 50% with AI-driven shortlisting and automated follow-up workflows."
      },
      {
        title: "TalentBridge USA",
        description:
          "Developed an AI screening system that accurately predicted candidate culture fit, boosting retention rates."
      },
      {
        title: "Global Hire Solutions",
        description:
          "Integrated advanced scheduling algorithms into the CRM, cutting down the interview coordination process by 70%."
      }
    ]
  },
  {
    body: "Universal Perk has worked with top service-based enterprises, delivering AI virtual assistants that handle critical scheduling and client interactions.",
    title: "AI Virtual Assistant",
    subtitle: "Appointment Scheduling & Reminders",
    subheader:
      "We design AI virtual assistants that serve as your dependable digital concierge—managing calendars, sending reminders, and conducting timely follow-ups so you can focus on high-level tasks and client satisfaction.",
    description:
      "From healthcare clinics to legal offices, our AI virtual assistants reduce administrative burdens, manage appointments in real time, and even collect post-service feedback to continuously refine client engagement.",
    icon: <CalendarCheck className="h-10 w-10 text-blue-600" />,
    features: [
      {
        icon: <Bell />,
        title: "Automated Reminders",
        description:
          "Sends SMS or email alerts for upcoming appointments, ensuring minimal no-shows and improved punctuality."
      },
      {
        icon: <ChatAlt2 />,
        title: "24/7 Availability",
        description:
          "Handles scheduling requests and changes at any hour, providing constant accessibility for your clientele."
      },
      {
        icon: <TrendingUp />,
        title: "Performance Analytics",
        description:
          "Offers actionable insights into scheduling patterns and user engagement, helping optimize resource allocation."
      }
    ],
    innovation: [
      {
        title: "Zen Health Clinic",
        description:
          "Deployed an AI scheduler that reduced missed appointments by 40% and expedited patient check-ins."
      },
      {
        title: "Smith & Grant Law Offices",
        description:
          "Implemented a real-time calendar sync, cutting paralegal workload and speeding up client consultation bookings."
      },
      {
        title: "Elite Coaching Group",
        description:
          "Created an AI assistant to manage session scheduling and client reminders, significantly boosting retention rates."
      }
    ]
  },
  {
    body: "Universal Perk has successfully collaborated with various esteemed clients",
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    subheader:
      "At Universal Perk, we specialize in creating bespoke mobile apps that cater to the specific needs of your business, whether you’re in transportation, healthcare, retail, or any other sector. Our apps are designed to be scalable, secure, and feature-rich, ensuring your business stands out in a competitive digital landscape.",
    description:
      "Benefit from ongoing technical support with mobile app development. CRM system ensures efficient and effective user interactions.",
    icon: <Smartphone className="h-10 w-10 text-blue-600" />,

    features: [
      {
        icon: <Settings />,
        title: "Real-Time Tracking",
        description:
          "Enable users to track orders, vehicles, or assets in real time with precision using Google Maps integration.",
      },
      {
        icon: <Wallet />,
        title: "Secure Payments",
        description:
          "We ensure your app is equipped with safe and reliable payment gateways to facilitate transactions without any risk",
      },
      {
        icon: <Database />,
        title: "Scalable Solution",
        description:
          "Whether you’re a startup or a large enterprise, our mobile apps are built to scale as your business grows.",
      },
    ],

    innovation: [
      {
        title: "Tech innovation Inc.",
        description:
          "Developed a custom CRM system that improved client management and increased sales",
      },
      {
        title: "Secure Payments",
        description:
          "Delivered robust IT infrastructure support, ensuring seamless and secure patient data management",
      },
      {
        title: "Green Energy Solutions",
        description:
          "Implemented advanced cybersecurity measures, safeguarding sensitive data against cyber threats",
      },
    ],
  },
  {
    body: "Our proven expertise in IT consulting and software development has enabled our clients to achieve significant operational improvements and strategic advancements.",
    title: "Web App Development",
    subtitle: "Full Stack Web Applications",
    subheader:
      "Universal Perk develops dynamic web applications that empower businesses to operate more efficiently and effectively. Whether you're looking to build a booking platform, CRM-integrated solution, or enterprise management system, we’ve got you covered.",
    description:
      "Benefit from ongoing technical support for web applications. CRM ensures efficient and effective user interactions.",
    icon: <Code className="h-10 w-10 text-blue-600" />,
    features: [
      {
        icon: <BarChart />,
        title: "Discovery and planning", 
        description: "We work closely with you to understand your requirements and design a solution that aligns with your goals"
      },
      {
        icon: <Network />,
        title: "API Integrations", 
        description: "Seamlessly connect your web app with third-party services like Google Maps, CRMs, and payment systems"
      }, 
      {
        icon: <WholeWord />,
        title: "Real-World Use Cases",
        description : "From e-commerce platforms to ERP systems, we create web apps that are flexible and scalable."
      }
    ]
  },
  // {
  //   title: "Custom Software Solutions",
  //   subtitle: "Tailored Solutions",
  //   subheader:
  //     "Universal Perk offers robust CRM development and integration services, designed to streamline your business operations, improve customer service, and drive sales growth. Our solutions are tailored to your specific needs, offering deep customization and seamless integration with your existing systems.",
  //   description:
  //     "Benefit from ongoing technical support for custom software. CRM ensures efficient and effective operations.",
  //   icon: <Server className="h-10 w-10 text-blue-600" />,
  //   features: [
  //     {
  //       icon: <User />,
  //       title: "Customer Data Management",
  //       description:
  //         "We work closely with you to understand your requirements and design a solution that aligns with your goals",
  //     },
  //     {
  //       icon: <Coins /> ,
  //       title: "Sales & Marketing Automation",
  //       description:
  //         "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
  //     },
  //     {
  //       icon: <BarChart />, 
  //       title: "Analytics & Reporting",
  //       description:
  //         "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
  //     },
  //     {
  //       icon: <HelpCircle />,
  //       title: "Customer Support",
  //       description:
  //         "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
  //     },
  //   ],
  // },
  {
    title: "Cloud Solutions and Managed IT Services",
    subtitle: "Cloud Integration",
    subheader:
      "In today’s digital-first world, staying ahead means having secure, scalable IT infrastructure. Universal Perk offers cloud and managed IT services that allow your business to grow without worrying about downtime, data loss, or security breaches.",
    description:
      "Benefit from ongoing technical support for cloud services. CRM ensures efficient and effective infrastructure management.",
    icon: <Cloud className="h-10 w-10 text-blue-600" />,
    features: [
      {
        icon: <Database />,
        title: "Data Storage & Backup",
        description:
          "Ensure your data is stored securely in the cloud, with regular backups to prevent loss.",
      },
      {
        icon: <CloudDownload />,
        title: "Cloud Hosting",
        description:
          "Get fast, reliable hosting that scales with your business, ensuring seamless performance.",
      },
      {
        icon: <Computer />,
        title: "Managed IT",
        description:
          "We offer end-to-end IT management, including security updates, troubleshooting, and system optimization.",
      },
    ],
  },
  // {
  //   title: "UI/UX Design",
  //   subtitle: "User Experience",
  //   sunheader:
  //     "At Universal Perk, we believe that great design isn’t just about making things look good—it’s about creating experiences that resonate with users and achieve business goals. Our expert UI/UX design services focus on delivering intuitive, user-centered designs that drive engagement, retention, and satisfaction across mobile apps, web apps, and digital platforms.",
  //   description:
  //     "Benefit from ongoing technical support with UI/UX design. CRM ensures efficient and effective user interfaces.",
  //   icon: <Pencil className="h-10 w-10 text-blue-600" />,
  //   features: [
  //     {
  //       icon: <Database />,
  //       title: "Data Storage & Backup",
  //       description:
  //         "We work closely with you to understand your requirements and design a solution that aligns with your goals",
  //     },
  //     {
  //       icon: <CloudDownload />,
  //       title: "Cloud Hosting",
  //       description:
  //         "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
  //     },
  //     {
  //       icon: <ComputerIcon />,
  //       title: "Managed IT Support",
  //       description:
  //         "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
  //     },
  //   ]
  // },
  // {
  //   title: "Cybersecurity",
  //   subtitle: "Security Solutions",
  //   subheader:
  //     "At Universal Perk, we know that cybersecurity is more than just an IT concern—it’s a business priority. We offer comprehensive cybersecurity services to ensure that your sensitive information stays protected from potential threats, allowing your operations to run smoothly.",
  //   description:
  //     "Benefit from ongoing technical support with cybersecurity. CRM ensures efficient and effective protection.",
  //   icon: <Shield className="h-10 w-10 text-blue-600" />,
  //   features: [
  //     {
  //       icon: <Database />,
  //       title: "Data Storage & Backup",
  //       description:
  //         "We work closely with you to understand your requirements and design a solution that aligns with your goals",
  //     },
  //     {
  //       icon: <CloudDownload />,
  //       title: "Cloud Hosting",
  //       description:
  //         "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
  //     },
  //     {
  //       icon: <ComputerIcon />,
  //       title: "Managed IT Support",
  //       description:
  //         "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
  //     },
  //   ],
  // },
  // {
  //   title: "Customer Relationship Management",
  //   subtitle: "CRM Solutions",
  //   subheader:
  //     "Universal Perk offers robust CRM development and integration services, designed to streamline your business operations, improve customer service, and drive sales growth. Our solutions are tailored to your specific needs, offering deep customization and seamless integration with your existing systems.",
  //   description:
  //     "Benefit from ongoing technical support with CRM systems. Ensures efficient and effective user interactions.",
  //   icon: <UserCheck className="h-10 w-10 text-blue-600" />,
  //   features: [
  //     {
  //       title: "Data Storage & Backup",
  //       description:
  //         "We work closely with you to understand your requirements and design a solution that aligns with your goals",
  //     },
  //     {
  //       title: "Cloud Hosting",
  //       description:
  //         "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
  //     },
  //     {
  //       title: "Managed IT Support",
  //       description:
  //         "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
  //     },
  //   ],
  // },
];

export default function Features() {
  const router = useRouter();

  const handleClick = (service) => {
    localStorage.setItem("services", JSON.stringify(service));
    router.push("/details");
  };
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
            <button
              onClick={() => handleClick(service)}
              className="mt-4 text-blue-600 text-sm flex items-center focus:outline-none"
            >
              Show More <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
