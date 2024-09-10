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
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-500 mb-4">
          Trusted By
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-hidden">
          <div className="flex items-center justify-end space-x-40 animate-loop-scroll">
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
