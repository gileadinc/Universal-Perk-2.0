"use client";
import { useState } from "react";
import { Wallet, ChevronDown } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Paypal",
    description: "What has been worked on",
    logo: "/paypal-logo.png",
    extraContent:
      "We led a successful migration of REST API services to GraphQL, resulting in a 300% improvement in site performance. This transition enabled more efficient data fetching and reduced server load. In parallel, we undertook a comprehensive migration of legacy code, ensuring modern architecture compatibility, enhanced maintainability, and streamlined future development processes. This work has significantly improved the scalabilit and responsiveness of the platform.",
  },
  {
    name: "AFT Labour Union",
    description: "What has been worked on",
    // logo: "/bayer-logo.jpeg",
    extraContent:
      "Developed an intuitive drag-and-drop form builder, enabling users to create custom forms effortlessly. This tool allows users to design, customize, and deploy forms tailored to their specific needs, streamlining data collection and enhancing workflow efficiency. The builder supports a variety of form elements, including text fields, dropdowns, checkboxes, and more, all of which can be arranged and configured with ease. Users can seamlessly integrate the generated forms into their projects, ensuring that they have a powerful tool to enhance their data-driven operations and improve productivity.",
  },
  {
    name: "Bayer",
    logo: "/bayer-logo.jpeg",
    description: "What has been worked on",
    extraContent:
      "This project involves the development of a customized PDF reporting system that dynamically generates reports based on user-inputted forms. The system intelligently adapts the PDF design according to the specific form data, ensuring a tailored and professional output for each report. Additionally, the project includes the migration of an existing iOS application to a Progressive Web App (PWA). This migration will enhance the app's accessibility across various platforms while retaining native-like functionality and ensuring a seamless user experience. The focus is on improving versatility, efficiency, and cross-platform compatibility.",
  },
  {
    name: "Impact for development",
    description: "What has been worked on",
    extraContent:
      "We provided comprehensive software development consultancy for Impact Development Company, specializing in software architecture, cloud migration, and cloud design. Our expertise enabled Impact to streamline their software systems, ensuring seamless transitions to cloud environments and optimizing their architecture for future growth. By leveraging our advanced strategies, we facilitated efficient and scalable solutions, enhancing their operational capabilities and supporting their long-term objectives. Our tailored approach ensured that all cloud-related aspects were expertly managed, driving impactful results for the company.",
  },
  {
    name: "WMTF/A",
    logo: "/PM2.png",
    description: "What has been worked on",
    extraContent:
      "We developed a cutting-edge Customer Relationship Management (CRM) system designed to streamline and enhance business interactions. Our CRM integrates seamlessly with existing workflows, offering comprehensive features such as advanced contact management, automated sales processes, and robust analytics. The intuitive interface allows users to effortlessly track customer interactions, manage leads, and generate actionable insights. With customizable modules and real-time data synchronization, our CRM empowers businesses to build stronger relationships, optimize sales strategies, and drive growth efficiently.",
  },
];

export default function Features() {
  const [openStates, setOpenStates] = useState(
    Array(features.length).fill(false)
  );

  const toggleDropdown = (index) => {
    // Toggle the specific index while keeping other states intact
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-[#4F46E5] mb-12">
        Our Work
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between"
            style={{ alignSelf: "start", minHeight: "150px" }}
          >
            <div>
              <div className="flex flex-col items-start">
                <div className="h-20 w-20">
                  <img
                    alt="Feature Logo"
                    src={feature.logo}
                    className="text-blue-600 object-fit"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-left">{feature.name}</h3>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="flex items-center text-sm text-black focus:outline-none"
                  onClick={() => toggleDropdown(index)}
                >
                  {feature.description}{" "}
                  <ChevronDown className="ml-2 h-4 w-4 text-black" />
                </button>
              </div>
            </div>
            {openStates[index] && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700 text-sm">{feature.extraContent}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
