export type ProjectCategory = 'landing' | 'saas' | 'mobile' | 'backend'

export interface ProjectLink {
  label: { pt: string; en: string }
  url: string
}

export interface Project {
  id: string
  category: ProjectCategory
  brand: { pt: string; en: string }
  folderLabel: string
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  stack: string[]
  links?: ProjectLink[]
  featured?: boolean
}

export const projectCategories: ProjectCategory[] = [
  'landing',
  'saas',
  'mobile',
  'backend',
]

export const projects: Project[] = [
  // —— InovaAxis (empresa) ——
  {
    id: 'proj-inovaaxis-site',
    category: 'landing',
    brand: { pt: 'InovaAxis', en: 'InovaAxis' },
    folderLabel: 'IA-WEB',
    title: {
      pt: 'Site Institucional InovaAxis',
      en: 'InovaAxis Company Website',
    },
    description: {
      pt: 'Site da minha empresa — InovaAxis desenvolve soluções digitais para pistas de kart no Brasil, apresentando produtos, proposta de valor e canais de contato B2B/B2C.',
      en: 'My company website — InovaAxis builds digital solutions for go-kart tracks in Brazil, showcasing products, value proposition and B2B/B2C contact channels.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://inovaaxis.com/',
      },
    ],
  },

  // —— Kart Hub Experience ——
  {
    id: 'proj-karthub-site',
    category: 'landing',
    brand: { pt: 'Kart Hub Experience', en: 'Kart Hub Experience' },
    folderLabel: 'KHE-WEB',
    title: {
      pt: 'Site Kart Hub Experience',
      en: 'Kart Hub Experience Website',
    },
    description: {
      pt: 'Site do produto Kart Hub Experience — ecossistema completo para gestão e experiência em pistas de kart, da operação ao piloto.',
      en: 'Kart Hub Experience product website — complete ecosystem for kart track management and driver experience, from operations to the track.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://karthubexperience.com/',
      },
    ],
  },
  {
    id: 'proj-karthub-saas',
    category: 'saas',
    brand: { pt: 'Kart Hub Experience', en: 'Kart Hub Experience' },
    folderLabel: 'KHE-SaaS',
    featured: true,
    title: {
      pt: 'Kart Hub — Plataforma Web SaaS',
      en: 'Kart Hub — SaaS Web Platform',
    },
    description: {
      pt: 'Controle completo da operação da pista via web: gestão de clientes, agendamentos, financeiro, relatórios e integração com todo o ecossistema Kart Hub. Em produção com receita recorrente.',
      en: 'Full track operation control via web: client management, scheduling, finance, reports and integration with the entire Kart Hub ecosystem. Live with recurring revenue.',
    },
    stack: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://karthubexperience.com/',
      },
    ],
  },
  {
    id: 'proj-karthub-mobile',
    category: 'mobile',
    brand: { pt: 'Kart Hub Experience', en: 'Kart Hub Experience' },
    folderLabel: 'KHE-APP',
    title: {
      pt: 'Kart Hub — App Mobile',
      en: 'Kart Hub — Mobile App',
    },
    description: {
      pt: 'Aplicativo mobile do Kart Hub para pilotos e gestores: acompanhamento de corridas, histórico, integração com a plataforma SaaS e experiência fluida no dia a dia da pista.',
      en: 'Kart Hub mobile app for drivers and managers: race tracking, history, SaaS platform integration and a smooth day-to-day track experience.',
    },
    stack: ['React Native', 'TypeScript', 'AWS', 'JWT'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://karthubexperience.com/',
      },
    ],
  },
  {
    id: 'proj-karthub-timing',
    category: 'backend',
    brand: { pt: 'Kart Hub Experience', en: 'Kart Hub Experience' },
    folderLabel: 'KHE-TIME',
    title: {
      pt: 'Kart Hub — Software de Cronometragem',
      en: 'Kart Hub — Timing Software',
    },
    description: {
      pt: 'Software desktop em Electron para cronometragem oficial na pista. Integração com hardware de timing e transmissão dos dados em tempo real via rede local (LAN).',
      en: 'Electron desktop software for official on-track timing. Integration with timing hardware and real-time data transmission over local network (LAN).',
    },
    stack: ['Electron', 'React', 'TypeScript', 'Node.js', 'LAN'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://karthubexperience.com/service/kart-hub-operative',
      },
    ],
  },
  {
    id: 'proj-karthub-live',
    category: 'backend',
    brand: { pt: 'Kart Hub Experience', en: 'Kart Hub Experience' },
    folderLabel: 'KHE-LIVE',
    title: {
      pt: 'Kart Hub — Painel ao Vivo (LAN)',
      en: 'Kart Hub — Live Display (LAN)',
    },
    description: {
      pt: 'Segundo software Electron que recebe dados da cronometragem via LAN e exibe rankings, corrida em tempo real e informações da bateria para o público e operação.',
      en: 'Second Electron app that receives timing data over LAN and displays rankings, live race progress and heat information for the audience and operations team.',
    },
    stack: ['Electron', 'React', 'TypeScript', 'WebSockets', 'LAN'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://karthubexperience.com/service/kart-hub-graphic',
      },
    ],
  },

  // —— medRenda ——
  {
    id: 'proj-medrenda-site',
    category: 'landing',
    brand: { pt: 'medRenda', en: 'medRenda' },
    folderLabel: 'MR-WEB',
    title: {
      pt: 'Site MedRenda',
      en: 'MedRenda Website',
    },
    description: {
      pt: 'Site do produto medRenda — apresentação do app de controle financeiro para profissionais da saúde, com foco em conversão e clareza da proposta de valor.',
      en: 'medRenda product website — presentation of the financial tracking app for healthcare professionals, focused on conversion and clear value proposition.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://inovaaxis.com/medrenda',
      },
    ],
  },
  {
    id: 'proj-medrenda-app',
    category: 'mobile',
    brand: { pt: 'medRenda', en: 'medRenda' },
    folderLabel: 'MR-APP',
    title: {
      pt: 'MedRenda — App Mobile',
      en: 'MedRenda — Mobile App',
    },
    description: {
      pt: 'App para tracking das rendas que profissionais da saúde têm a receber, organizado por atendimento. Disponível na App Store e Google Play.',
      en: 'App for tracking income healthcare professionals are owed, organized per appointment. Available on the App Store and Google Play.',
    },
    stack: ['React Native', 'TypeScript', 'Firebase', 'iOS', 'Android'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://inovaaxis.com/medrenda',
      },
    ],
  },

  // —— Cliente ——
  {
    id: 'proj-julia-momoli',
    category: 'landing',
    brand: { pt: 'Cliente', en: 'Client' },
    folderLabel: 'JM-LP',
    title: {
      pt: 'Dra. Julia Momoli — Landing Page',
      en: 'Dr. Julia Momoli — Landing Page',
    },
    description: {
      pt: 'Landing page premium para consultório médico — design clean, foco em conversão de pacientes e hospedagem na Vercel.',
      en: 'Premium landing page for a medical practice — clean design, patient conversion focus and Vercel hosting.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      {
        label: { pt: 'Ver site', en: 'View site' },
        url: 'https://julia-momoli.vercel.app',
      },
    ],
  },
]

export function getProjectsByCategory(category: ProjectCategory | 'all'): Project[] {
  if (category === 'all') return projects
  return projects.filter((p) => p.category === category)
}

export function getCategoryCount(category: ProjectCategory): number {
  return projects.filter((p) => p.category === category).length
}
