export type Testimonial = {
    name: string;
    age: number;
    content: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Lucas Ferreira",
        age: 29,
        content: "O que mais me impressionou foi a transparência. Eu já tive experiências ruins com letras miúdas em outras corretoras, mas aqui me explicaram cada cláusula do seguro auto. Quando precisei de guincho na estrada, o suporte foi imediato."
    },
    {
        name: "Beatriz Helena",
        age: 35,
        content: "Contratei o seguro residencial e o de vida. A equipe conseguiu reduzir o valor que eu pagava anteriormente mantendo as mesmas coberturas. É muito difícil encontrar um atendimento tão humano e eficiente hoje em dia."
    },
    {
        name: "Ricardo Menezes",
        age: 42,
        content: "Como profissional autônomo, eu buscava algo que coubesse no meu orçamento mas que me desse segurança real. O atendimento via WhatsApp facilita muito a minha vida. Recomendo pela agilidade e pela confiança que passam."
    }
];