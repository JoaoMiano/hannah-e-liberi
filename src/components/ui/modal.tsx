"use client"

import { X } from "lucide-react"
import { ReactNode, useEffect } from "react"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {

        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-none max-h-none">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white bg-red-800 hover:bg-red-900 rounded-full p-3 sm:p-2 transition-colors"
                >
                    <X/>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal