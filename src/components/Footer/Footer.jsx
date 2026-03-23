import React from "react"
import "./Footer.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="containerFooter">
            <div className="footerTitle">
                <img className="footerLogo" src="/public/logo.png" alt="logo efiner" />
                <h3 className="titleFooter">EFINER<span className="titleFooterStrong">S.A.S.</span></h3>

                <p className="textFooter">
                Líderes en soluciones de ingeniería eléctrica y civil.
                Comprometidos con el desarrollo de infraestructura para un mundo más eficiente.
                </p>
            </div>
            <div className="footerServicios">
                <h3 className="titleSub">Servicios</h3>
                    <ul className="footerList">
                        <li className="footerListItem">Diseño E ingenieria</li>
                        <li className="footerListItem">Perdidas de Energia</li>
                        <li className="footerListItem">Capacitacion y Formacion</li>
                        <li className="footerListItem">Energia Fotovoltaica</li>
                    </ul>
            </div>
            <div className="footerContact">
                <h3 className="titleSub">Contactos</h3>
                <ul className="footerList">
                    <li className="footerListItem">
                        <a href="tel:+573122932695" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <BsFillTelephoneFill className="footerIcon"/>+57 312 2932695
                        </a>
                    </li>
                    <li className="footerListItem">
                        <a href="mailto:comercial@efinersas.com" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <IoMdMail className="footerIcon"/>comercial@efinersas.com
                        </a>
                    </li>
                </ul>
            </div>
            </div>

        </footer>
    )
}