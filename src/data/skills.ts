export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  id: 'frontend' | 'backend' | 'devops' | 'tools'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'React Native', icon: 'react-native' },
      { name: 'Electron', icon: 'electron' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'UX/UI', icon: 'figma' },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'PostgreSQL / RDS', icon: 'postgres' },
      { name: 'Lambda', icon: 'aws' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'JWT & Auth', icon: 'api' },
    ],
  },
  {
    id: 'devops',
    skills: [
      { name: 'GitHub Actions', icon: 'cicd' },
      { name: 'CI/CD', icon: 'cicd' },
      { name: 'Route 53', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'EventBridge', icon: 'aws' },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Product Management', icon: 'figma' },
      { name: 'Agile / Kanban', icon: 'cicd' },
      { name: 'LGPD', icon: 'api' },
      { name: 'B2B / B2C', icon: 'layers' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
]
