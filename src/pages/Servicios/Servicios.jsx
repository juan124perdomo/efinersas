import "./Servicios.css"
import { SEO } from "../../components/SEO/SEO"

export function Servicios() {
  return (
    <main className="page page-servicios">
      <SEO 
        title="Nuestros Servicios" 
        description="Servicios especializados en ingeniería eléctrica: Diseño y construcción de redes, subestaciones, energía fotovoltaica y levantamientos topográficos con GPS y drones." 
      />
      <h1 className="page-title">Servicios</h1>
      <p className="page-lead">
        Aquí puedes desarrollar el detalle de servicios. La navegación ya
        funciona.
      </p>
    </main>
  )
}
