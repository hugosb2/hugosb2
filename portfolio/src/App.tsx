import { useState, useEffect, useRef } from 'react'
import {
  Mail, ChevronDown, Smartphone, Server, Gamepad2,
  Code2, Terminal, Globe, ExternalLink, Sparkles, BookOpen, Palette,
  GraduationCap, Brain, Users, Lightbulb, Target, ArrowUpRight,
  MessageSquareCode, Cpu, User, Wrench, FolderKanban, AtSign,
  Leaf, Shield, FlaskConical, Package, MapPin, Calendar,
  Quote, Star, ArrowRight,
} from 'lucide-react'

type Skill = {
  category: string
  icon: typeof Code2
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Linguagens',
    icon: Code2,
    items: ['Python', 'Java', 'C', 'Dart', 'GDScript', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['Flutter', 'React Native', 'Flet'],
  },
  {
    category: 'Web & Back-end',
    icon: Server,
    items: ['React', 'Node.js', 'Flask', 'Django', 'Express.js', 'Supabase'],
  },
  {
    category: 'IA & Machine Learning',
    icon: Brain,
    items: ['Agentes RAG', 'LLMs', 'Chatbots', 'Assistentes Virtuais'],
  },
  {
    category: 'Game Dev & 3D',
    icon: Gamepad2,
    items: ['Godot Engine', 'Blender'],
  },
  {
    category: 'Ferramentas & OS',
    icon: Terminal,
    items: ['Linux', 'Windows', 'Git', 'Hardware', 'Sistemas Embarcados', 'Metodologias Ágeis'],
  },
]

function LoopIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 2.1l4 4-4 4" />
      <path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8" />
      <path d="M7 21.9l-4-4 4-4" />
      <path d="M21 11.8v2a4 4 0 0 1-4 4H4.2" />
    </svg>
  )
}

const projects = [
  {
    name: 'VERT Soluções Ambientais',
    description: 'Empresa de Itapetinga - BA que desenvolve tecnologias de reciclagem de resíduos de difícil reaproveitamento.',
    url: 'https://vertinova.com.br/',
    icon: Leaf,
    favicon: 'https://www.google.com/s2/favicons?domain=vertinova.com.br&sz=64',
    tags: ['Web', 'Inovação'],
    accent: 'from-emerald-300/40 to-cyan-300/30',
  },
  {
    name: 'DS Proteção',
    description: 'Site institucional para empresa de segurança e proteção de Itapetinga - BA.',
    url: 'https://dsprotecao.vercel.app/',
    icon: Shield,
    favicon: '/projects/dss.png',
    tags: ['Web', 'Site Institucional'],
    accent: 'from-blue-300/40 to-indigo-300/30',
  },
  {
    name: 'PixoLume',
    description: 'Aplicativo mobile de colorimetria, idealizado como ferramenta digital para auxiliar em análises químicas.',
    url: 'https://pixolume.vercel.app/',
    icon: FlaskConical,
    favicon: '/projects/pixolume.png',
    tags: ['Flutter', 'Mobile'],
    accent: 'from-fuchsia-300/40 to-violet-300/30',
  },
  {
    name: 'BoviCheck',
    description: 'Aplicativo mobile para gestão e monitoramento de bovinos, desenvolvido com Flutter.',
    url: 'https://bovicheck.vercel.app/',
    icon: Smartphone,
    favicon: '/projects/bovicheck.png',
    tags: ['Flutter', 'Mobile', 'Gestão'],
    accent: 'from-amber-300/40 to-rose-300/30',
  },
  {
    name: 'ColetaJá',
    description: 'Aplicativo desenvolvido com foco em gestão de processos e produtividade.',
    url: 'https://coletaja-app.vercel.app/',
    icon: Package,
    favicon: '/projects/coletaja.png',
    tags: ['Mobile', 'Gestão'],
    accent: 'from-cyan-300/40 to-sky-300/30',
  },
  {
    name: 'Loop Infinito',
    description: 'Projeto de ensino onde ministrei aulas de lógica de programação com Java, contribuindo para a formação de novos programadores.',
    icon: LoopIcon,
    tags: ['Ensino', 'Java', 'Lógica'],
    accent: 'from-violet-300/40 to-slate-300/30',
  },
]

