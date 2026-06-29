import {
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Box,
  GitBranch,
  Cloud,
  Brain,
  Palette,
  Monitor,
  Server,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  react: Code2,
  'react-native': Globe,
  electron: Monitor,
  typescript: Code2,
  nextjs: Globe,
  tailwind: Palette,
  html: Globe,
  css: Palette,
  nodejs: Server,
  python: Terminal,
  csharp: Code2,
  postgres: Database,
  api: Layers,
  aws: Cloud,
  layers: Layers,
  docker: Box,
  git: GitBranch,
  cicd: GitBranch,
  vercel: Cloud,
  tensorflow: Brain,
  figma: Palette,
  vscode: Monitor,
  linux: Terminal,
}

export function SkillIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Code2
  return <Icon size={16} className="text-accent/80" />
}
