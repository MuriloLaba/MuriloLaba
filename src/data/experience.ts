export interface ExperienceItem {
  id: string
  company: string
  role: { pt: string; en: string }
  period: { start: string; end: string | null }
  location: { pt: string; en: string }
  description: { pt: string; en: string }
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-inovaaxis',
    company: 'InovaAxis',
    role: {
      pt: 'Founder & Product Engineer',
      en: 'Founder & Product Engineer',
    },
    period: { start: 'Jul 2024', end: null },
    location: {
      pt: 'Curitiba, Paraná, Brasil',
      en: 'Curitiba, Paraná, Brazil',
    },
    description: {
      pt: 'Desenvolvimento de um ecossistema digital completo para pistas de kart no Brasil, com soluções B2B e B2C. Responsável end-to-end por app mobile (React Native), plataforma SaaS, aplicações desktop (Electron + React), sistemas web de autoatendimento, arquitetura AWS (EC2, RDS, Lambda, EventBridge, Route 53), CI/CD com GitHub Actions, UX/UI, roadmap de produto, metodologias ágeis, autenticação e segurança (JWT, cookies, LGPD) e suporte em produção. Produto em operação com clientes ativos e receita recorrente.',
      en: 'Development of a complete digital ecosystem for go-kart tracks in Brazil, delivering B2B and B2C solutions. End-to-end ownership of mobile app (React Native), SaaS platform, desktop apps (Electron + React), web self-service systems, AWS architecture (EC2, RDS, Lambda, EventBridge, Route 53), CI/CD with GitHub Actions, UX/UI, product roadmap, agile methodologies, authentication & security (JWT, cookies, LGPD compliance) and production support. Live product with active clients and recurring revenue.',
    },
  },
  {
    id: 'exp-33robotics',
    company: '33Robotics',
    role: {
      pt: 'Desenvolvedor de Software Júnior',
      en: 'Junior Software Developer',
    },
    period: { start: 'Set 2023', end: 'Mai 2024' },
    location: {
      pt: 'Curitiba, PR',
      en: 'Curitiba, PR',
    },
    description: {
      pt: 'Atuação no desenvolvimento de software em ambiente profissional, contribuindo com implementação de funcionalidades, integração de sistemas e boas práticas de engenharia em equipe.',
      en: 'Professional software development, contributing to feature implementation, system integration and engineering best practices within a team environment.',
    },
  },
]
