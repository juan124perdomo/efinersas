import "../Servicios/Servicios.css"
import { SEO } from "../../components/SEO/SEO"

export function Contactos() {
  return (
    <main className="page page-contacto">
      <SEO 
        title="Contacto" 
        description="Ponte en contacto con Efiner S.A.S. para cotizar servicios de ingeniería eléctrica, fotovoltaica y levantamientos georreferenciados. Teléfono: 312-2932695." 
      />
      <h1 className="page-title">Contacto</h1>
      <p className="page-lead">
        Formulario o datos de contacto — la ruta coincide con el ítem del menú.
      </p>
    </main>
  )
}
