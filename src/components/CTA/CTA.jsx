import { FaWhatsapp } from "react-icons/fa";
import "./CTA.css";
import React from 'react';

export function CTA() {
  return (
    <section className="cta">
      <div className="ctaLightningPattern"></div>
      <div className="ctaGoldenGlow"></div>
      
      <div className="ctaContent">
        <span className="bagde">Hablemos</span>
        
        <h2 className="ctaTitle">
          ¿Listo para llevar tu <span className="ctaHighlight">proyecto eléctrico</span> al siguiente nivel?
        </h2>
        
        <p className="ctaText">
          Desde grandes infraestructuras industriales hasta instalaciones residenciales — estamos listos para asesorarte sin costo inicial.
        </p>
        
        <div className="ctaActions">
          <a className="ctaBtnWhatsapp" href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="ctaIconWhatsapp" />
            <span>Escríbenos al WhatsApp</span>
          </a>
          
          <a className="ctaBtnSecondary" href="/servicios">
            Ver Servicios
          </a>
        </div>
        
        <p className="ctaTrust">
          Respuesta inmediata garantizada en horario comercial
        </p>
      </div>
      
      <div className="ctaOverlayTop"></div>
      <div className="ctaOverlay"></div>
    </section>
  );
}
