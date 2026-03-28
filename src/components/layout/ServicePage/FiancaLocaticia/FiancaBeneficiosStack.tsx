"use client";

import { abhayaLibre } from "@/fonts/fonts";
import {
    BadgeCheck, Clock, CreditCard, Search, Smile, ThumbsUp,
    Banknote, Gavel, Home, RefreshCw, ShieldCheck, Users,
    BarChart3, CheckSquare, HandCoins, Layers, Star, TrendingUp,
} from "lucide-react";

const cards = [
    {
        id: "inquilino",
        label: "Para o Inquilino",
        title: "Alugue com liberdade e sem fiador",
        subtitle: "Menos burocracia, mais agilidade para você fechar o contrato.",
        accentBg: "bg-primary-foreground",
        accentText: "text-white",
        cardBg: "bg-white",
        dark: false,
        beneficios: [
            { icon: <BadgeCheck className="h-5 w-5" />, title: "Sem necessidade de fiador", description: "A apólice substitui o fiador pessoa física, tornando o processo mais independente." },
            { icon: <CreditCard className="h-5 w-5" />, title: "Sem imobilizar capital", description: "Sem depósito caução. O custo da apólice é muito menor e não compromete seu caixa." },
            { icon: <Clock className="h-5 w-5" />, title: "Aprovação ágil", description: "Análise de crédito rápida — apólice emitida em poucos dias úteis." },
            { icon: <Search className="h-5 w-5" />, title: "Mais imóveis acessíveis", description: "Com a garantia em mãos, sua proposta se torna mais competitiva." },
            { icon: <Smile className="h-5 w-5" />, title: "Processo sem desgaste", description: "Nenhum familiar precisará ser exposto a riscos financeiros." },
            { icon: <ThumbsUp className="h-5 w-5" />, title: "Credibilidade na negociação", description: "Uma apólice reconhecida aumenta suas chances de aprovação." },
        ],
    },
    {
        id: "proprietario",
        label: "Para o Proprietário",
        title: "Receba em dia e proteja seu patrimônio",
        subtitle: "A seguradora cuida da cobrança enquanto você cuida do que importa.",
        accentBg: "bg-secondary",
        accentText: "text-primary",
        cardBg: "bg-primary",
        dark: true,
        beneficios: [
            { icon: <Banknote className="h-5 w-5" />, title: "Recebimento garantido", description: "A seguradora paga os aluguéis em aberto em caso de inadimplência." },
            { icon: <Gavel className="h-5 w-5" />, title: "Cobrança sem desgaste", description: "A seguradora assume a recuperação do crédito — sem conflito direto." },
            { icon: <Home className="h-5 w-5" />, title: "Proteção contra danos", description: "Planos completos cobrem danos ao imóvel ao final da locação." },
            { icon: <ShieldCheck className="h-5 w-5" />, title: "Garantia juridicamente sólida", description: "Respaldo legal completo pela Lei do Inquilinato." },
            { icon: <Users className="h-5 w-5" />, title: "Inquilinos mais qualificados", description: "A análise de crédito filtra locatários com bom perfil financeiro." },
            { icon: <RefreshCw className="h-5 w-5" />, title: "Renovação simples", description: "Apólice renovada anualmente de forma desburocratizada." },
        ],
    },
    {
        id: "imobiliaria",
        label: "Para a Imobiliária",
        title: "Feche mais contratos com menos fricção",
        subtitle: "Ofereça um serviço mais profissional e reduza a inadimplência da carteira.",
        accentBg: "bg-primary-foreground",
        accentText: "text-white",
        cardBg: "bg-white",
        dark: false,
        beneficios: [
            { icon: <CheckSquare className="h-5 w-5" />, title: "Fechamento mais rápido", description: "Sem depender de fiador — a locação fecha em dias." },
            { icon: <HandCoins className="h-5 w-5" />, title: "Comissão garantida", description: "Menos inadimplência, maior previsibilidade de honorários." },
            { icon: <Star className="h-5 w-5" />, title: "Diferencial competitivo", description: "Posicione a imobiliária como moderna e facilitadora." },
            { icon: <Layers className="h-5 w-5" />, title: "Gestão simplificada", description: "A seguradora centraliza a garantia e assume a cobrança." },
            { icon: <BarChart3 className="h-5 w-5" />, title: "Menor vacância", description: "Mais candidatos, imóvel ocupado mais rápido." },
            { icon: <TrendingUp className="h-5 w-5" />, title: "Fidelização de proprietários", description: "Instrumentos profissionais geram mais indicações e confiança." },
        ],
    },
];

const FiancaBeneficiosStack = () => {
    return (
        <section aria-label="Benefícios da Fiança Locatícia" className="py-16 md:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={`${abhayaLibre.className} text-3xl md:text-5xl text-primary mb-3`}>
                        Uma garantia, benefícios para todos
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                        A fiança locatícia protege cada parte da relação de locação de forma completa e profissional.
                    </p>
                </div>

                {/* Sticky Stack */}
                <div className="relative flex flex-col">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`sticky ${card.cardBg} rounded-2xl border shadow-lg overflow-hidden ${card.dark ? "border-white/10" : "border-gray-200"}`}
                            style={{ top: `${80 + index * 84}px`, marginBottom: "2rem" }}
                        >
                            <div className="p-8 md:p-10">
                                {/* Top row */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${card.accentBg} ${card.accentText}`}>
                                            {card.label}
                                        </span>
                                    </div>
                                    <div className="md:text-right">
                                        <h3 className={`${abhayaLibre.className} text-2xl md:text-3xl leading-snug ${card.dark ? "text-white" : "text-primary"}`}>
                                            {card.title}
                                        </h3>
                                        <p className={`text-sm mt-1 max-w-sm md:ml-auto ${card.dark ? "text-zinc-300" : "text-zinc-500"}`}>
                                            {card.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits grid */}
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {card.beneficios.map((b) => (
                                        <li
                                            key={b.title}
                                            className={`flex gap-3 items-start rounded-xl p-4 border transition-all duration-200 ${
                                                card.dark
                                                    ? "bg-white/8 border-white/10 hover:bg-white/12 hover:border-white/20"
                                                    : "bg-white border-gray-100 hover:border-secondary/30 hover:shadow-sm"
                                            }`}
                                        >
                                            <div className={`flex h-9 w-9 items-center justify-center rounded-full shrink-0 ${card.accentBg} ${card.accentText}`}>
                                                {b.icon}
                                            </div>
                                            <div>
                                                <h4 className={`text-sm font-semibold leading-snug ${card.dark ? "text-white" : "text-primary"}`}>
                                                    {b.title}
                                                </h4>
                                                <p className={`text-xs mt-0.5 leading-relaxed ${card.dark ? "text-zinc-300" : "text-gray-500"}`}>
                                                    {b.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FiancaBeneficiosStack;
