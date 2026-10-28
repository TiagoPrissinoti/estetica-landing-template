import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Menu } from 'lucide-react'
import { navigation } from '@/config/site'
import { useScrolled } from '@/hooks/useScrolled'
import { Logo } from '@/components/ui/Logo'
import { ContactAction } from '@/components/ui/ContactAction'
import { Modal } from '@/components/ui/Modal'

export function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <div className="header-actions"><ContactAction className="button button-gold header-cta">Agendar avaliação <ArrowUpRight size={16} /></ContactAction><button className="icon-button menu-toggle" onClick={() => setOpen(true)} aria-label="Abrir menu" aria-expanded={open} aria-haspopup="dialog"><Menu size={25} /></button></div>
      </div>
    </header>
    <AnimatePresence>{open && <Modal title="Explore a Aura" onClose={() => setOpen(false)} className="mobile-menu">
      <motion.nav aria-label="Navegação mobile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>{navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} /></a>)}</motion.nav>
      <p className="mobile-menu-note">Estética avançada. Cuidado com essência.</p>
    </Modal>}</AnimatePresence>
  </>
}
