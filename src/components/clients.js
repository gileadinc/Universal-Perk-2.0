import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    path: "/bayer-logo.jpeg",
    alt: "Bayer",
  },
  {
    path: "/cognizant-logo.png",
    alt: "Cognizant",
  },
  {
    path: "/deliotte-logo.png",
    alt: "Deliotte",
  },
  {
    path: "/paypal-logo.png",
    alt: "Paypal",
  },
  {
    path: "/tiktok-logo.webp",
    alt: "Tiktok",
  },
  {
    path: "/PM.png",
    alt: "PM",
  },
  {
    path: "/PM2.png",
    alt: "PM2",
  },
  {
    path: "/TEK.svg",
    alt: "Tek",
  },
];

const Clients = () => {
  return (
    <div className="flex flex-col mb-10 mt-10">
      {/* <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Clients
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Trusted by Industry Leaders: Our Esteemed Clients
        </p>
      </div> */}
      <div className="flex items-center justify-center">
        <div className="overflow-hidden w-[70%]">
          <div className="flex items-center justify-end space-x-20 animate-loop-scroll">
            {images.map((image, index) => (
              <div key={index} className="max-w-20">
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

export default Clients;
