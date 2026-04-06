import "./Servicios.css"
import { SEO } from "../../components/SEO/SEO"
import {CardService}from "../../components/Cards/Cards"
import { FaBolt, FaTools, FaLeaf, FaSolarPanel, FaChalkboardTeacher,FaTachometerAlt, FaMapMarkedAlt } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";
import { Hero } from "../../components/Hero/Hero"
import hero2 from "../../assets/Img/hero2.jpeg"

export function Servicios() {
  return (
    <>
    <SEO 
        title="Nuestros Servicios" 
        description="Servicios especializados en ingeniería eléctrica: Diseño y construcción de redes, subestaciones, energía fotovoltaica y levantamientos topográficos con GPS y drones." 
      />
    <Hero
              hero={hero2}
              title="Nuestros"
              titleHiglight="Servicios."
              subTitle="Diseñamos, construimos y optimizamos sistemas eléctricos con altos estándares de calidad y cumplimiento normativo."
            />
  
    <section className="servicePageContainer">

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
              icon={<FaTachometerAlt />}
              title="Mediciones Eléctricas"
              text="Instalación y mantenimiento de sistemas de medición bajo normativa RETIE y NTC."
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

      <CardService
                  icon={<FaMapMarkedAlt  />}
                  title="Georreferenciación y GIS"
                  text="Levantamientos con GPS y drones para análisis y control de redes eléctricas."
                  to="/servicios"
                />
      <CardService
                  icon={<TbDrone/>}
                  title="Inspección con Drones"
                  text="Inspección y monitoreo de redes eléctricas mediante tecnología aérea."
                  to="/servicios"
                />

      <CardService
            icon={<FaChalkboardTeacher />}
            title="Capacitación Técnica"
            text="Formación en riesgo eléctrico, normativas y operación de redes energizadas."
             to="/servicios"
          />

      
    </section>
    </>
  )
}