const highlights = [
  {
    icon: Users,
    title: 'Capacidade de Ensino',
    desc: 'Transmitir conhecimentos técnicos de forma clara e prática.',
  },
  {
    icon: Cpu,
    title: 'Versatilidade Tecnológica',
    desc: 'Domínio de tecnologias tradicionais e emergentes.',
  },
  {
    icon: Lightbulb,
    title: 'Resolução Criativa',
    desc: 'Experiência em resolver problemas com soluções inovadoras.',
  },
  {
    icon: Target,
    title: 'Foco em Impacto',
    desc: 'Formação sólida com ênfase em inovação e resultado real.',
  },
]

const experiences = [
  {
    company: 'VERT Soluções Ambientais',
    role: 'Desenvolvedor Web',
    period: '2026',
    desc: 'Desenvolvimento de site institucional para empresa que desenvolve tecnologias de reciclagem de resíduos.',
    url: 'https://vertinova.com.br/',
    favicon: 'https://www.google.com/s2/favicons?domain=vertinova.com.br&sz=64',
  },
  {
    company: 'DS Proteção',
    role: 'Desenvolvedor Web',
    period: '2026',
    desc: 'Criação de site institucional para empresa de segurança e proteção de Itapetinga - BA.',
    url: 'https://dsprotecao.vercel.app/',
    favicon: '/projects/dss.png',
  },
  {
    company: 'Loop Infinito — IF Baiano',
    role: 'Instrutor de Programação',
    period: '2025',
    desc: 'Ministrando aulas de lógica de programação com Java para formação de novos programadores.',
    favicon: '/projects/ifbaiano.png',
  },
]

