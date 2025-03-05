import Image from "next/image";

const Schedule = () => {
  const technologies = [
    { src: "/react.svg", alt: "React" },
    { src: "/javascript.svg", alt: "JavaScript" },
    { src: "/angular.svg", alt: "Angular" },
    { src: "/aws.svg", alt: "AWS" },
    { src: "/d3.svg", alt: "D3" },
    { src: "/flutter.svg", alt: "Flutter" },
    { src: "/gcp.svg", alt: "Google Cloud" },
    { src: "/css.svg", alt: "CSS" },
    { src: "/html.svg", alt: "HTML" },
    { src: "/azure.svg", alt: "Azure" },
    { src: "/node-js.svg", alt: "Node.js" },
    { src: "/vue.svg", alt: "Vue.js" },
    { src: "/java.svg", alt: "Java" },
  ];

  return (
    <div className="bg-[#4F46E5] py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex items-center">
        <h2 className="text-white text-4xl font-bold mb-8">
          Technologies we use
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={tech.src}
                alt={tech.alt}
                width={96}
                height={96}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;

