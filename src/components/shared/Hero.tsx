import Navbar from "./Navbar"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"


const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    const carouselImages = [
        'https://placehold.co/600x330',
        'https://placehold.co/600x330',
        'https://placehold.co/600x330',
        'https://placehold.co/600x330',
    ]

    return (
        <header>
            <Navbar />
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <Carousel
                            plugins={[plugin.current]}
                            className="col-span-2 h-full w-full rounded-lg"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent className="h-full">
                                {carouselImages.map((item) => (
                                    <CarouselItem key={item} className="overflow-hidden h-full rounded-md">
                                        <img className="w-full rounded-lg h-[330px] object-cover" src={item} alt="" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    <img width={330} height={330} className="rounded-lg w-full h-[330px]" src="http://via.placeholder.com/330/330" alt="" />
                    <img width={330} height={330} className="rounded-lg w-full h-[330px]" src="http://via.placeholder.com/330/330" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Hero