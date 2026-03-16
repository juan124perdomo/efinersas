import React, {useState} from "react"
import { IoMenu,IoHome,IoBriefcase,IoMail,IoCall,IoLogoLinkedin,IoLogoInstagram } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";
import "./Nav.css"


export const Navbar = ()=>{

const [abierto, setAbierto] = useState(false);

    return <header className="header">
        <h3 className="title">EFINER<span className="titleStrong">S.A.S.</span></h3>
        
                <nav className="nav">
                    
                    <IoMenu className="icon iconMenu" onClick={()=>setAbierto(!abierto)} />
                    <ul className={abierto ? "navList activo": "navList"}>
                    
                        <li> <IoHome className="icon"/> Inicio</li>
                        <li><HiLightningBolt className="icon"/>  Servicios</li>
                        <li><IoBriefcase className="icon"/>Proyectos</li>
                        <li><FaUsers className="icon"/>Nosotros</li>
                        <li className="contactos"><IoMail className="icon"/>Contacto</li>
                        <li className="contactoDirecto">
                            <div className="contacto-container">
                                <span className="contacto-titulo">CONTACTO DIRECTO</span>
                                
                                <div className="contacto-item">
                                    <IoCall className="icon-small" />
                                    <span>+57 (300) 123 4567</span>
                                </div>

                                <div className="contacto-item">
                                    <IoMail className="icon-small" />
                                    <span>proyectos@efiner.com.co</span>
                                </div>

                                <div className="redes-sociales">
                                    <div className="social-box"><IoLogoLinkedin /></div>
                                    <div className="social-box"><IoLogoInstagram /></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                
                </nav>

    </header>
}