import "./Nosotros.css"
import { SEO } from "../../components/SEO/SEO"
import { Hero } from "../../components/Hero/Hero"
import hero3 from "../../assets/Img/hero3.jpeg"
import {CardStats, CardInfo, CardsValores, CardCapacidades, CardEmpresasaQueConfianEnNosotros }from "../../components/Cards/Cards"
import { 
  LuMapPin, 
  LuLayers, 
  LuHardHat,
  LuShieldCheck,    
  LuCircleCheck,    
  LuUsers,          
  LuLightbulb,      
  LuActivity,      
  LuZap,          
  LuBuilding2,    
  LuSun,         
  LuNavigation,   
  LuChartNoAxesColumn,    
  LuBookOpen,
  LuHouse    
} from "react-icons/lu"
import { Link } from "react-router-dom";

export function Nosotros() {
  return (
    <>
    
      <SEO 
        title="Sobre Nosotros" 
        description="Efiner S.A.S. ofrece servicios de calidad en los sectores eléctrico y civil con un gran compromiso social." 
      />
      <Hero
        hero={hero3}
                    title="Conoce a EFINER"
                    titleHiglight="nuestra historia."
                    subTitle=" Una empresa nacida en el campo, 
           construida con 28 años de experiencia 
           real en ingeniería eléctrica colombiana."
        />
        <section className="sobreNosotros">
          <div className="sobreNosotrosHeader">
            <span className="bagde">Quiénes somos</span>
            <h2 className="sobreNosotrosTitle">La experiencia que tu proyecto necesita</h2>

          </div>
          <div className="sobreNosotrosContent">
            <p className="sobreNosotrosText">
                Somos EFINER S.A.S., una empresa especializada en ingeniería 
                eléctrica y civil con sede en el Valle del Cauca. Durante más de 
                28 años hemos desarrollado proyectos de diseño, construcción, 
                mantenimiento y optimización de sistemas energéticos en zonas 
                urbanas, rurales y de difícil gestión.
            </p>
            <p className="sobreNosotrosText">
                Nuestra experiencia nos ha permitido trabajar junto a las empresas 
                más importantes del sector energético colombiano: EPSA/CELSIA, 
                Compañía Energética de Occidente (CEO), EQUANS CAM Colombia, 
                Transportadora de Gas Internacional (TGI) y Universidad del Valle, 
                entre otras.
            </p>
            <p className="sobreNosotrosText">
                Nos diferenciamos por integrar tecnología avanzada — drones, GPS 
                y sistemas GIS — con conocimiento real de campo, incluyendo 
                operaciones en zonas de alta complejidad en los departamentos de 
                Valle del Cauca, Cauca, Tolima, Nariño y Vichada. Todo bajo 
                cumplimiento estricto de RETIE, NTC y resoluciones de la CREG.
            </p>
          </div>
            <Link to="/Servicios" className="btn btnSobreNosotros">Ver nuestros servicios</Link>
        </section>

        <section className="sobreNosotrosStasts">
          <CardStats stat="28+" title="Años de experiencia"/>
          <CardStats stat="6+" title="Grandes clientes"/>
          <CardStats stat="4" title="Departamentos atendidos"/>
          <CardStats stat="24/7" title="Atención a emergencias"/>
        </section>

        <section className="sobreNosotrosNuestraDiferencia">
          <div className="sobreNosotrosNuestraDiferenciaHeader">
            <span className="bagde">Nuestra ventaja</span>
            <h2 className="sobreNosotrosNuestraDiferenciaTitle">Qué nos diferencia</h2>
          </div>
          <div className="sobreNosotrosNuestraDiferenciaContent">
              

        <CardInfo
          icon={<LuMapPin />}
          title="Zonas de difícil gestión"
          text="Operamos en zonas rurales y de difícil acceso en 
          Valle del Cauca, Cauca, Tolima, Nariño y Vichada."
        />

        <CardInfo
          icon={<LuLayers />}
          title="Tecnología avanzada"
          text="Pilotos electricistas certificados para inspección 
          con drones, ortofotografía y GPS bajo Res 038 y 015."
        />

        <CardInfo
          icon={<LuHardHat />}
          title="Personal capacitado"
          text="Equipo en constante formación técnica en redes 
          energizadas, riesgo eléctrico y normativas del sector."
        />

        <CardInfo
          icon={<LuShieldCheck />}
          title="Cumplimiento normativo"
          text="Todos los proyectos cumplen RETIE, NTC y resoluciones 
          de la CREG, garantizando calidad en cada entrega."
        />

          </div>
        </section>

        <section className="misionYVision">
          <div className="misionYVisionHeader">
            <span className="bagde">Misión y visión</span>
            <h2 className="misionYVisionTitle">Nuestro propósito</h2>
          </div>
          <div className="misionYVisionContent">
            <div className="cardMision">
              <span className="labelMision">Misión</span>
              <h3 className="cardMisionTitle">Compromiso con cada proyecto</h3>
              <p className="cardMisionText">
                Somos una empresa confiable con excelentes recursos 
                  de ingeniería y amplia experiencia en campo, enfocada 
                  en generar seguridad, competitividad y productividad, 
                  ofreciendo calidad en todos los procesos del sector 
                  eléctrico y civil que nuestros clientes requieran.
                </p>
            </div>

            <div className="cardVision">
              <span className="labelVision">Visión</span>
              <h3 className="cardVisionTitle">Referentes en ingeniería eléctrica</h3>
              <p className="cardVisionText">
                Ser la empresa referente en ingeniería eléctrica 
                  y civil a nivel nacional, liderando proyectos de 
                  alta complejidad con tecnología avanzada, talento 
                  humano especializado y un compromiso permanente 
                  con la eficiencia energética y el desarrollo 
                  integral de nuestros clientes.
              </p>
            </div>

          </div>
        </section>

        <section className="nuestrosValores">
          <div className="nuestrosValoresHeader">
            <span className="bagde">Lo que nos define</span>
            <h2 className="nuestrosValoresTitle">Nuestros valores</h2>
          </div>
          <div className="nuestrosValoresContent">

          <CardsValores
            icon={<LuShieldCheck />}
            title="Seguridad"
            text="Protocolos estrictos en cada operación para proteger a nuestro equipo y clientes."
          />
          <CardsValores
            icon={<LuCircleCheck />}
            title="Calidad"
            text="Cumplimos los estándares técnicos del operador de red y la normativa vigente."
          />
          <CardsValores
            icon={<LuUsers />}
            title="Compromiso"
            text="Asumimos cada proyecto como propio, trabajando con dedicación hasta la entrega."
          />
          <CardsValores
            icon={<LuLightbulb />}
            title="Innovación"
            text="Drones, GPS y GIS para optimizar tiempos y reducir costos en campo."
          />
          <CardsValores
            icon={<LuActivity />}
            title="Responsabilidad"
            text="Entregamos en los tiempos y condiciones acordadas, sin excusas."
          />
          <CardsValores
            icon={<LuHouse />}
            title="Trabajo social"
            text="Impacto real en comunidades rurales y zonas de difícil gestión."
          />
            





          </div>
        </section>
        
        <section className="nuestrasCapacidades">
          <div className="nuestrasCapacidadesHeader">
            <span className="bagde">Nuestras capacidades</span>
            <h2 className="nuestrasCapacidadesTitle">Capacidades técnicas</h2>
          </div>
          <div className="nuestrasCapacidadesContent">
            <CardCapacidades
              icon={<LuZap />}
              title="Redes MT/BT"
              text="Diseño, construcción y mantenimiento de redes eléctricas de media y baja tensión."
            />
            <CardCapacidades
              icon={<LuBuilding2 />}
              title="Subestaciones"
              text="Montaje y calibración de protecciones en media tensión, incluyendo trabajos en caliente."
            />
            <CardCapacidades
              icon={<LuSun />}
              title="Energía solar"
              text="Diseño e instalación de sistemas fotovoltaicos para zonas conectadas y ZNI."
            />
            <CardCapacidades
              icon={<LuNavigation />}
              title="GIS y drones"
              text="Levantamientos georreferenciados, ortofotografía e inventarios bajo Res 038 y 015."
            />
            <CardCapacidades
              icon={<LuChartNoAxesColumn />}
              title="Mediciones eléctricas"
              text="Instalación y mantenimiento de sistemas de medición industrial y macromedición."
            />
            <CardCapacidades
              icon={<LuBookOpen />}
              title="Capacitación"
              text="Formación técnica en riesgo eléctrico, redes energizadas y normativas RETIE/NTC."
            />
          </div>
        </section>

        <section className="empresasQueConfianEnNosotros">
          <div className="empresasQueConfianEnNosotrosHeader">
            <span className="bagde">Empresas que confían en nosotros</span>
            <h2 className="empresasQueConfianEnNosotrosTitle">Nuestros clientes</h2>
          </div>
          <div className="empresasQueConfianEnNosotrosContent">
            <CardEmpresasaQueConfianEnNosotros
              name="EPSA / CELSIA"
              text="Operador de red · Valle del Cauca"
            />
            <CardEmpresasaQueConfianEnNosotros
              name="CEO"
              text="Compañía Energética de Occidente"
            />
            <CardEmpresasaQueConfianEnNosotros
              name="EQUANS"
              text="CAM Colombia · Servicios energéticos"
            />
            <CardEmpresasaQueConfianEnNosotros
              name="TGI"
              text="Transportadora de Gas Internacional"
            />
            <CardEmpresasaQueConfianEnNosotros
              name="ING CONS S.A.S."
              text="Ingeniería y construcción"
            />
            <CardEmpresasaQueConfianEnNosotros
              name="Universidad del Valle"
              text="Educación · Sector público"
            />
          </div>
        </section>
    </>
                  )
}
