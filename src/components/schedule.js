const Schedule = () => {
  const images = [
    {
      path: "/react.svg",
      alt: "react",
    },
    {
      path: "/javascript.svg",
      alt: "Javascript",
    },
    {
      path: "/angular.svg",
      alt: "Angular",
    },
    {
      path: "/aws.svg",
      alt: "AWS",
    },
    {
      path: "/d3.svg",
      alt: "D3",
    },
    {
      path: "/flutter.svg",
      alt: "Flutter",
    },
    {
      path: "/gcp.svg",
      alt: "Google cloud",
    },
    {
      path: "/css.svg",
      alt: "Css",
    },
    {
      path: "/html.svg",
      alt: "HTML",
    },
    {
      path: "/azure.svg",
      alt: "Azure",
    },
    {
      path: "/node-js.svg",
      alt: "Node js",
    },
    {
      path: "/vue.svg",
      alt: "Vue js",
    },
    {
      path: "/java.svg",
      alt: "Java"
    }
  ];
  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Technologies
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Technologies we use to develop systems
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-hidden w-[90%]">
          <div className="flex items-center justify-end space-x-[100px] animate-loop-scroll">
            {images.map((image, index) => (
              <div key={index} className="max-w-30">
                <img
                  loading="lazy"
                  src={image.path}
                  className="w-full h-auto object-fit"
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
