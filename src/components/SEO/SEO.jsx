import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, name, type }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://efinersas.com/';
  const fullTitle = title ? `${title} | Efiner S.A.S.` : 'Efiner S.A.S. | Ingeniería y Eficiencia Energética';
  const finalDescription = description || "Efiner S.A.S. ofrece soluciones integrales en ingeniería eléctrica: energía fotovoltaica, diseño y construcción de redes MT/BT, levantamientos georreferenciados.";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={finalDescription} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || "Efiner S.A.S."} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
    </Helmet>
  );
};
