import React from "react"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const images = [
    {
        path: "/bayer-logo.jpeg",
        alt: "Bayer"
    },
    {
        path: "/cognizant-logo.png",
        alt: "Cognizant"
    },
    {
        path: "/deliotte-logo.png",
        alt: "Deliotte"
    },
    {
        path: "/paypal-logo.png",
        alt: "Paypal"
    },
    {
        path: "/tiktok-logo.webp",
        alt: "Tiktok"
    },
]

const Clients = () => {
    return (

        <>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
               

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        plugins={[
                            Autoplay({
                              delay: 2000,
                            }),
                          ]}
                        className="w-full"
                        
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                                    <div className="p-1">
                                        <img
                                            alt={image.alt}
                                            src={image.path}
                                            width={158}
                                            height={48}
                                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        />

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

          

        </>
    )
}

export default Clients;