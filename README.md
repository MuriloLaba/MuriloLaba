# Murilo Laba — Portfólio Premium

Portfólio pessoal full-stack com design dark premium, animações GSAP e seção assinatura "O Arquivo" — um armário de pastas controlado pelo scroll.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** — paleta customizada dark + dourado âmbar
- **GSAP + ScrollTrigger** — gaveta do armário, reveals de seção
- **Framer Motion** — menu mobile
- **i18next** — PT-BR / EN com detecção automática
- **Lucide React** — ícones

## Setup

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/     # Header, Footer, FileCabinet, ManilaFolder, etc.
├── sections/       # Hero, About, Skills, Experience, Projects, Contact
├── data/           # projects.ts, experience.ts, skills.ts
├── locales/        # pt.json, en.json
├── hooks/          # useReducedMotion, useSectionReveal, etc.
├── i18n/           # Configuração i18next
└── styles/         # Tailwind + CSS customizado
```

## Personalização

### Adicionar um projeto

Edite `src/data/projects.ts` — cada entrada aparece no grid da categoria correspondente.

```ts
{
  id: 'proj-5',
  category: 'saas', // 'landing' | 'saas' | 'mobile' | 'backend'
  folderLabel: 'APP-005',
  title: { pt: 'Meu Projeto', en: 'My Project' },
  description: { pt: '...', en: '...' },
  stack: ['React', 'Node.js'],
  github: 'https://github.com/seu-usuario/repo',
  demo: 'https://demo.com', // opcional
  featured: false, // destaque maior no grid (opcional)
}
```

### Adicionar experiência

Edite `src/data/experience.ts` — siga o formato de `ExperienceItem`.

### Traduções

Todas as strings da UI estão em `src/locales/pt.json` e `src/locales/en.json`.

### Formulário de contato

Substitua `YOUR_FORM_ID` em `src/sections/Contact.tsx` pelo ID do seu formulário [Formspree](https://formspree.io).

### CV

Coloque seu PDF em `public/cv-murilo-laba.pdf` (link do botão "Baixar CV").

### Foto / avatar

Substitua o placeholder `ML` em `src/sections/About.tsx` por uma tag `<img>` com sua foto.

### Links sociais

Atualize URLs em `src/components/Footer.tsx` e `src/sections/Contact.tsx`.

## Seção de projetos

Grid categorizado com filtros animados (Landing Pages, SaaS, Mobile, Back-end). Cards com hover dourado e transição suave ao trocar de categoria. Edite categorias em `src/data/projects.ts`.

## Tipografia

- **Display:** Playfair Display (headlines)
- **Corpo:** DM Sans

## Licença

MIT — uso livre para portfólio pessoal.
