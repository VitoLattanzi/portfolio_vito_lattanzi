import {
  siCss,
  siExpress,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siN8n,
  siNodedotjs,
  siPrisma,
  siReact,
  siRss,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

const icons: Record<string, { title: string; hex: string; path: string }> = {
  react: siReact,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  html5: siHtml5,
  css: siCss,
  javascript: siJavascript,
  nodedotjs: siNodedotjs,
  express: siExpress,
  supabase: siSupabase,
  prisma: siPrisma,
  mongodb: siMongodb,
  mysql: siMysql,
  rss: siRss,
  n8n: siN8n,
  git: siGit,
}

function isDark(hex: string) {
  const value = parseInt(hex, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return 0.299 * r + 0.587 * g + 0.114 * b < 60
}

interface TechIconProps {
  slug?: string
  className?: string
}

export default function TechIcon({ slug, className }: TechIconProps) {
  const icon = slug ? icons[slug] : undefined
  if (!icon) return null

  return (
    <svg
      role="img"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className={className}
      fill={isDark(icon.hex) ? 'currentColor' : `#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  )
}
