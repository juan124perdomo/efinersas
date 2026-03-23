import "../Servicios/Servicios.css"
import { SEO } from "../../components/SEO/SEO"

export function Nosotros() {
  return (
    <main className="page page-nosotros">
      <SEO 
        title="Sobre Nosotros" 
        description="Efiner S.A.S. ofrece servicios de calidad en los sectores eléctrico y civil con un gran compromiso social." 
      />
      <h1 className="page-title">Nosotros</h1>
      <p className="page-lead">
        Página institucional — enlazada desde el menú.
      </p>
    </main>
  )
}
