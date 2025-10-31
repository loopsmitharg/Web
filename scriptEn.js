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
    "Data Automation for MetaAds": `
      We automate your entire ad data pipeline from Meta (Facebook and Instagram) campaigns.
      We connect directly to the APIs, download, clean, and transform the data so you have
      real-time reports ready to use — no manual tasks. 
      <br><br>
      <strong>Includes:</strong>
      <ul>
        <li>Direct connection with Meta Ads API.</li>
        <li>Metric normalization.</li>
        <li>Automatic upload to Google Sheets or Looker.</li>
      </ul>
      <br>
      <strong>Result:</strong> faster decisions and up-to-date dashboards with no human intervention.
    `,
    "AI Agents": `
      We implement intelligent agents trained for your business that assist in daily tasks such as:
      ticket management, meeting summaries, expense control, or customer service.
      <br><br>
      <strong>We use:</strong> advanced language models (OpenAI, Claude, Gemini) and customized workflows.
      <br><br>
      <strong>Benefits:</strong>
      <ul>
        <li>Automation of internal workflows.</li>
        <li>Consistent and contextual communication.</li>
        <li>Scalability without increasing your human team.</li>
      </ul>
    `,
    "Chat-Bots": `
      We develop smart chatbots that handle inquiries and leads in real time through your communication channels (WhatsApp, Instagram, Web).
      <br><br>
      <strong>Features:</strong>
      <ul>
        <li>24/7 availability.</li>
        <li>Context-based responses using your documents or knowledge base.</li>
        <li>Integration with CRM or internal tools.</li>
      </ul>
      <br>
      <strong>Ideal for:</strong> conversational marketing, customer support, or automatic lead qualification.
    `,
    "Scraps": `
      We automate the extraction and consolidation of data from various sources: websites, platforms, PDFs, or APIs.
      <br><br>
      <strong>Common applications:</strong>
      <ul>
        <li>Price or product tracking.</li>
        <li>Competition or trend monitoring.</li>
        <li>Information unification from multiple sources.</li>
      </ul>
      <br>
      <strong>Benefit:</strong> clean, updated, and analysis-ready data without manual effort.
    `,
    "Data Dashboards": `
      We design real-time dashboards that connect all your sources (Google Sheets, Excel, Google Analytics, SQL databases, Data Warehouses, etc.)
      <br><br>
      <strong>Includes:</strong>
      <ul>
        <li>Visual design and dynamic interaction with Looker.</li>
        <li>Automated updates.</li>
        <li>Automatic alerts and custom metrics.</li>
        <li>Fully customizable dashboard.</li>
      </ul>
      <br>
      <strong>Result:</strong> faster strategic decisions with consolidated information.
    `,
    "Automated Email Marketing": `
      We create automated flows that send personalized emails at the right moment.
      <br><br>
      <strong>What we do:</strong>
      <ul>
        <li>Integration with your databases.</li>
        <li>Smart audience segmentation.</li>
        <li>Automation of follow-ups, abandoned carts, and retention campaigns.</li>
        <li>Customer loyalty and branding.</li>
      </ul>
      <br>
      <strong>Benefit:</strong> more engagement and conversions with less manual work.
    `
}


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