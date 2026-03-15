import { HeroSectionService } from "@/components/layout/ServicePage/HeroSectionService";
import ConsorcioExplanation from "@/components/layout/ServicePage/ConsorcioExplanation";
import { abhayaLibre } from "@/fonts/fonts"
import { CheckCircle, Minus } from "lucide-react";
import ContactSection from "@/components/layout/CoontactSection";
import { QuestsSection } from "@/components/layout/ServicePage/QuestsSection";
import { questsConsorcio } from "@/data/servicos/questsFinanceiro";
import { ConsorcioTablesSection } from "@/components/layout/ServicePage/ConsorcioTablesSection";


const Consorcio = () => {
    return (
        <div>
            <HeroSectionService
                title={"Consórcio"}
                description={"Realize seus objetivos com planejamento e sem juros. A forma mais inteligente de conquistar seus sonhos com parcelas que cabem no seu bolso."}
                imageUrl={"/images/hero-images/consorcio.jpg"}
            />
            <ConsorcioExplanation />

            {/* Consorcios vs Financiamentos */}
            <div className="border-t border-b border-gray-300">
                <div className="container mx-auto py-12 px-4 lg:px-8 ">
                    <h2 className={`${abhayaLibre.className} text-2xl md:text-4xl text-primary mb-4 text-center`}>Consórcios vs Financiamento</h2>
                    <p className="text-lg text-center text-zinc-700 mb-6">Descubra por que o consórcio é a melhor opção para realizar seus objetivos.</p>
                    <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                        {/* Consórcio */}
                        <div className="flex flex-col gap-2 bg-green-100 p-6 rounded-lg shadow-md flex-1">
                            <h5 className="text-xl md:text-2xl italic font-semibold text-green-700 text-start">Consórcio</h5>
                            <ul className="list-inside text-md md:text-lg space-y-2 text-zinc-900">
                                <li className="flex items-center gap-2 text-md md:text-lg"> <CheckCircle className="h-5 w-5 inline text-green-700" /> Não tem juros, apenas taxa de administração</li>
                                <li className="flex items-center gap-2 text-md md:text-lg"> <CheckCircle className="h-5 w-5 inline text-green-700" /> Parcelas menores que financiamento</li>
                                <li className="flex items-center gap-2 text-md md:text-lg"> <CheckCircle className="h-5 w-5 inline text-green-700" /> Compra à vista com poder de negociação</li>
                                <li className="flex items-center gap-2 text-md md:text-lg"> <CheckCircle className="h-5 w-5 inline text-green-700" /> Ideal para planejamento a médio/longo prazo</li>
                            </ul>
                        </div>

                        {/* Financiamento */}
                        <div className="flex flex-col gap-2 bg-zinc-200 p-6 rounded-lg shadow-md flex-1">
                            <h5 className="text-xl md:text-2xl italic font-semibold text-slate-900 text-start">Financiamento</h5>
                            <ul className="list-inside text-md md:text-lg space-y-2 text-zinc-900">
                                <li className="flex items-center gap-2 text-md md:text-lg"> <Minus className="h-5 w-5 inline text-slate-700" /> Cobrança de juros sobre o valor financiado</li>
                                <li className="flex items-center gap-2 text-md md:text-lg"> <Minus className="h-5 w-5 inline text-slate-700" /> Parcelas mais altas devido aos juros</li>
                                <li className="flex items-center gap-2 text-md md:text-lg"> <Minus className="h-5 w-5 inline text-slate-700" /> Liberação imediata do crédito</li>
                                <li className="flex items-center gap-2 text-md md:text-lg"> <Minus className="h-5 w-5 inline text-slate-700" /> Custo total significativamente maior</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            {/*Tabelas de Consórcio */}
            <ConsorcioTablesSection />

            <QuestsSection quests={questsConsorcio} />
            <div id="contato">
                <ContactSection />
            </div>

        </div>
    )
}

export default Consorcio