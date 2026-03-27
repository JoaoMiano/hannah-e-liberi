"use client"

import { ImageConsorcio } from "@/types/imageConsorcio"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from "react"
import Modal from "../ui/modal"

export const ConsorcioCarousel = ({ images }: { images: ImageConsorcio[] }) => {
    const [selectedImage, setSelectedImage] = useState<ImageConsorcio | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleImageClick = (img: ImageConsorcio) => {
        setSelectedImage(img)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedImage(null)
    }

    return (
        <>
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
                        <div className="flex justify-center">
                            <div className="relative w-full h-90 md:h-105 lg:h-125 xl:h-145 rounded-md overflow-hidden cursor-pointer" onClick={() => handleImageClick(img)}>
                                <Image
                                    src={img.url}
                                    alt={img.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
            {isModalOpen && selectedImage && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <Image
                        src={selectedImage!.url}
                        alt={selectedImage!.name}
                        fill
                        sizes="100vw"
                        className="object-contain"
                    />
                </Modal>
            )}
        </>
    )
}

export default ConsorcioCarousel