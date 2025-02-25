import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  {
    path: "/tiktok-logo.webp",
    alt: "Tiktok",
  },
  {
    path: "/paypal-logo.png",
    alt: "Paypal",
  },
  {
    path: "/deliotte-logo.png",
    alt: "Deliotte",
  },
  {
    path: "/bayer-logo.jpeg",
    alt: "Bayer",
  },
  {
    path: "/cognizant-logo.png",
    alt: "Cognizant",
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
              <div key={index}>
                <Image width={250} height={75}
                  loading="lazy"
                  src={image.path}
                  style={{maxWidth: '250px'}}
                  className="w-auto h-[75px] max-w-auto"
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
