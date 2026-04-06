import "./App.css"
import { Routes, Route } from "react-router-dom"
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop"
import { Navbar } from "./components/Nav/Nav"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Servicios } from "./pages/Servicios/Servicios"
import { Proyectos } from "./pages/Proyectos/Proyectos"
import { Nosotros } from "./pages/Nosotros/Nosotros"
import { Contactos } from "./pages/Contactos/Contactos"

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contactos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
