export type NavItem = {
  name: string;
  href: string;
};

//Pessoa fisica
export const pessoaFisicaSeguros: NavItem[] = [
  { name: "Automóvel", href: "/pessoa-fisica/seguro-auto" },
  { name: "Residencial", href: "/pessoa-fisica/seguro-residencial" },
  { name: "Vida", href: "/pessoa-fisica/seguro-vida" },
  { name: "Bike", href: "/pessoa-fisica/seguro-bike" },
  { name: "Celular", href: "/pessoa-fisica/seguro-celular" },
  { name: "Viagem", href: "/pessoa-fisica/seguro-viagem" },
];

export const pessoaFisicaPlanos: NavItem[] = [
  { name: "Plano de Saúde", href: "/pessoa-fisica/plano-saude" },
  { name: "Plano Odontológico", href: "/pessoa-fisica/plano-odontologico" },
  { name: "Pet Love", href: "/pessoa-fisica/pet-saude" },
];

export const pessoaFisicaSolucoes: NavItem[] = [
  { name: "Consórcio", href: "/pessoa-fisica/consorcio" },
  { name: "Previdência Privada", href: "/pessoa-fisica/previdencia" },
  { name: "Fiança Locatícia (Aluguel)", href: "/pessoa-fisica/seguro-aluguel" },
];

//Pessoa jurídica
export const pessoaJuridicaSeguros: NavItem[] = [
  { name: "Frota de Veículos", href: "/pessoa-juridica/seguro-frota" },
  { name: "Empresarial e Condomínio", href: "/pessoa-juridica/seguro-empresarial" },
  { name: "Transportes e Cargas", href: "/pessoa-juridica/seguro-transportes" },
  { name: "Ramos Elementares", href: "/pessoa-juridica/ramos-elementares" },
  { name: "Vida em Grupo", href: "/pessoa-juridica/seguro-vida-coletivo" },
];

export const pessoaJuridicaPlanos: NavItem[] = [
  { name: "Saúde Empresarial", href: "/pessoa-juridica/saude-empresarial" },
  { name: "Odonto Coletivo", href: "/pessoa-juridica/odonto-pme" },
  { name: "Vida Empresarial", href: "/pessoa-juridica/vida-empresarial" },

];

export const pessoaJuridicaSolucoes: NavItem[] = [
  { name: "Consórcio", href: "/pessoa-juridica/consorcio" },
  { name: "Previdência Corporativa", href: "/pessoa-juridica/previdencia" },
  { name: "Garantia Aluguel", href: "/pessoa-juridica/fianca-locaticia" },
];