// Menú hamburguesa
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);

    // aria-expanded para accesibilidad
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Cerrar el menú cuando se hace click en un link (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
// POPUP de tarjetas de servicios con texto extendido
(() => {
  const overlay = document.getElementById('service-overlay');
  const popupTitle = document.getElementById('popup-title');
  const popupDesc = document.getElementById('popup-description');
  const closeBtn = document.querySelector('.close-btn');
  const serviceItems = document.querySelectorAll('.service-item');

  // Información detallada de cada servicio
  const serviceDetails = {
    "Automatización de Datos para MetaAds": `
      Automatizamos todo el flujo de datos publicitarios de tus campañas en Meta (Facebook e Instagram).
      Nos conectamos directamente a las APIs, descargamos, limpiamos y transformamos la información para que tengas
      reportes listos en tiempo real sin tareas manuales. 
      <br><br>
      <strong>Incluye:</strong>
      <ul>
        <li>Conexión directa con Meta Ads API.</li>
        <li>Normalización de métricas.</li>
        <li>Carga automática a Google Sheets o Looker.</li>
      </ul>
      <br>
      <strong>Resultado:</strong> decisiones rápidas y dashboards actualizados sin intervención humana.
    `,
    "Agentes de IA": `
      Implementamos agentes inteligentes entrenados para tu negocio que asisten en tareas diarias como:
      gestión de tickets, resumen de reuniones, control de gastos o atención a clientes.
      <br><br>
      <strong>Usamos:</strong> modelos de lenguaje avanzados (OpenAI, Claude, Gemini) y flujos personalizados.
      <br><br>
      <strong>Beneficios:</strong>
      <ul>
        <li>Automatización de flujos internos.</li>
        <li>Comunicación coherente y contextual.</li>
        <li>Escalabilidad sin aumentar el equipo humano.</li>
      </ul>
    `,
    "Chat-Bots": `
      Desarrollamos chatbots inteligentes que atienden consultas y leads en tiempo real en tus canales de comunicación (WhatsApp, Instagram, Web).
      <br><br>
      <strong>Características:</strong>
      <ul>
        <li>Atención 24/7.</li>
        <li>Respuestas contextuales basadas en tus documentos o base de conocimiento.</li>
        <li>Integración con CRM o herramientas internas.</li>
      </ul>
      <br>
      <strong>Ideal para:</strong> marketing conversacional, soporte, o calificación automática de clientes.
    `,
    "Scraps": `
      Automatizamos la extracción y consolidación de datos desde diversas fuentes: sitios web, plataformas, PDFs o APIs.
      <br><br>
      <strong>Aplicaciones comunes:</strong>
      <ul>
        <li>Relevamiento de precios o productos.</li>
        <li>Monitoreo de competencia o tendencias.</li>
        <li>Unificación de información de múltiples fuentes.</li>
      </ul>
      <br>
      <strong>Beneficio:</strong> datos limpios, actualizados y listos para análisis sin esfuerzo manual.
    `,
    "Tableros de Data": `
      Diseñamos dashboards en tiempo real que conectan todas tus fuentes (GoogleSheets, Excel, Google Analytics, bases SQL, Data Warehouses, etc.)
      <br><br>
      <strong>Incluye:</strong>
      <ul>
        <li>Diseño visual e interacción dinámica con Looker.</li>
        <li>Automatización de actualizaciones.</li>
        <li>Alertas automáticas y métricas personalizadas.</li>
        <li>Tablero totalmente personalizable.</li>
      </ul>
      <br>
      <strong>Resultado:</strong> decisiones estratégicas más rápidas con información consolidada.
    `,
    "Email Marketing Automatizado": `
      Creamos flujos automatizados que envían correos personalizados en el momento justo.
      <br><br>
      <strong>Qué hacemos:</strong>
      <ul>
        <li>Integración con tus bases de datos.</li>
        <li>Segmentación inteligente de audiencias.</li>
        <li>Automatización de seguimientos, carritos abandonados y retención.</li>
        <li>Fidelización de clientes y Branding.</li>
      </ul>
      <br>
      <strong>Beneficio:</strong> más engagement y conversión con menos trabajo manual.
    `
  };

  // Abrir popup con contenido extendido
  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('h3')?.textContent.trim();
      popupTitle.textContent = title;
      popupDesc.innerHTML = serviceDetails[title] || item.querySelector('p')?.textContent || '';
      overlay.classList.add('active');
    });
  });

  // Cerrar popup
  const closePopup = () => overlay.classList.remove('active');
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closePopup();
  });
})();
// --- Selector de idioma interactivo ---
const langDropdown = document.querySelector('.language-dropdown');
const langButton = langDropdown?.querySelector('.lang-button');
const dropdownContent = langDropdown?.querySelector('.dropdown-content');

if (langButton && dropdownContent) {
  langButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    dropdownContent.classList.remove('open');
  });
}