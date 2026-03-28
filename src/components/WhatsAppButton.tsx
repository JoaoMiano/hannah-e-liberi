import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const url = process.env.NEXT_PUBLIC_WHATSAPP_URL;

    if (!url) return null;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: "#25D366" }}
        >
            {/* Pulse ring */}
            <span
                className="absolute inset-0 rounded-full animate-ping opacity-40"
                style={{ backgroundColor: "#25D366" }}
            />
            <MessageCircle className="relative z-10 h-7 w-7 text-white fill-white" />
        </a>
    );
};

export default WhatsAppButton;
