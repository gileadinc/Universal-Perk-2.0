"use client";
import React, { useEffect, useState } from "react";
import {
  IconHeart,
  IconCurrencyDollar,
  IconUsers,
  IconClipboardList,
  IconChartLine,
  IconMessageCircle,
} from "@tabler/icons-react";

const services = [
  {
    icon: <IconHeart className="w-12 h-12 mb-4 text-blue-600" />,
    title: "Donor Management",
    description:
      "Streamline donor management with our advanced CRM solutions tailored for charities.",
  },
  {
    icon: <IconCurrencyDollar className="w-12 h-12 mb-4 text-green-600" />,
    title: "Fundraising Solutions",
    description:
      "Maximize your fundraising potential with our easy-to-use online platforms.",
  },
  {
    icon: <IconUsers className="w-12 h-12 mb-4 text-purple-600" />,
    title: "Volunteer Coordination",
    description:
      "Organize and manage volunteers efficiently with our comprehensive tools.",
  },
  {
    icon: <IconClipboardList className="w-12 h-12 mb-4 text-yellow-600" />,
    title: "Event Management",
    description:
      "Plan and execute events seamlessly with our event management software.",
  },
  {
    icon: <IconChartLine className="w-12 h-12 mb-4 text-red-600" />,
    title: "Impact Reporting",
    description:
      "Generate insightful reports to showcase your organization’s impact and progress.",
  },
  {
    icon: <IconMessageCircle className="w-12 h-12 mb-4 text-teal-600" />,
    title: "Community Engagement",
    description:
      "Engage with your community effectively through our communication and outreach tools.",
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              {service.icon}
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
