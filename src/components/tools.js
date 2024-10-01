function Tools() {
    const images = [
      {
        url: "./amazon.png",
      },
      {
        url: "./app_store.png",
      },
      {
        url: "./figma.png",
      },
      {
        url: "./flutter.png",
      },
      {
        url: "../google_play.png",
      },
      {
        url: "./javascript.png",
      },
      {
        url: "./lambda.png",
      },
      {
        url: "./material.png",
      },
      {
        url: "./node.png",
      },
      {
        url: "./images.png",
      },
    ];
  
    return (
      <div className="mt-10 flex flex-col mb-20">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Software Development
          </h2>
        </div>
  
        <div>
          <h1 className="text-center text-[32px] mb-[20px]">Technologies used</h1>
          <div className="flex px-20 flex-wrap justify-center align-center gap-x-[10px]">
            {images.map((image, index) => (
              <img key={index} src={image.url} className="max-w-30 max-h-30" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Tools;
  