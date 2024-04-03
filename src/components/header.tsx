import logo from '../assets/logo.svg'
import Image from 'next/image'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <Image width={100} height={100} priority src={logo} alt="logo nlw unit" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}
