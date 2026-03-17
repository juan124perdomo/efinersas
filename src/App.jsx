
import './App.css'
import { Navbar } from './components/Nav/Nav'
import {Hero} from "./components/Hero/Hero"
import {CardService} from "./components/Cards/Cards"
import { Footer } from './components/Footer/Footer'
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
                          text="En Efiner S.A.S. diseñamos redes eléctricas de media y baja tensión bajo normas vigentes y del operador de red, brindando soluciones seguras y eficientes para proyectos urbanos, rurales e industriales."/>
            <CardService icon={<LuMap/>} 
                          title="Levantamientos Georreferenciados"
                          text="En Efiner S.A.S. realizamos levantamientos georreferenciados para ubicar postes y puntos clave con precisión y eficiencia."/>

            <CardService icon={<LuGauge/>}
                          title="Mediciones Industriales"
                          text="En Efiner S.A.S. realizamos mediciones industriales y montaje de sistemas de energía, cumpliendo RETIE/NTC y estándares del operador de red."
                        />
            <CardService icon={<LuWrench />}
                          title="Construccion y mantenimiento"
                          text="En Efiner S.A.S. realizamos construcción y mantenimiento de redes eléctricas MT y BT, incluyendo redes y subestaciones subterráneas, con seguridad y cumplimiento del RETIE, NTC y estándares del operador de red."/>
         
         </div>
      </section>
      <Footer/>
    </>
  )
}


export default App
