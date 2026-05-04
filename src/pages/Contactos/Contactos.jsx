import React, { useState } from "react";
import "./Contactos.css";
import { SEO } from "../../components/SEO/SEO";
import { Hero } from "../../components/Hero/Hero";
import { CTA } from "../../components/CTA/CTA";
import { CardInfo } from "../../components/Cards/Cards";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import heroImg from "../../assets/Img/hero2.jpeg"; 

export function Contactos() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipoServicio: "",
    descripcion: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre es obligatorio";
    if (!formData.email.trim()) newErrors.email = "Email es obligatorio";
    if (!formData.tipoServicio) newErrors.tipoServicio = "Seleccione un tipo de servicio";
    if (!formData.descripcion.trim()) newErrors.descripcion = "Descripción es obligatoria";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <main className="page-contacto">
      <SEO
        title="Contacto"
        description="Ponte en contacto con Efiner S.A.S. para cotizar servicios de ingeniería eléctrica, fotovoltaica y levantamientos georreferenciados."
      />

      {/* HERO */}
      <Hero
        hero={heroImg}
        title="Hablemos de tu proyecto "
        titleHiglight="eléctrico"
        subTitle="Nuestro equipo está listo para asesorarte en diseño, construcción, mantenimiento y soluciones energéticas."
      />

      {/* BAR OF TRUST */}
      <section className="trust-bar">
        <div className="trust-item">
          <h2 className="stat-number">28+</h2>
          <p className="stat-label">Años de experiencia</p>
        </div>
        <div className="trust-item">
          <h2 className="stat-number">15+</h2>
          <p className="stat-label">Municipios cubiertos</p>
        </div>
        <div className="trust-item">
          <h2 className="stat-number">24/7</h2>
          <p className="stat-label">Atención de emergencias</p>
        </div>
        <div className="trust-item">
          <h2 className="stat-number">&lt;24h</h2>
          <p className="stat-label">Tiempo de respuesta</p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="contact-cards">
        <CardInfo
          icon={<FaPhoneAlt />}
          title="Teléfono / WhatsApp"
          text="312 293 2695"
        />
        <CardInfo
          icon={<FaEnvelope />}
          title="Email comercial"
          text="comercial@efinersas.com"
        />
        <CardInfo
          icon={<FaEnvelope />}
          title="Email gerencia"
          text="jeperdomo@efinersas.com"
        />
        <CardInfo
          icon={<FaMapMarkerAlt />}
          title="Sede"
          text="Valle del Cauca, Colombia"
        />
      </section>

      {/* FORM + SIDEBAR */}
      <section className="form-section">
        <div className="form-container">
          {submitted ? (
            <div className="success-message">
              <h2>¡Gracias! Hemos recibido tu solicitud.</h2>
              <p>Nos pondremos en contacto a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                />
                {errors.nombre && <span className="error">{errors.nombre}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de su empresa"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="300 000 0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tipoServicio">Tipo de servicio *</label>
                <select
                  id="tipoServicio"
                  name="tipoServicio"
                  value={formData.tipoServicio}
                  onChange={handleChange}
                >
                  <option value="">Seleccione un servicio...</option>
                  <option>Redes eléctricas MT/BT</option>
                  <option>Subestaciones eléctricas</option>
                  <option>Energía solar fotovoltaica (ZNI)</option>
                  <option>Mantenimiento preventivo y correctivo</option>
                  <option>Mediciones industriales (RETIE/NTC)</option>
                  <option>Levantamientos GIS / Georreferenciación</option>
                  <option>Inspección con drones</option>
                  <option>Recuperación de pérdidas de energía</option>
                  <option>Capacitación eléctrica</option>
                  <option>Socialización zonas difícil gestión</option>
                  <option>Otro</option>
                </select>
                {errors.tipoServicio && <span className="error">{errors.tipoServicio}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="descripcion">Descripción *</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Cuéntenos más sobre su requerimiento..."
                />
                {errors.descripcion && <span className="error">{errors.descripcion}</span>}
              </div>
              <button type="submit" className="btn">
                <span className="btnLink">Solicitar asesoría</span>
              </button>
            </form>
          )}
        </div>
        <aside className="sidebar">
          <div className="sidebar-card whatsapp-card">
            <h3>¿Necesitas atención inmediata?</h3>
            <p>Escríbenos por WhatsApp y te respondemos al instante.</p>
            <a href="https://wa.me/573122932695" target="_blank" rel="noopener noreferrer" className="btn">
              <span className="btnLink">Escribir por WhatsApp</span>
            </a>
          </div>
          <div className="sidebar-card emergency-card">
            <h3>EMERGENCIAS</h3>
            <p>Atención de daños 24/7</p>
            <a href="tel:+573122932695" className="btn">
              <span className="btnLink">Llamar línea de emergencia</span>
            </a>
          </div>
        </aside>
      </section>

      {/* COVERAGE + CONFIDENCE */}
      <section className="coverage-section">
        <div className="coverage-left">
          <h3>Municipios de cobertura</h3>
          <div className="pills">
            {["Palmira", "Cali", "Buga", "Tuluá", "Buenaventura", "Jamundí", "Pradera", "Florida", "Zarzal", "Dagua", "Roldanillo", "La Unión", "Versalles", "Sevilla", "Trujillo"].map(city => (
              <span key={city} className="pill">{city}</span>
            ))}
          </div>
          <p className="note">También: Cauca · Tolima · Nariño · Vichada</p>
        </div>
        <div className="coverage-right">
          <h3>Por qué confiar en nosotros</h3>
          <ul className="confidence-list">
            <li><FaCheckCircle className="check-icon" /> 28 años de experiencia en el sector eléctrico colombiano</li>
            <li><FaCheckCircle className="check-icon" /> Proyectos con EPSA CELSIA, EQUANS CAM, TGI y U. del Valle</li>
            <li><FaCheckCircle className="check-icon" /> Atención en zonas urbanas, rurales y de difícil acceso</li>
            <li><FaCheckCircle className="check-icon" /> Personal certificado RETIE con equipos especializados</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTA />
    </main>
  );
}
