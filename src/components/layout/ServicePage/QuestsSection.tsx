import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Servico } from "@/data/servicos";
import { abhayaLibre } from "@/fonts/fonts";
import { MessageCircleQuestionMark } from "lucide-react";

export const QuestsSection = ({ service }: { service: Servico }) => {
    return (
        <section className="container mx-auto px-4 lg:px-6 py-12 md:py-24">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                
                {/* Header*/}
                <div className={`flex flex-col md:flex-row gap-3 justify-center items-center ${abhayaLibre.className}`}>
                    <MessageCircleQuestionMark size={48} className="text-secondary shrink-0" />
                    <h2 className="text-4xl md:text-5xl text-primary text-center">
                        Perguntas Frequentes
                    </h2>
                </div>

                {/* Accordion*/}
                <Accordion 
                    type="single" 
                    collapsible 
                    defaultValue="item-0" 
                    className="w-full space-y-2"
                >
                    {service.duvidasFrequentes.map((quest, index) => (
                        <AccordionItem 
                            key={index} 
                            value={`item-${index}`}
                            className="border border-gray-200 rounded-xl px-4 bg-white transition-all hover:border-secondary/40 shadow-sm"
                        >
                            <AccordionTrigger className="text-left text-lg font-medium text-primary hover:no-underline hover:text-secondary py-6">
                                {quest.pergunta}
                            </AccordionTrigger>
                            
                            <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                {quest.resposta}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    );
};