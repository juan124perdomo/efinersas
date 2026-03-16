
import './App.css'
import { Navbar } from './components/Nav/Nav'
import {Hero} from "./components/Hero/Hero"
import {CardService} from "./components/Cards/Cards"
import hero1  from "./assets/Img/hero1.jpeg"
import { LuDraftingCompass } from "react-icons/lu";

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
        <span className='quienesTrayectoria'>Nuestra trayectoria</span>
        <h2 class="quienesTitle">Quienes somos</h2>
        <div className="textContainer">
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
      </section>

      <section className="servicios">
        <h2 className="serviciosTitle">Servicios</h2>
         <div className="serviciosContainer">
            <CardService icon={<LuDraftingCompass/>}
            title="Diseño E ingenieria"
                          text="Diseños funcionales de redes eléctricas de media y baja tensión aplicando las normas
                          vigentes de construcción, seguridad y del operador de red. "/>
            <CardService/>
         
         </div>
      </section>
    </>
  )
}


export default App
