import { Hero } from "../../components/Hero/Hero"
import { CardService, CardPorQueElegirnos } from "../../components/Cards/Cards"
import hero1 from "../../assets/Img/hero1.jpeg"
import quienesMovil from "../../assets/Img/quienes somos.png"
import quienesPC from "../../assets/Img/quienes.jpg"
import { SEO } from "../../components/SEO/SEO"
import { FaBolt, FaTools, FaLeaf, FaSolarPanel, FaHardHat, FaWhatsapp } from "react-icons/fa";
import { MdVerified, MdTroubleshoot, MdEnergySavingsLeaf } from "react-icons/md"
import "./Home.css"
import { Link } from "react-router-dom";


export function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Lideres en el sector eléctrico colombiano. Diseño de redes MT/BT, levantamientos georreferenciados, drones y energía solar."
      />
      <Hero
        hero={hero1}
        title="Ingeniería eléctrica integral"
        titleHiglight="y eficiencia energética."
        subTitle="Diseñamos, construimos y optimizamos redes eléctricas, subestaciones y sistemas de medición con soluciones innovadoras y seguras."
      />

      <section className="pageHomeQuienesSomos">
        <div className="pageHomeQuienesSomosTextContainer">
          <span className="bagde">Nuestra trayectoria</span>
          <h2 className="pageHomeQuienesTitle">Quienes somos</h2>
          <p className="pageHomeQuienesText">
            Somos una empresa de ingeniería eléctrica y civil con más de 28 años 
            de experiencia, enfocada en generar seguridad, competitividad y 
            productividad en cada proyecto que emprendemos.
          </p>

          <p className="pageHomeQuienesText">
            Ofrecemos a nuestros clientes una ventaja diferencial: práctica 
            constante, capacitación permanente y un equipo comprometido con 
            resultados de alta calidad en el sector eléctrico y civil.
          </p>
          <button className="btn btnConocenos"><Link to="/Nosotros" className="btnLink">Conocenos</Link></button>
        </div>


        <div className="pageHomeQuienesImage">
          <picture>
            <source srcSet={quienesMovil} media="(max-width: 767px)" />
            <source srcSet={quienesPC} media="(min-width: 768px)" />
            <img
              src={quienesPC}
              alt="Ingenieros trabajando en subestación eléctrica"
            />
          </picture>
        </div>
      </section>

      <section className="servicios">
        <h2 className="serviciosTitle">Servicios</h2>
        <div className="serviciosContainer">
          <CardService
            icon={<FaBolt />}
            title="Ingeniería y Diseño"
            text="Diseño de redes eléctricas y subestaciones bajo normativa RETIE."
            to="/servicios"
          />
          <CardService
            icon={<FaTools />}
            title="Construcción y Mantenimiento"
            text="Construcción y mantenimiento de redes eléctricas y subestaciones."
            to="/servicios"
          />

          <CardService
            icon={<FaLeaf />}
            title="Eficiencia Energética"
            text="Optimización del consumo y reducción de pérdidas de energía."
            to="/servicios"
          />
          <CardService
            icon={<FaSolarPanel />}
            title="Energía Solar"
            text="Diseño e instalación de sistemas fotovoltaicos."
            to="/servicios"
          />
        </div>
      </section>

      <section className="porQueElegirnos">
        <span className="bagde">Nuestro respaldo técnico</span>
        <h2 className="porQueElegirnosTitle">Soluciones eléctricas con respaldo técnico y normativo</h2>
        <div className="porQueElegirnosContainerCards">
          <CardPorQueElegirnos
            icon={<MdVerified />}
            title="Cumplimiento RETIE"
            text="Garantizamos que todas nuestras intervenciones cumplen rigurosamente con el Reglamento Técnico de Instalaciones Eléctricas."
          />

          <CardPorQueElegirnos
            icon={<FaHardHat />}
            title="Equipo Certificado"
            text="Contamos con personal altamente calificado y en constante actualización técnica para cada fase del proyecto."
          />

          <CardPorQueElegirnos
            icon={<MdTroubleshoot />}
            title="Diagnóstico Técnico"
            text="Realizamos estudios detallados para identificar puntos de mejora y riesgos potenciales en su infraestructura actual."
          />

          <CardPorQueElegirnos
            icon={<MdEnergySavingsLeaf />}
            title="Enfoque Sostenible"
            text="Integramos tecnologías de energía limpia y sistemas de ahorro para reducir el impacto ambiental y costos operativos."
          />


        </div>
      </section>
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
            <a className="ctaBtnWhatsapp" href="https://wa.me/3122932695" target="_blank" rel="noopener noreferrer">
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

    </>
  )
}