const navItems = [
  { label: 'Sobre', icon: User, id: 'sobre' },
  { label: 'Skills', icon: Wrench, id: 'skills' },
  { label: 'Projetos', icon: FolderKanban, id: 'projetos' },
  { label: 'Contato', icon: AtSign, id: 'contato' },
]

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const socialLinks = [
  { icon: GitHubIcon, href: 'https://github.com/hugosb2', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hugo-santos-barros-7b764b217', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hugobs4987@gmail.com', label: 'Email' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/_barroshugo_/', label: 'Instagram' },
  { icon: WhatsAppIcon, href: 'https://wa.me/5577988144403', label: 'WhatsApp' },
]

const CODE_SNIPPETS = [
  { text: 'class HelloWorld', color: '#7c9cff' },
  { text: 'def __init__(self):', color: '#5eead4' },
  { text: 'return response.json()', color: '#fbbf24' },
  { text: 'const app = express()', color: '#f472b6' },
  { text: 'import React from "react"', color: '#c4b5fd' },
  { text: 'runApp(MaterialApp());', color: '#f472b6' },
  { text: 'print("hello world")', color: '#5eead4' },
  { text: 'if __name__ == "__main__":', color: '#fbbf24' },
  { text: 'SELECT * FROM users', color: '#7c9cff' },
  { text: 'npm run dev', color: '#94a3b8' },
  { text: 'git commit -m "feat:"', color: '#94a3b8' },
  { text: '@override', color: '#c4b5fd' },
  { text: 'Future<void> fetch()', color: '#7c9cff' },
  { text: 'try {', color: '#fbbf24' },
  { text: '} catch (e) {', color: '#f87171' },
  { text: 'console.log(e)', color: '#fbbf24' },
  { text: '<div className="app">', color: '#f472b6' },
  { text: 'function fib(n) {', color: '#7c9cff' },
  { text: 'return n <= 1 ? n', color: '#5eead4' },
  { text: 'await Future.delayed()', color: '#c4b5fd' },
  { text: 'void main() {', color: '#7c9cff' },
  { text: 'padding: 16px', color: '#fbbf24' },
  { text: 'margin: 0 auto', color: '#fbbf24' },
  { text: 'npm install react', color: '#94a3b8' },
  { text: 'export default App', color: '#c4b5fd' },
  { text: 'type Props = {}', color: '#f472b6' },
  { text: 'useEffect(() => {', color: '#c4b5fd' },
  { text: 'setState(!state)', color: '#fbbf24' },
  { text: 'flex items-center', color: '#5eead4' },
  { text: 'grid-cols-3 gap-4', color: '#5eead4' },
  { text: 'while (true) {', color: '#fbbf24' },
  { text: 'for i in range(10):', color: '#5eead4' },
  { text: 'class Widget extends', color: '#7c9cff' },
  { text: 'TextStyle(fontSize:', color: '#fbbf24' },
  { text: 'EdgeInsets.all(8)', color: '#c4b5fd' },
  { text: 'Scaffold(body:', color: '#f472b6' },
  { text: 'Navigator.push()', color: '#7c9cff' },
  { text: 'ListView.builder()', color: '#c4b5fd' },
  { text: 'setState(() {})', color: '#fbbf24' },
  { text: 'font-bold text-lg', color: '#5eead4' },
  { text: 'hover:bg-blue-500', color: '#f472b6' },
  { text: 'border rounded-xl', color: '#5eead4' },
  { text: 'shadow-lg p-4', color: '#fbbf24' },
  { text: 'yarn build', color: '#94a3b8' },
  { text: 'pip install flask', color: '#5eead4' },
  { text: 'INSERT INTO table', color: '#7c9cff' },
  { text: 'DELETE FROM users', color: '#f87171' },
  { text: 'CREATE TABLE IF NOT', color: '#7c9cff' },
]

function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const cvs = canvas
    const c = ctx

    type Drop = {
      x: number
      y: number
      speed: number
      snippet: { text: string; color: string }
      fontSize: number
      opacity: number
    }
    let drops: Drop[] = []

    function resize() {
      cvs.width = window.innerWidth
      cvs.height = window.innerHeight
    }

    function init() {
      resize()
      const count = Math.min(60, Math.floor(window.innerWidth / 22))
      drops = Array.from({ length: count }, () => ({
        x: Math.random() * cvs.width,
        y: Math.random() * cvs.height,
        speed: 0.15 + Math.random() * 0.45,
        snippet: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        fontSize: 10 + Math.random() * 5,
        opacity: 0.18 + Math.random() * 0.28,
      }))
    }

    function draw() {
      c.clearRect(0, 0, cvs.width, cvs.height)

      for (const d of drops) {
        d.y += d.speed
        if (d.y > cvs.height + 30) {
          d.y = -30
          d.x = Math.random() * cvs.width
          d.snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]
        }

        c.save()
        c.globalAlpha = d.opacity
        c.font = `${d.fontSize}px "JetBrains Mono", "Consolas", monospace`
        c.fillStyle = d.snippet.color
        c.shadowColor = d.snippet.color
        c.shadowBlur = 6
        c.fillText(d.snippet.text, d.x, d.y)
        c.restore()
      }

      animationId = requestAnimationFrame(draw)
    }

    init()
    draw()
    const handleResize = () => { resize(); init() }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[2]"
      />
      <div className="fixed inset-0 pointer-events-none z-[3] bg-gradient-to-b from-[#05060a]/85 via-[#05060a]/55 to-[#05060a]/85" />
    </>
  )
}

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <div ref={glowRef} className="cursor-glow hidden md:block" />
}

function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}) {
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
    }

    const handleMouseLeave = () => {
      btn.style.transform = 'translate(0, 0)'
    }

    btn.addEventListener('mousemove', handleMouseMove)
    btn.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove)
      btn.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <a
      ref={btnRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`magnetic-btn ${className}`}
      style={{ transition: 'transform 0.18s ease-out' }}
    >
      {children}
    </a>
  )
}

function Card3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 24
      const rotateY = (centerX - x) / 24
      card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1100px) rotateX(0) rotateY(0)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`card-3d ${className}`}
      style={{ transition: 'transform 0.2s ease-out' }}
    >
      {children}
    </div>
  )
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const reveals = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    reveals.forEach((reveal) => observer.observe(reveal))
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}

