# Hannah & Liberi — Site Institucional

Site institucional para corretora de seguros, desenvolvido com foco em **performance**, **SEO** e **experiência do usuário**. O projeto apresenta os serviços da empresa (seguros, planos, consórcio, previdência privada e fiança locatícia), com formulário de contato funcional e integração com e-mail via SMTP.

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 |
| Componentes | shadcn/ui + Radix UI |
| Formulários | React Hook Form + Zod |
| E-mail | Nodemailer (SMTP) |
| Animações | CSS keyframes + IntersectionObserver |
| Carrossel | Embla Carousel / Swiper |
| Ícones | Lucide React |
| Máscara | react-imask |

---

## Funcionalidades

- **Páginas institucionais** — Home, Sobre, Consórcio, Previdência Privada, Fiança Locatícia
- **Páginas dinâmicas** — Seguros e Planos com rotas `[slug]` e `generateStaticParams`
- **Formulário de contato** — Validação client + server-side com Zod, envio de e-mail via API Route, feedback de sucesso/erro
- **Scroll reveal** — Componente `RevealSection` com `IntersectionObserver` para animações ao rolar a página
- **Sticky Stacking Cards** — Efeito de cards empilhados com `position: sticky` na seção de Fiança Locatícia
- **Navbar responsiva** — Transparente no topo, sólida ao rolar, com menu mobile via Sheet
- **Botão WhatsApp fixo** — Canto inferior direito com animação de pulse
- **SEO** — Metadata export em todas as páginas, Server Components por padrão

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── api/contact/route.ts       # API Route de envio de e-mail
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
│       ├── transporter.ts         # Config SMTP (Nodemailer)
│       └── sendMail.ts            # Serviço de envio com template HTML
├── schemas/
│   └── contact-schema.ts          # Schema Zod compartilhado (client + server)
└── constants/                     # Dados estáticos (serviços, FAQs, etc.)
```

---

## Como rodar localmente

**1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/hannah-e-liberi.git
cd hannah-e-liberi
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz:
```env
# SMTP para envio de e-mail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu@email.com
SMTP_PASS=sua_senha_de_app

# Destinatário dos contatos recebidos
CONTACT_EMAIL_TO=destino@email.com

# Link do WhatsApp (botão flutuante)
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5511999999999
```

**4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Deploy

O projeto está pronto para deploy na **Vercel**. Basta importar o repositório e configurar as variáveis de ambiente no painel da plataforma.

```bash
npm run build   # verifica erros de build
npm run start   # inicia em modo produção
```
