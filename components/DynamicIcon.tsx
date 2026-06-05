import * as Icons from 'lucide-react'

interface DynamicIconProps {
  name: string
  size?: number
  className?: string
}

export default function DynamicIcon({ name, size = 24, className = '' }: DynamicIconProps) {
  const Icon = (Icons as Record<string, unknown>)[name] as React.ComponentType<{ size?: number; className?: string }> | undefined
  if (!Icon) return null
  return <Icon size={size} className={className} />
}