function AnimatedSection({
  children,
  className = '',
  id,
  ref,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  ref?: React.RefObject<HTMLDivElement | null>
}) {
  const sectionRef = useScrollReveal()

  return (
    <section id={id} ref={ref || (sectionRef as React.RefObject<HTMLDivElement>)} className={`relative z-10 ${className}`}>
      {children}
    </section>
  )
}

function RevealDiv({
  children,
  className = '',
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  immediate?: boolean
}) {
  return (
    <div
      className={`reveal ${immediate ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <RevealDiv className="mb-10 md:mb-14">
      <div className="section-eyebrow">
        <span className="dot" />
        {eyebrow}
      </div>
      <h2 className="heading-lg mt-4 max-w-2xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="body mt-3 max-w-2xl muted">{description}</p>
      )}
    </RevealDiv>
  )
}

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = ['sobre', 'skills', 'projetos', 'contato']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      <CursorGlow />
      <CodeRain />

      <div className="bg-vignette" />
      <div className="bg-fine-grid" />

      <div className="orbs-container">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      <div className="noise" />

      <nav className={`nav ${scrolled ? 'nav-scrolled py-3' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo('sobre')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white to-slate-300 flex items-center justify-center shadow-lg shadow-black/40">
                <span className="font-display font-bold text-sm text-slate-900">HB</span>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/40 to-white/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <p className="font-display text-sm font-semibold tracking-tight">Hugo Barros</p>
              <p className="font-mono-ui text-[10px] text-ink-3 tracking-wider uppercase">Full Stack</p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <item.icon size={13} strokeWidth={2.2} />
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/hugosb2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 transition-all duration-300 text-ink-2 hover:text-ink-0"
              aria-label="GitHub"
            >
              <GitHubIcon size={14} />
            </a>
            <button
              onClick={() => scrollTo('contato')}
              className="btn btn-primary shimmer ml-2"
            >
              <Mail size={14} />
              Contato
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 z-50"
            aria-label="Menu"
          >
            <div className="relative w-5 h-4">
              <span
                className="absolute left-0 w-full h-px bg-gray-300 transition-all duration-300 origin-center"
                style={{
                  top: mobileMenuOpen ? '50%' : '0',
                  transform: mobileMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0) rotate(0deg)',
                }}
              />
              <span
                className="absolute left-0 top-1/2 w-full h-px bg-gray-300 transition-all duration-300 -translate-y-1/2"
                style={{ opacity: mobileMenuOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 w-full h-px bg-gray-300 transition-all duration-300 origin-center"
                style={{
                  bottom: mobileMenuOpen ? '50%' : '0',
                  transform: mobileMenuOpen ? 'translateY(50%) rotate(-45deg)' : 'translateY(0) rotate(0deg)',
                }}
              />
            </div>
          </button>
        </div>

        <div
          className="md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 bg-[#070912]/98 backdrop-blur-xl border-t border-white/5"
          style={{
            maxHeight: mobileMenuOpen ? '400px' : '0',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10">

        <section id="sobre" className="min-h-[88vh] flex flex-col justify-center py-16 scroll-mt-24">
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center">
            <RevealDiv immediate className="reveal-scale flex justify-center lg:justify-start">
              <div className="relative">
                <div className="photo-ring">
                  <div className="photo-inner w-36 h-36 md:w-44 md:h-44">
                    <img
                      src="/1758549389034.png"
                      alt="Hugo Barros"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-[#0a0c14] flex items-center justify-center border border-white/10">
                  <div className="status-dot" />
                </div>
              </div>
            </RevealDiv>

            <div className="text-center lg:text-left">
              <RevealDiv immediate delay={80}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur">
                  <div className="status-dot" />
                  <span className="font-mono-ui text-[11px] text-ink-1 tracking-wider uppercase">Disponível para novos projetos</span>
                </div>
              </RevealDiv>

              <RevealDiv immediate delay={160}>
                <h1 className="heading-xl mt-6">
                  <span className="block text-ink-0">Construindo</span>
                  <span className="block text-gradient">experiências digitais</span>
                  <span className="block text-ink-0">com propósito.</span>
                </h1>
              </RevealDiv>

              <RevealDiv immediate delay={240}>
                <p className="body-lg mt-6 max-w-xl mx-auto lg:mx-0">
                  Sou <strong className="text-ink-0 font-semibold">Hugo Barros</strong>, desenvolvedor full stack e bacharelando em Sistemas de Informação no IF Baiano. Uno tecnologia, design e IA para entregar produtos que realmente fazem diferença — do mobile ao back-end, do código ao ensino.
                </p>
              </RevealDiv>

              <RevealDiv immediate delay={320}>
                <div className="flex flex-wrap items-center gap-3 mt-6 justify-center lg:justify-start text-ink-3 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} /> Itapetinga, BA
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ink-3/50" />
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap size={13} /> Bacharelado em SI
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ink-3/50" />
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} /> IF Baiano
                  </span>
                </div>
              </RevealDiv>

              <RevealDiv immediate delay={400}>
                <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
                  <MagneticButton
                    href="#contato"
                    className="btn btn-primary shimmer"
                  >
                    <Mail size={14} />
                    Entrar em contato
                    <ArrowRight size={14} />
                  </MagneticButton>
                  <MagneticButton
                    href="#projetos"
                    className="btn btn-ghost shimmer"
                  >
                    Ver projetos
                    <ArrowUpRight size={14} />
                  </MagneticButton>
                </div>
              </RevealDiv>

              <RevealDiv immediate delay={480}>
                <div className="flex gap-2.5 mt-8 justify-center lg:justify-start">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 transition-all duration-300"
                    >
                      <social.icon size={15} className="text-ink-2 group-hover:text-ink-0 transition-colors" />
                    </a>
                  ))}
                </div>
              </RevealDiv>
            </div>
          </div>

          <div className="flex justify-center mt-14">
            <div className="flex flex-col items-center gap-1 muted">
              <span className="font-mono-ui text-[10px] tracking-widest uppercase">Role para explorar</span>
              <ChevronDown className="animate-bounce text-ink-3" size={20} />
            </div>
          </div>
        </section>

        <div className="divider" />

        <AnimatedSection className="py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
            <RevealDiv>
              <div className="section-eyebrow">
                <span className="dot" />
                Sobre mim
              </div>
              <h2 className="heading-lg mt-4">
                <span className="text-gradient">Quem está por trás</span> do código.
              </h2>
              <p className="body mt-4 muted">
                Uma mistura de curiosidade técnica, paixão por ensinar e vontade constante de transformar ideias em produtos reais.
              </p>

              <div className="mt-8 surface p-6">
                <Quote className="text-ink-3 mb-3" size={22} />
                <p className="body italic text-ink-1">
                  "Acredito que boas soluções nascem da combinação entre técnica sólida, empatia com o usuário e curiosidade para experimentar."
                </p>
                <p className="mt-4 font-mono-ui text-xs text-ink-3 tracking-widest uppercase">— Hugo Barros</p>
              </div>
            </RevealDiv>

            <RevealDiv delay={120}>
              <div className="surface p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.06] border border-white/10">
                    <GraduationCap className="text-ink-0" size={16} />
                  </div>
                  <h3 className="heading-md">Trajetória</h3>
                </div>
                <div className="space-y-4 body text-ink-1">
                  <p>
                    Bacharelando em <strong className="text-ink-0 font-semibold">Sistemas de Informação</strong> no Instituto Federal Baiano — Campus Itapetinga, com vivência prática em desenvolvimento mobile, web e soluções com inteligência artificial.
                  </p>
                  <p>
                    Atuei como <strong className="text-ink-0 font-semibold">instrutor de programação</strong> no projeto <span className="text-gradient-accent font-medium">Loop Infinito</span>, ministrando aulas de lógica com Java para novos programadores.
                  </p>
                  <p>
                    Experiência com agentes de IA baseados em <strong className="text-ink-0 font-semibold">RAG</strong>, integração com LLMs e criação de chatbots e assistentes virtuais.
                  </p>
                </div>
              </div>
            </RevealDiv>
          </div>
        </AnimatedSection>

        <div className="divider" />

        <AnimatedSection className="py-16 md:py-20">
          <SectionHeader
            eyebrow="Diferenciais"
            title="O que trago para o time."
            description="Quatro pilares que guiam como trabalho, ensino e entrego valor em cada projeto."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <RevealDiv key={h.title} delay={i * 100}>
                <Card3D className="surface p-5 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.06] border border-white/10">
                      <h.icon className="text-ink-0" size={16} />
                    </div>
                    <span className="font-mono-ui text-[10px] text-ink-3 tracking-widest">0{i + 1}</span>
                  </div>
                  <h3 className="heading-md mb-2">{h.title}</h3>
                  <p className="text-sm muted leading-relaxed">{h.desc}</p>
                </Card3D>
              </RevealDiv>
            ))}
          </div>
        </AnimatedSection>

        <div className="divider" />

        <AnimatedSection id="skills" className="py-16 md:py-20 scroll-mt-24">
          <SectionHeader
            eyebrow="Experiência"
            title="Linha do tempo profissional."
            description="Empresas, projetos e instituições onde apliquei e aprofundei minhas habilidades."
          />

          <div className="timeline space-y-5">
            {experiences.map((exp, i) => (
              <RevealDiv key={exp.company} delay={i * 120}>
                <div className="relative">
                  <span className="timeline-dot" />
                  <Card3D className="ml-4">
                    <div className="surface p-5 md:p-6">
                      <div className="flex flex-col sm:flex-row gap-5">
                        <div className="tile">
                          <img src={exp.favicon} alt={exp.company} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="heading-md">{exp.role}</h3>
                            <span className="font-mono-ui text-[10px] text-ink-3 tracking-widest uppercase">{exp.period}</span>
                          </div>
                          {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline text-sm font-medium text-ink-0 hover:text-ink-0"
                            >
                              {exp.company}
                              <ArrowUpRight size={12} />
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-ink-0">{exp.company}</p>
                          )}
                          <p className="text-sm muted leading-relaxed mt-3">{exp.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                </div>
              </RevealDiv>
            ))}
          </div>
        </AnimatedSection>

        <div className="divider" />

        <AnimatedSection className="py-16 md:py-20">
          <SectionHeader
            eyebrow="Stack"
            title="Tecnologias que utilizo."
            description="Ferramentas e linguagens que uso no dia a dia — da prototipagem à produção."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((group, i) => (
              <RevealDiv key={group.category} delay={i * 90}>
                <Card3D className="surface p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/10">
                      <group.icon className="text-ink-0" size={17} />
                    </div>
                    <div>
                      <h3 className="heading-md">{group.category}</h3>
                      <p className="font-mono-ui text-[10px] text-ink-3 tracking-widest uppercase mt-0.5">{group.items.length} itens</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </Card3D>
              </RevealDiv>
            ))}
          </div>
        </AnimatedSection>

        <div className="divider" />

        <AnimatedSection id="projetos" className="py-16 md:py-20 scroll-mt-24">
          <SectionHeader
            eyebrow="Portfólio"
            title="Projetos selecionados."
            description="Trabalhos recentes em mobile, web e iniciativas educacionais."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => {
              const CardTag = p.url ? 'a' : 'div'
              const cardProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' as const } : {}
              return (
                <RevealDiv key={p.name} delay={i * 90}>
                  <CardTag {...cardProps} className="project-card surface p-6 h-full block">
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${p.accent} opacity-60`} />
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="tile w-11 h-11">
                          {p.favicon ? (
                            <img src={p.favicon} alt="" />
                          ) : (
                            <p.icon size={18} className="text-ink-0" />
                          )}
                        </div>
                        <div>
                          <h3 className="heading-md">{p.name}</h3>
                          <p className="font-mono-ui text-[10px] text-ink-3 tracking-widest uppercase mt-0.5">
                            {p.tags.join(' · ')}
                          </p>
                        </div>
                      </div>
                      {p.url && (
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-white/20 transition-colors">
                          <ExternalLink size={14} className="text-ink-2 arrow" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm muted leading-relaxed">{p.description}</p>
                  </CardTag>
                </RevealDiv>
              )
            })}
          </div>
        </AnimatedSection>

        <div className="divider" />

        <AnimatedSection className="py-16 md:py-20">
          <SectionHeader
            eyebrow="GitHub"
            title="Atividade recente."
            description="Um recorte do que venho construindo e contribuindo no GitHub."
          />
          <RevealDiv delay={120}>
            <div className="surface p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=hugosb2&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=7c9cff&icon_color=5eead4&text_color=c9d0dd"
                  alt="GitHub Stats"
                  className="rounded-xl w-full md:w-auto md:max-w-[420px]"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=hugosb2&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=7c9cff&icon_color=5eead4&text_color=c9d0dd"
                  alt="Top Languages"
                  className="rounded-xl w-full md:w-auto md:max-w-[420px]"
                />
              </div>
            </div>
          </RevealDiv>
        </AnimatedSection>

        <div className="divider" />

        <AnimatedSection className="py-16 md:py-20">
          <RevealDiv>
            <button
              onClick={() => setExpandedSection(expandedSection === 'more' ? null : 'more')}
              className="w-full surface p-5 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer group flex items-center justify-between"
            >
              <span className="flex items-center gap-3 font-medium text-ink-0">
                <Sparkles className="text-ink-0" size={18} />
                Mais sobre mim
                <span className="font-mono-ui text-[10px] text-ink-3 tracking-widest uppercase hidden sm:inline">opcional</span>
              </span>
              <div className={`w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center transition-transform duration-500 ${expandedSection === 'more' ? 'rotate-180 bg-white/[0.1]' : ''}`}>
                <ChevronDown size={16} className="text-ink-1" />
              </div>
            </button>
          </RevealDiv>
          {expandedSection === 'more' && (
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {[
                { icon: BookOpen, title: 'Acadêmico', desc: 'Bacharelando em Sistemas de Informação, sempre integrando novos conhecimentos técnicos.' },
                { icon: Gamepad2, title: 'Hobby', desc: 'Criação de jogos e modelagem 3D como combustível criativo.' },
                { icon: Palette, title: 'Interesses', desc: 'Bancos relacionais, ambientes Linux e ferramentas de IA.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="more-item"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <Card3D className="surface p-5 h-full">
                    <item.icon size={18} className="text-ink-0 mb-4" />
                    <h4 className="heading-md mb-2">{item.title}</h4>
                    <p className="text-sm muted leading-relaxed">{item.desc}</p>
                  </Card3D>
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>

        <div className="divider" />

        <AnimatedSection id="contato" className="py-16 md:py-24 scroll-mt-24">
          <RevealDiv>
            <div className="cta-panel p-10 md:p-16 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(124,156,255,0.22),transparent_70%)] pointer-events-none" />
              <div className="relative">
                <div className="section-eyebrow mx-auto">
                  <span className="dot" />
                  Vamos conversar
                </div>
                <h2 className="heading-xl mt-5">
                  <span className="text-gradient">Tem uma ideia em mente?</span>
                </h2>
                <p className="body-lg mt-5 max-w-lg mx-auto muted">
                  Estou aberto a novas oportunidades, colaborações e conversas sobre tecnologia, IA e ensino.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                  <MagneticButton
                    href="mailto:hugobs4987@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary shimmer"
                  >
                    <Mail size={14} />
                    Enviar e-mail
                    <ArrowRight size={14} />
                  </MagneticButton>
                  <MagneticButton
                    href="https://wa.me/5577988144403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost shimmer"
                  >
                    <WhatsAppIcon size={14} />
                    WhatsApp
                  </MagneticButton>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip"
                    >
                      <item.icon size={11} />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealDiv>
        </AnimatedSection>

        <footer className="pt-10 pb-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm muted">
            <p>© {new Date().getFullYear()} Hugo Barros. Feito com <span className="text-ink-1">❤</span> e muito café.</p>
            <p className="font-mono-ui text-[11px] tracking-widest uppercase text-ink-3">
              Itapetinga · Bahia · Brasil
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App