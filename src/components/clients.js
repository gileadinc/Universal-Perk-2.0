import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const images = [
    {
        path: "/UN_transparent_logo.png",
        alt: "United Nations"
    },
    {
        path: "/unicef.png",
        alt: "Unicef"
    },
    {
        path: "/IDB.png",
        alt: "IDB"
    },
    {
        path: "/save_the_children.png",
        alt: "United Nations"
    },
    {
        path: "/UN_transparent_logo.png",
        alt: "UN_transparent_logo.png"
    },
    {
        path: "/UN_transparent_logo.png",
        alt: "United Nations"
    },
    {
        path: "/unicef.png",
        alt: "Unicef"
    },
    {
        path: "/IDB.png",
        alt: "IDB"
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
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

          

        </>
    )
}

export default Clients;