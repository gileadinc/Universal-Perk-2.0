import React from "react";

const projects = [
    {
        id: 1,
        title: 'Paypal checkout form',
        company:"Paypal",
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: '/paypal.png',
      
        
    },

    {
        id: 1,
        
        title: 'Drag and drop form creator',
        company:"AFT Labour Union", 
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:'/form-designer.png',
      
        
    },

    {
        id: 1,
        title: 'PDF Report Generator',
        company:"Bayer",
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: '/report.png',
     
        
    },
]

const Projects = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        You can view our previous works here
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img alt="" src={project.imageUrl} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={project.href}>
                                    <span className="absolute inset-0" />
                                    {project.title}
                                </a>

                            </h3>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                {project.company}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;