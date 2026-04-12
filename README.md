# Hannah & Liberi — Site Institucional

Site institucional para corretora de seguros, desenvolvido com foco em **performance**, **SEO** e **experiência do usuário**. O projeto apresenta os serviços da empresa (seguros, planos, consórcio, previdência privada e fiança locatícia), com formulário de contato funcional e envio de e-mail transacional via Resend.

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 |
| Componentes | shadcn/ui + Radix UI |
| Formulários | React Hook Form + Zod |
| E-mail | Resend (transacional) |
| Animações | CSS keyframes + IntersectionObserver |
| Carrossel | Embla Carousel / Swiper |
| Ícones | Lucide React |
| Máscara | react-imask |

---

## Funcionalidades

- **Páginas institucionais** — Home, Sobre, Consórcio, Previdência Privada, Fiança Locatícia
- **Páginas dinâmicas** — Seguros e Planos com rotas `[slug]` e `generateStaticParams`
- **Formulário de contato** — Validação client + server-side com Zod, seleção de serviço de interesse, envio de e-mail via API Route com feedback de sucesso/erro
- **E-mail transacional** — Template HTML elegante com dados do cliente, serviço de interesse e botão de resposta direta via WhatsApp
- **Scroll reveal** — Componente `RevealSection` com `IntersectionObserver` para animações ao rolar a página
- **Sticky Stacking Cards** — Efeito de cards empilhados com `position: sticky` na seção de Fiança Locatícia
- **Navbar responsiva** — Transparente no topo, sólida ao rolar, com menu mobile via Sheet
- **Botão WhatsApp fixo** — Canto inferior direito com animação de pulse
- **SEO** — Open Graph, Twitter Card e Metadata export em todas as páginas

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── api/contact/route.ts       # API Route — valida com Zod e chama o serviço de e-mail
│   ├── consorcio/
│   ├── previdencia-privada/
│   ├── fianca-locaticia/
│   ├── seguros/[slug]/            # Rota dinâmica
│   └── planos/[slug]/             # Rota dinâmica
├── components/
│   ├── layout/                    # Navbar, Footer, Hero, seções da home
│   │   └── ServicePage/           # Componentes das páginas de serviço
│   ├── ui/                        # Componentes shadcn/ui
│   └── RevealSection.tsx          # Scroll reveal com IntersectionObserver
├── lib/
│   └── mail/
│       ├── transporter.ts         # Instância do cliente Resend
│       └── sendMail.ts            # Serviço de envio com template HTML + link WhatsApp
├── schemas/
│   └── contact-schema.ts          # Schema Zod compartilhado (client + server)
└── constants/                     # Dados estáticos (serviços, FAQs, etc.)
```

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz com as seguintes variáveis:

```env
# Resend — envio de e-mail transacional
RESEND_API_KEY=re_xxxxxxxxxxxx

# Destinatário dos contatos recebidos
CONTACT_EMAIL_TO=contato@corretoralm.com.br

# Link do WhatsApp (botão flutuante e link no e-mail)
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5511999999999
```

---

## Acesse o projeto

[corretoralm.com.br](https://corretoralm.com.br)
