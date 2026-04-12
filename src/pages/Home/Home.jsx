import { Hero } from "../../components/Hero/Hero"
import { CardService } from "../../components/Cards/Cards"
import hero1 from "../../assets/Img/hero1.jpeg"
import quienesMovil from "../../assets/Img/quienes somos.png"
import quienesPC from "../../assets/Img/quienes.jpg"
import { SEO } from "../../components/SEO/SEO"
import { FaBolt, FaTools, FaLeaf, FaSolarPanel } from "react-icons/fa";
import "./Home.css"

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

      <section className="quienesSomos">
        <div className="textContainer">
          <span className="bagde">Nuestra trayectoria</span>
          <h2 className="quienesTitle">Quienes somos</h2>
          <p className="quienesText">
            Somos una empresa confiable con excelentes recursos de ingeniería Y
            de gran Experiencia personal con un enfoque en la generación de
            seguridad, competitividad y productividad, ofreciendo calidad en
            todos y cada uno de los procesos del Sector eléctrico y civil que
            nuestros Clientes requieran
          </p>

          <p className="quienesText">
            Ofrecemos a nuestros clientes una ventaja diferencial de un trabajo
            que involucra practica y capacitación constante, logrando así un
            resultado profesional más identificado con nuestra empresa,
            nuestros clientes y en permanente desarrollo integral.
          </p>
        </div>

        <div className="quienesImage">
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
        <h2 className="porQueElegirnos">¿Por qué elegirnos?</h2>
      </section>
    </>
  )
}
