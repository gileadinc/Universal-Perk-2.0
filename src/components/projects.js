import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDown,
  ChevronDownCircle,
  ChevronUp,
  Minus,
  Plus,
} from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Paypal Checkout Page Redesign",
    company: "Paypal",
    href: "#",
    description: `We led a successful migration of REST API services to GraphQL, resulting in a 300% improvement in site performance. 
      This transition enabled more efficient data fetching and reduced server load. In parallel, we undertook a comprehensive migration of legacy code, 
      ensuring modern architecture compatibility, enhanced maintainability, and streamlined future development processes. 
      This work has significantly improved the scalability and responsiveness of the platform.`,
    imageUrl: "/paypal.png",
    tech: ["node.js", "graphql", "react.js", "angular", "apollo"],
  },

  {
    id: 2,
    title: "Drag and Drop Form Creator",
    company: "AFT Labour Union",
    href: "#",
    description: `Developed an intuitive drag-and-drop form builder, enabling users to create custom forms effortlessly.
     This tool allows users to design, customize, and deploy forms tailored to their specific needs, streamlining data 
     collection and enhancing workflow efficiency. The builder supports a variety of form elements, 
     including text fields, dropdowns, checkboxes, and more, all of which can be arranged and configured with ease. 
     Users can seamlessly integrate the generated forms into their projects, ensuring that they have 
    a powerful tool to enhance their data-driven operations and improve productivity.`,
    tech: ["vue.js", "php", "mysql", "aws-cloud"],
  },

  {
    id: 3,
    title: "PDF Report Generator & Migrated IOS App to Progressive Web App",
    company: "Bayer",
    href: "#",
    description: `This project involves the development of a customized PDF reporting system that 
    dynamically generates reports based on user-inputted forms. The system intelligently adapts the 
    PDF design according to the specific form data, ensuring a tailored and professional output for each report. 
    Additionally, the project includes the migration of an existing iOS application to a Progressive Web App (PWA). 
    This migration will enhance the app's accessibility across various platforms while retaining native-like functionality and ensuring 
    a seamless user experience. The focus is on improving versatility, efficiency, and cross-platform compatibility.`,
    imageUrl: "/report.png",
    tech: ["vue.js", "d3.js", "popper.js", "jest", "pupeeter.js", "nuxt.js", "mobx", "react-native"],
  },
  {
    id: 4,
    title: "Consultancy",
    company: "Impact for development",
    description: `We provided comprehensive software development consultancy for Impact Development Company, 
    specializing in software architecture, cloud migration, and cloud design. Our expertise enabled Impact to 
    streamline their software systems, ensuring seamless transitions to cloud environments and optimizing 
    their architecture for future growth. By leveraging our advanced strategies, we facilitated efficient and 
    scalable solutions, enhancing their operational capabilities and supporting their long-term objectives. 
    Our tailored approach ensured that all cloud-related aspects were expertly managed, driving impactful results for the company.`,
    tech: ["Cloud", "AWS", "Azure", "OpenAI", "Staffing","Project Management"],
  },
  {
    id: 5,
    title: "CRM software",
    company: "WMTF/A",
    description: `We developed a cutting-edge Customer Relationship Management (CRM) system designed to 
    streamline and enhance business interactions. Our CRM integrates seamlessly with existing workflows, 
    offering comprehensive features such as advanced contact management, automated sales processes, 
    and robust analytics. The intuitive interface allows users to effortlessly track customer interactions, manage leads, 
    and generate actionable insights. With customizable modules and real-time data synchronization, our CRM empowers businesses to 
    build stronger relationships, 
    optimize sales strategies, and drive growth efficiently.`,
    tech: [
      "react.js",
      "d3.js",
      "lambda",
      "dynamoDb",
      "node",
      "s3",
      "apiGateway",
      "aws-cdk",
      "pyhton"
    ],
  },
];

const Projects = () => {
  return (
    <>
      <div className="bg-white py-10" id="projects">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              You can view our previous works here
            </p>
          </div>

          <div className="bg-white w-full">
            <div className="w-full">
              <div className="divide-y divide-gray-900/10">
                <dl className="mt-10 divide-y divide-gray-900/10">
                  {projects.map((project) => (
                    <Disclosure key={project.id} as="div" className="pt-6">
                      <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                          <article
                            key={project.id}
                            className="flex max-w-xl flex-col items-start justify-between"
                          >
                            <div className="flex items-center gap-x-4 text-xs">
                              <a
                                href={project.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {project.title}
                              </a>
                            </div>
                            <div className="group relative">
                              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={project.href}>
                                  <span className="absolute inset-0" />
                                  {project.company}
                                </a>
                              </h3>

                              <div className="flex flex-wrap gap-2 p-4">
                                {project.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </article>

                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDown
                              aria-hidden="true"
                              className="h-6 w-6 group-data-[open]:hidden"
                            />
                            <ChevronUp
                              aria-hidden="true"
                              className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600 p-6">
                          {project.description}
                        </p>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
