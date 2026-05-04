import "./Proyectos.css"
import { SEO } from "../../components/SEO/SEO"
import { Link } from "react-router-dom"

export function Proyectos() {
  return (
    <main className="page-proyectos">
      <SEO 
        title="Proyectos Realizados" 
        description="Conoce los proyectos ejecutados por Efiner S.A.S. para EPSA CELSIA, CEO, EQUANS CAM COLOMBIA y otras empresas en instalación y socialización." 
      />
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h1 className="coming-soon-title">En Desarrollo</h1>
          <p className="coming-soon-text">
            Estamos trabajando para mostrarte nuestro portafolio de proyectos de manera interactiva. Vuelve pronto para descubrir nuestra experiencia en el sector.
          </p>
          <div className="coming-soon-action">
            <Link to="/" className="btn">
              <span className="btnLink">Volver al Inicio</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
