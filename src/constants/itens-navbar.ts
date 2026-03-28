export type NavItem = {
  name: string;
  href: string;
};

//Pessoa fisica
export const pessoaFisicaSeguros: NavItem[] = [
  { name: "Automóvel", href: "/seguros/seguro-auto" },
  { name: "Residencial", href: "/seguros/seguro-residencial" },
  { name: "Vida", href: "/seguros/seguro-vida" },
  { name: "Ramos Elementares", href: "/seguros/ramos-elementares" },
  { name: "Viagem", href: "/seguros/seguro-viagem" },
];

export const pessoaFisicaPlanos: NavItem[] = [
  { name: "Plano de Saúde", href: "/planos/plano-saude" },
  { name: "Plano Odontológico", href: "/planos/plano-odontologico" },
  { name: "Pet Love", href: "/planos/pet-saude" },
];

export const pessoaFisicaSolucoes: NavItem[] = [
  { name: "Consórcio", href: "/consorcio" },
  { name: "Previdência Privada", href: "/previdencia-privada" },
  { name: "Fiança Locatícia", href: "/fianca-locaticia" },
];

//Pessoa jurídica
export const pessoaJuridicaSeguros: NavItem[] = [
  { name: "Frota de Veículos", href: "/seguros/seguro-frota" },
  { name: "Empresarial e Condomínio", href: "/seguros/seguro-empresarial" },
  { name: "Transportes e Cargas", href: "/seguros/seguro-transportes" },
  { name: "Ramos Elementares", href: "/seguros/ramos-elementares" },
  { name: "Vida em Grupo", href: "/seguros/seguro-vida-coletivo" },
];

export const pessoaJuridicaPlanos: NavItem[] = [
  { name: "Saúde Empresarial", href: "/planos/saude-empresarial" },
  { name: "Odonto Coletivo", href: "/planos/odonto-pme" },
  { name: "Vida Empresarial", href: "/planos/vida-empresarial" },

];

export const pessoaJuridicaSolucoes: NavItem[] = [
  { name: "Consórcio", href: "/consorcio" },
  { name: "Fiança Locatícia", href: "/fianca-locaticia" },
];