"use client";

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { UserPlusIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/16/solid";
import { ArchiveBoxIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  BarChart,
  Cloud,
  CloudDownload,
  Code,
  Coins,
  Computer,
  ComputerIcon,
  Database,
  HelpCircle,
  MenuIcon,
  Network,
  Pencil,
  Server,
  Settings,
  Shield,
  Smartphone,
  User,
  UserCheck,
  Wallet,
  WholeWord,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const navigation = [
  { name: "Home", href: "home" },

  { name: "Portfolio", href: "projects" },
  { name: "Contact us", href: "contact" },
  { name: "About", link: "about" },
];

const services = [
  {
    body: "Universal Perk has successfully collaborated with various esteemed clients",
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    subheader:
      "At Universal Perk, we specialize in creating bespoke mobile apps that cater to the specific needs of your business, whether you’re in transportation, healthcare, retail, or any other sector. Our apps are designed to be scalable, secure, and feature-rich, ensuring your business stands out in a competitive digital landscape.",
    description:
      "Benefit from ongoing technical support with mobile app development. CRM system ensures efficient and effective user interactions.",
    icon: (
      <Smartphone className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    ),

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
    subtitle: "Web-based Applications",
    subheader:
      "Universal Perk develops dynamic web applications that empower businesses to operate more efficiently and effectively. Whether you're looking to build a booking platform, CRM-integrated solution, or enterprise management system, we’ve got you covered.",
    description:
      "Benefit from ongoing technical support for web applications. CRM ensures efficient and effective user interactions.",
    icon: (
      <Code className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    ),
    features: [
      {
        icon: <BarChart />,
        title: "Discovery and planning",
        description:
          "We work closely with you to understand your requirements and design a solution that aligns with your goals",
      },
      {
        icon: <Network />,
        title: "API Integrations",
        description:
          "Seamlessly connect your web app with third-party services like Google Maps, CRMs, and payment systems",
      },
      {
        icon: <WholeWord />,
        title: "Real-World Use Cases",
        description:
          "From e-commerce platforms to ERP systems, we create web apps that are flexible and scalable.",
      },
    ],
  },
  {
    title: "Custom Software Solutions",
    subtitle: "Tailored Solutions",
    subheader:
      "Universal Perk offers robust CRM development and integration services, designed to streamline your business operations, improve customer service, and drive sales growth. Our solutions are tailored to your specific needs, offering deep customization and seamless integration with your existing systems.",
    description:
      "Benefit from ongoing technical support for custom software. CRM ensures efficient and effective operations.",
    icon: (
      <Server className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    ),
    features: [
      {
        icon: <User />,
        title: "Customer Data Management",
        description:
          "We work closely with you to understand your requirements and design a solution that aligns with your goals",
      },
      {
        icon: <Coins />,
        title: "Sales & Marketing Automation",
        description:
          "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
      },
      {
        icon: <BarChart />,
        title: "Analytics & Reporting",
        description:
          "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
      },
      {
        icon: <HelpCircle />,
        title: "Customer Support",
        description:
          "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
      },
    ],
  },
  {
    title: "Cloud Solutions and Managed IT Services",
    subtitle: "Cloud Integration",
    subheader:
      "In today’s digital-first world, staying ahead means having secure, scalable IT infrastructure. Universal Perk offers cloud and managed IT services that allow your business to grow without worrying about downtime, data loss, or security breaches.",
    description:
      "Benefit from ongoing technical support for cloud services. CRM ensures efficient and effective infrastructure management.",
    icon: (
      <Cloud className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    ),
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
  {
    title: "UI/UX Design",
    subtitle: "User Experience",
    sunheader:
      "At Universal Perk, we believe that great design isn’t just about making things look good—it’s about creating experiences that resonate with users and achieve business goals. Our expert UI/UX design services focus on delivering intuitive, user-centered designs that drive engagement, retention, and satisfaction across mobile apps, web apps, and digital platforms.",
    description:
      "Benefit from ongoing technical support with UI/UX design. CRM ensures efficient and effective user interfaces.",
    icon: (
      <Pencil className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    ),
    features: [
      {
        icon: <Database />,
        title: "Data Storage & Backup",
        description:
          "We work closely with you to understand your requirements and design a solution that aligns with your goals",
      },
      {
        icon: <CloudDownload />,
        title: "Cloud Hosting",
        description:
          "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
      },
      {
        icon: <ComputerIcon />,
        title: "Managed IT Support",
        description:
          "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
      },
    ],
  },
  {
    title: "Cybersecurity",
    subtitle: "Security Solutions",
    subheader:
      "At Universal Perk, we know that cybersecurity is more than just an IT concern—it’s a business priority. We offer comprehensive cybersecurity services to ensure that your sensitive information stays protected from potential threats, allowing your operations to run smoothly.",
    description:
      "Benefit from ongoing technical support with cybersecurity. CRM ensures efficient and effective protection.",
    icon: (
      <Shield className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    ),
    features: [
      {
        icon: <Database />,
        title: "Data Storage & Backup",
        description:
          "We work closely with you to understand your requirements and design a solution that aligns with your goals",
      },
      {
        icon: <CloudDownload />,
        title: "Cloud Hosting",
        description:
          "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
      },
      {
        icon: <ComputerIcon />,
        title: "Managed IT Support",
        description:
          "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
      },
    ],
  },
  {
    title: "Customer Relationship Management",
    subtitle: "CRM Solutions",
    subheader:
      "Universal Perk offers robust CRM development and integration services, designed to streamline your business operations, improve customer service, and drive sales growth. Our solutions are tailored to your specific needs, offering deep customization and seamless integration with your existing systems.",
    description:
      "Benefit from ongoing technical support with CRM systems. Ensures efficient and effective user interactions.",
    icon: (
      <UserCheck className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    ),
    features: [
      {
        title: "Data Storage & Backup",
        description:
          "We work closely with you to understand your requirements and design a solution that aligns with your goals",
      },
      {
        title: "Cloud Hosting",
        description:
          "Gain real-time analytics and reporting to make data-informed decisions, improving overall business performance.",
      },
      {
        title: "Managed IT Support",
        description:
          "Integrate tools like live chat and ticketing systems to enhance your customer service response times",
      },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleClick = (service) => {
    localStorage.setItem("services", JSON.stringify(service));
    router.push("/details");
  };

  const handleNavigation = (link) => {
    console.log(link, "link");
    router.push(`/${link}`);
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        {/* <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Universal Perk</span>
            <img
              alt=""
              src="/logo.svg"
              color="#4F46E5"
              className="h-10 w-auto text-[#4F46E5]"

              src="/logo.svg"
              color="#4F46E5"
              className="h-10 w-auto text-[#4F46E5]"

            />
          </a>
        </div> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex justify-center w-[90%] lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={""}
              onClick={
                !item.link
                  ? (e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                  : (e) => {
                      e.preventDefault();
                      handleNavigation(item.link);
                    }
              }
              className={`text-sm font-semibold leading-6 `}
            >
              {item.name}
            </a>
          ))}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center items-start gap-x-1.5 rounded-md bg-white px-3 text-sm font-semibold text-gray-900">
                Services
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                {services.map((service) => (
                  <MenuItem key={service.title}>
                    <a
                      onClick={() => handleClick(service)}
                      className="group flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      {service.icon}
                      {service.title}
                    </a>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={
                      !item.link
                        ? (e) => {
                            e.preventDefault();
                            scrollToSection(item.href);
                          }
                        : (e) => handleNavigation(e, item.link)
                    }
                  >
                    {item.name}
                  </a>
                ))}

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex w-full justify-center items-start rounded-md bg-white text-sm font-semibold text-gray-900">
                      Services
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      {services.map((service) => (
                        <MenuItem key={service.title}>
                          <a
                            onClick={() => handleClick(service)}
                            className="group flex cursor-pointer items-center text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            {service.icon}
                            {service.title}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
