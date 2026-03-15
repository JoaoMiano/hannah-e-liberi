"use client"

import { ImageConsorcio } from "@/types/imageConsorcio"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const ConsorcioCarousel = ({ images }: { images: ImageConsorcio[] }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            className="w-full"
        >
            {images.map((img) => (
                <SwiperSlide key={img.id}>
                    <div className={"flex justify-center"}>
                        <Image
                            src={img.url}
                            alt={img.name}
                            width={450}
                            height={300}
                            className="rounded-md"
                        />
                    </div>


                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ConsorcioCarousel