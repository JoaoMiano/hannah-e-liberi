"use client"

import { Button } from '@/components/ui/button';
import { abhayaLibre, canava } from '@/fonts/fonts';
// app/not-found.tsx
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-20 md:py-40  text-center gap-6 mt-h-16 lg:mt-h-20">
            <h1 className={`text-9xl text-primary-foreground font-bold ${canava.className}`}>404</h1>
            <p className="text-xl text-gray-600">Ops! Página não encontrada.</p>
            <div className='flex flex-col items-center justify-center md:flex-row gap-4 w-full max-w-lg'>
                <Button onClick={()=>redirect("/")} className='w-full max-w-60 py-2 px-4 bg-transparent hover:bg-transparent border border-primary text-primary text-md cursor-pointer rounded-md flex items-center justify-center gap-2 transition-colors duration-300'>
                        <Home className="text-xl" />
                        Voltar para a Home
                </Button>
                <Button onClick={() => window.history.back()} className='w-full max-w-60 py-2 px-4 bg-primary-foreground border border-primary-foreground text-white text-md cursor-pointer rounded-md flex items-center justify-center gap-2 transition-colors duration-300'>

                        <ArrowLeft className="text-xl" />
                        Voltar à Página Anterior

                </Button>
            </div>

        </div>
    );
}
