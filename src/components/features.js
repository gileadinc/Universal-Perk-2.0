import { BookUser, Cloud, Cog, FileText, MonitorSpeaker, Wrench } from "lucide-react";
import React from "react";


const features = [
    {
        name: 'Comprehensive ERP Development for Non-Profits',
        description: 'Our ERP systems are custom-built to meet the unique needs of non-profits and international organizations, ensuring seamless integration and maximum efficiency.',
        icon: Cloud,
    },
    {
        name: 'Customized Relationship Management',
        description: 'Develop a CRM system tailored specifically for non-profits, enabling you to efficiently manage relationships with donors, volunteers, and stakeholders.',
        icon: MonitorSpeaker,
    },
    {
        name: 'Volunteer Coordination Tools',
        description: 'Streamline volunteer management with tools to schedule, track hours, and communicate effectively, fostering a motivated and organized volunteer workforce.',
        icon: Wrench,
    },
    {
        name: 'Data-Driven Insights',
        description: 'Leverage powerful analytics to gain insights into your relationships, helping you make informed decisions and optimize your engagement strategies.',
        icon: FileText,
    },
    {
        name: 'User-Friendly Interface',
        description: 'Navigate effortlessly with an intuitive, easy-to-use interface designed to minimize training time and maximize productivity.',
        icon: BookUser,
    },
    {
        name: 'Continuous Support & Maintenance',
        description: 'Benefit from ongoing technical support and regular updates, ensuring your CRM system remains efficient and effective over time.',
        icon: Cog,
    },
]

const Features = () => {
    return (
        <div className="relative bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Services we provide
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Our comprehensive range of services is designed to support non-profits and international organizations in achieving their mission more efficiently
                </p>
                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                                                <feature.icon aria-hidden="true" className="h-8 w-8 text-white" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                            {feature.name}
                                        </h3>
                                        <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;