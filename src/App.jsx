
import './App.css'
import { Navbar } from './components/Nav/Nav'
import {Hero} from "./components/Hero/Hero"
import {CardService} from "./components/Cards/Cards"
import hero1  from "./assets/Img/hero1.jpeg"
import quienesMovil from "./assets/Img/quienes somos.png"
import quienesPC from "./assets/Img/quienes.jpg"
import { LuDraftingCompass, LuMap, LuGauge,LuWrench  } from "react-icons/lu";


function App() {


  return (
    <>
      <Navbar/>
      <Hero 
      hero={hero1}
      title="Expertos en eficiencia"
            titleHiglight="comprometidos con tu éxito."
            subTitle="Transformamos la infraestructura energética a través de consultoría técnica especializada."/> 


      <section className="quienesSomos">
        
        
        <div className="textContainer">
          <span className='quienesTrayectoria'>Nuestra trayectoria</span>
           <h2 class="quienesTitle">Quienes somos</h2>
            <p className="quienesText">
              Somos una empresa confiable con excelentes recursos de
              ingeniería Y de gran Experiencia personal con un enfoque en la
              generación de seguridad, competitividad y productividad,
              ofreciendo calidad en todos y cada uno de los procesos del
              Sector eléctrico y civil que nuestros Clientes requieran</p>

            <p className="quienesText">
              Ofrecemos a nuestros clientes una ventaja diferencial de un
              trabajo que involucra practica y capacitación constante, logrando
              así un resultado profesional más identificado con nuestra empresa,
              nuestros clientes y en permanente desarrollo integral.

              </p>
        </div>
        
        
        <div className="quienesImage">
        <picture>
          <source
            srcSet={quienesMovil}
            media="(max-width: 767px)"/>
          <source
            srcSet={quienesPC}
            media="(min-width: 768px)"
          />
          {/* Imagen de respaldo por si el navegador no soporta <picture> */}
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
            <CardService icon={<LuDraftingCompass/>}
            title="Diseño E ingenieria"
                          text="En Efiner S.A.S. diseñamos redes eléctricas de media y baja tensión, cumpliendo normas vigentes y requisitos del operador de red, para proyectos urbanos, rurales e industriales, garantizando soluciones seguras, eficientes y técnicamente viables."/>
            <CardService icon={<LuMap/>} 
                          title="Levantamientos Georreferenciados"
                          text="En Efiner S.A.S. realizamos Levantamientos Georreferenciados para la ubicación precisa de postes y puntos clave, garantizando exactitud y eficiencia en tus proyectos"/>

            <CardService icon={<LuGauge/>}
                          title="Mediciones Industriales"
                          text="En Efiner S.A.S. ofrecemos soluciones en mediciones industriales, realizando montaje e instalación de sistemas de medición de energía, cumpliendo normativa vigente RETIE/NTC y estándares del operador de red."
                        />
            <CardService icon={<LuWrench />}
                          title="Construccion y mantenimiento"
                          text="En Efiner S.A.S. ofrecemos construcción y mantenimiento de redes eléctricas de media y baja tensión, incluyendo redes y subestaciones subterráneas, garantizando seguridad, calidad y cumplimiento del RETIE, NTC y estándares del operador de red."/>
         
         </div>
      </section>
    </>
  )
}


export default App
