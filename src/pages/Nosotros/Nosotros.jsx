import "./Nosotros.css"
import { SEO } from "../../components/SEO/SEO"
import { Hero } from "../../components/Hero/Hero"
import hero3 from "../../assets/Img/hero3.jpeg"
import {CardService}from "../../components/Cards/Cards"
import { FaBullseye,FaEye } from "react-icons/fa";

export function Nosotros() {
  return (
    <>
    
      <SEO 
        title="Sobre Nosotros" 
        description="Efiner S.A.S. ofrece servicios de calidad en los sectores eléctrico y civil con un gran compromiso social." 
      />
      <Hero
        hero={hero3}
                    title="Ingeniería con"
                    titleHiglight="experiencia."
                    subTitle="  Más de 28 años de experiencia en el sector eléctrico, brindando soluciones confiables con altos estándares de calidad y seguridad."
        />

      <section className="IdentityContainer">
        <div className="identity">
          <h2 className="identityTitle">Nuestra Esencia</h2>
          <p className="identityText">
            Somos una empresa con más de 28 años de experiencia en el sector eléctrico, 
            especializada en soluciones integrales para redes, subestaciones y eficiencia energética.
            Ejecutamos proyectos en entornos complejos garantizando seguridad, cumplimiento normativo
            y optimización de costos.
          </p>
          
        </div>
        <div className="containerCardsIdentity">
            <CardService
                      icon={<FaBullseye />}
                      title="Mision"
                      text="Brindar soluciones integrales en ingeniería eléctrica y civil, enfocadas en el diseño, construcción, mantenimiento y optimización de sistemas energéticos, garantizando altos estándares de calidad, seguridad y eficiencia para nuestros clientes."
                      
                    />
            <CardService
                      icon={<FaEye/>}
                      title="Vision"
                      text="Ser una empresa líder a nivel nacional en el sector eléctrico, reconocida por nuestra experiencia técnica, innovación en soluciones energéticas y capacidad para desarrollar proyectos en zonas de alta complejidad operativa y social."
                    
                    />
        </div>

      </section>
        
                  </>
                  )
}
