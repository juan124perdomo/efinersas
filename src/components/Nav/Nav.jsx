import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  IoMenu,
  IoHome,
  IoMail,
  IoCall,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoBriefcase,
} from "react-icons/io5"
import { HiLightningBolt } from "react-icons/hi"
import { FaUsers } from "react-icons/fa6"
import "./Nav.css"

const links = [
  { to: "/", icon: <IoHome className="icon" />, label: "Inicio", end: true },
  {
    to: "/servicios",
    icon: <HiLightningBolt className="icon" />,
    label: "Servicios",
  },
  {
    to: "/proyectos",
    icon: <IoBriefcase className="icon" />,
    label: "Proyectos",
  },
  { to: "/nosotros", icon: <FaUsers className="icon" />, label: "Nosotros" },
  {
    to: "/contacto",
    icon: <IoMail className="icon" />,
    label: "Contacto",
    className: "contactos",
  },
]

export const Navbar = () => {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="header">
      <h3 className="title">
        EFINER<span className="titleStrong">S.A.S.</span>
      </h3>

      <nav className="nav">
        <IoMenu
          className="icon iconMenu"
          onClick={() => setAbierto(!abierto)}
          aria-label="Abrir menú"
          aria-expanded={abierto}
        />

        <ul className={abierto ? "navList activo" : "navList"}>
          {links.map(({ to, icon, label, end, className }) => (
            <li key={to} className={className}>
              <NavLink
                to={to}
                end={end}
                onClick={cerrar}
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                {icon} {label}
              </NavLink>
            </li>
          ))}

          <li className="contactoDirecto">
            <div className="contacto-container">
              <span className="contacto-titulo">CONTACTO DIRECTO</span>
              <div className="contacto-item">
                <IoCall className="icon-small" />
                <span>+57 312 2932695</span>
              </div>
              <div className="contacto-item">
                <IoMail className="icon-small" />
                <span>Comercial@efinersas.com</span>
              </div>
              <div className="redes-sociales">
                <div className="social-box">
                  <IoLogoLinkedin />
                </div>
                <div className="social-box">
                  <IoLogoInstagram />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
