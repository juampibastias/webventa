// ============================================================================
//  CONTENIDO DE LA LANDING — Editá todo desde acá.
//  Cada sección está pensada para vender: foco en beneficio, prueba y acción.
// ============================================================================

export const site = {
  name: "JPBT",
  fullName: "Juan Pedro Bastias Torresi",
  tagline: "Construimos el software que tu negocio necesita para crecer",
  description:
    "Desarrollo web y software a medida. Sitios, e-commerce, aplicaciones y soluciones con IA que generan resultados medibles. Integrador Oficial de Mercado Pago.",
  url: "https://jpbt.vercel.app",
  email: "juanpedrobastiastorresi@gmail.com",
  phone: "+54 9 2634 53-8584",
  whatsapp: "5492634538584", // sin + ni espacios, para el link de wa.me
  // Página de reservas de Google Calendar (Citas). Crea el link de Google Meet
  // automáticamente en cada turno agendado. Generala en Google Calendar →
  // "Crear" → "Programación de citas" → "Compartir" → copiá el link público.
  meetUrl: "https://calendly.com/juanpedrobastiastorresi/30min",
  location: "LATAM · 100% remoto",
  currency: "ARS", // moneda para los pagos de Mercado Pago
};

// ---------------------------------------------------------------------------
// CREDENCIALES / CONFIANZA — Integrador Oficial de Mercado Pago
// ---------------------------------------------------------------------------
export const mercadoPago = {
  isOfficialIntegrator: true,
  badgeLabel: "Integrador Oficial",
  badgeSubLabel: "Checkout Pro · Mercado Pago",
  holder: "Juan Pedro Bastias Torresi",
  // Insignia oficial provista por Mercado Pago (en /public/mp).
  insigniaImg: "/mp/insignia-mp.svg",
  // Certificado oficial (PDF en /public/mp). Vacío = no se muestra el link.
  certificateUrl: "/mp/certificado-mp.pdf",
};

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const hero = {
  badge: "Desarrollo web + IA aplicada",
  title: "Tu negocio merece software que",
  titleHighlight: "venda mientras dormís",
  subtitle:
    "Diseñamos y desarrollamos sitios, tiendas y aplicaciones rápidas, escalables y pensadas para convertir. Sin plantillas genéricas, sin promesas vacías: código a medida con foco en tu retorno.",
  primaryCta: "Agendá una videollamada gratis",
  secondaryCta: "Ver qué hacemos",
  // Métricas de credibilidad — reemplazá por las tuyas reales.
  stats: [
    { value: "+15", label: "proyectos entregados" },
    { value: "100%", label: "clientes conformes" },
    { value: "<2s", label: "tiempo de carga promedio" },
    { value: "14 días", label: "para tu primer entregable" },
  ],
};

// ---------------------------------------------------------------------------
// LOGOS / CONFIANZA — clientes reales
// ---------------------------------------------------------------------------
export const trustedBy = {
  label: "Clientes que confían en mi trabajo",
  logos: ["Cooperativa Popular", "Dindorf", "LookApp", "Consultorio Web"],
};

// ---------------------------------------------------------------------------
// SERVICIOS
// ---------------------------------------------------------------------------
export type Service = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  tag?: string;
};

export const services: Service[] = [
  {
    icon: "globe",
    title: "Sitios web y landing pages",
    description:
      "Webs corporativas y landings de alta conversión que cargan rápido, posicionan en Google y transmiten tu propuesta en segundos.",
    bullets: ["Diseño a medida", "SEO técnico", "Optimizadas para convertir"],
  },
  {
    icon: "code",
    title: "Aplicaciones y sistemas a medida",
    description:
      "Dashboards, plataformas y herramientas internas construidas con Next.js y Node. Resolvemos el problema real de tu operación.",
    bullets: ["Arquitectura escalable", "Integraciones API", "Paneles a medida"],
  },
  {
    icon: "cart",
    title: "E-commerce",
    description:
      "Tiendas online listas para vender: catálogo, pagos, envíos y métricas. Pensadas para maximizar el ticket y la recompra.",
    bullets: ["Pasarelas de pago", "Catálogo + stock", "Checkout optimizado"],
  },
  {
    icon: "spark",
    title: "Implementación de apps con IA",
    description:
      "Integramos IA donde mueve la aguja: agentes, automatizaciones, chatbots y asistentes que ahorran horas y reducen costos.",
    bullets: ["Agentes y chatbots", "Automatización de procesos", "RAG sobre tus datos"],
    tag: "Más pedido",
  },
  {
    icon: "shield",
    title: "Mantenimiento y soporte",
    description:
      "Planes mensuales para que tu producto evolucione sin sobresaltos: mejoras continuas, monitoreo, seguridad y velocidad.",
    bullets: ["Soporte prioritario", "Mejoras continuas", "Monitoreo 24/7"],
  },
  {
    icon: "gauge",
    title: "Performance y optimización",
    description:
      "¿Tu sitio carga lento o no convierte? Auditamos, optimizamos Core Web Vitals y mejoramos tu tasa de conversión.",
    bullets: ["Auditoría técnica", "Core Web Vitals", "CRO"],
  },
];

// ---------------------------------------------------------------------------
// POR QUÉ NOSOTROS / DIFERENCIADORES
// ---------------------------------------------------------------------------
export const whyUs = {
  title: "Por qué elegirnos",
  subtitle:
    "No vendemos horas de código: vendemos resultados. Esto es lo que nos diferencia.",
  reasons: [
    {
      icon: "target",
      title: "Foco en resultados, no en features",
      description:
        "Cada decisión técnica responde a una métrica de negocio: más ventas, más leads o menos costos.",
    },
    {
      icon: "bolt",
      title: "Entregas rápidas y por etapas",
      description:
        "Trabajamos en sprints cortos. Ves avances cada semana y tu primer entregable en días, no meses.",
    },
    {
      icon: "layers",
      title: "Stack moderno y escalable",
      description:
        "Next.js, Node, TypeScript y la nube. Lo que construimos hoy aguanta tu crecimiento de mañana.",
    },
    {
      icon: "chat",
      title: "Comunicación directa",
      description:
        "Hablás con quien programa, no con un intermediario. Transparencia total en cada paso.",
    },
  ],
};

// ---------------------------------------------------------------------------
// PROCESO
// ---------------------------------------------------------------------------
export const process = {
  title: "Cómo trabajamos",
  subtitle: "Un proceso claro y sin sorpresas, de la idea al lanzamiento.",
  steps: [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Entendemos tu negocio, tus objetivos y tus números. Definimos el alcance y un plan con tiempos reales.",
    },
    {
      number: "02",
      title: "Diseño y prototipo",
      description:
        "Diseñamos la experiencia y validamos con un prototipo navegable antes de escribir una línea de código.",
    },
    {
      number: "03",
      title: "Desarrollo",
      description:
        "Construimos en sprints con entregas semanales. Código limpio, probado y documentado.",
    },
    {
      number: "04",
      title: "Lanzamiento y crecimiento",
      description:
        "Desplegamos, medimos y optimizamos. Te acompañamos para que el producto siga mejorando.",
    },
  ],
};

// ---------------------------------------------------------------------------
// PLANES / PRICING
// ---------------------------------------------------------------------------
export type Plan = {
  id: string;
  name: string;
  priceLabel: string; // texto visible (ej. "$ 150.000")
  amount?: number; // monto numérico para Mercado Pago (solo planes online)
  description: string;
  features: string[];
  cta: string;
  payment: "online" | "quote"; // online = pago con Mercado Pago, quote = cotización
  highlighted?: boolean;
};

export const pricing = {
  title: "Elegí el plan ideal para tu negocio",
  subtitle:
    "Los dos primeros planes los pagás online de forma segura con Mercado Pago. El plan a medida se arma por cotización según tu proyecto.",
  plans: [
    {
      id: "web-basica",
      name: "Web Básica",
      priceLabel: "$ 150.000",
      amount: 150000,
      description: "Tu presencia online profesional, lista para mostrar tu negocio.",
      features: [
        "Sitio web de hasta 4 secciones",
        "Diseño responsive a medida",
        "Formulario de contacto + WhatsApp",
        "SEO básico y analítica",
        "Carga rápida y segura (SSL)",
        "Entrega en 1–2 semanas",
      ],
      cta: "Pagar y empezar",
      payment: "online",
    },
    {
      id: "web-profesional",
      name: "Web Profesional",
      priceLabel: "$ 350.000",
      amount: 350000,
      description: "Para negocios que necesitan más secciones, contenido y conversión.",
      features: [
        "Sitio de hasta 8 secciones o blog",
        "Diseño premium personalizado",
        "SEO técnico avanzado",
        "Integraciones (CRM, mailing, etc.)",
        "Panel para editar contenidos",
        "30 días de soporte incluido",
      ],
      cta: "Pagar y empezar",
      payment: "online",
      highlighted: true,
    },
    {
      id: "web-medida",
      name: "Web a Medida",
      priceLabel: "Cotización",
      description: "E-commerce, aplicaciones, software e implementaciones con IA.",
      features: [
        "Proyecto 100% a medida",
        "E-commerce / app / sistema",
        "Arquitectura escalable",
        "Integraciones e IA aplicada",
        "Roadmap por sprints",
        "Propuesta y precio personalizados",
      ],
      cta: "Pedí tu cotización",
      payment: "quote",
    },
  ] as Plan[],
  securityNote: "Pago 100% seguro procesado por Mercado Pago. Aceptamos tarjetas, débito y dinero en cuenta.",
};

// ---------------------------------------------------------------------------
// PROYECTOS REALES (portfolio)
// ---------------------------------------------------------------------------
export type Project = {
  client: string;
  url: string;
  category: string;
  description: string;
  tags: string[];
};

export const projects = {
  title: "Proyectos reales, clientes conformes",
  subtitle:
    "Una muestra de plataformas en producción que diseñé y desarrollé de punta a punta.",
  cta: "Ver sitio",
  items: [
    {
      client: "Cooperativa Popular",
      url: "https://www.cooperativapopular.com.ar/",
      category: "Web institucional + Portal de pagos + IA",
      description:
        "Sitio institucional con portal de pago de facturas, backend de administración completo y una plataforma de gestión de proveedores asistida por IA.",
      tags: ["Portal de pagos", "Backend admin", "IA", "Institucional"],
    },
    {
      client: "Dindorf",
      url: "https://dindorf.com.ar/",
      category: "Plataforma de venta de autos",
      description:
        "Plataforma de venta de vehículos con backend de gestión para administrar catálogo, stock y operaciones.",
      tags: ["Automotriz", "Catálogo", "Backend de gestión"],
    },
    {
      client: "LookApp",
      url: "https://lookapp-v2-deploy.vercel.app/",
      category: "Gestión de fast food + delivery",
      description:
        "Sistema integral para fast food: gestión completa del local y administración de delivery en tiempo real.",
      tags: ["Fast food", "Delivery", "Gestión integral"],
    },
    {
      client: "Consultorio Web",
      url: "https://consultorio-web-production-ed74.up.railway.app/",
      category: "Gestión de consultorios + portal de pacientes",
      description:
        "Gestión integral de consultorios y profesionales con portal de pacientes para turnos y seguimiento.",
      tags: ["Salud", "Turnos", "Portal de pacientes"],
    },
  ] as Project[],
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const faqs = {
  title: "Preguntas frecuentes",
  items: [
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Una landing puede estar lista en 1–2 semanas. Un sitio o e-commerce, entre 3 y 6 semanas. Proyectos de software o IA se planifican por sprints según el alcance. Siempre verás tu primer entregable en pocos días.",
    },
    {
      q: "¿Cómo es el presupuesto?",
      a: "Los precios de la sección de planes son de referencia. Después de una llamada de descubrimiento te enviamos una propuesta cerrada, sin costos ocultos y con tiempos definidos.",
    },
    {
      q: "¿Trabajan con empresas fuera de mi país?",
      a: "Sí. Trabajamos 100% remoto con clientes de toda LATAM y el exterior. Nos adaptamos a tu zona horaria y herramientas.",
    },
    {
      q: "¿Qué pasa después del lanzamiento?",
      a: "Ofrecemos planes de mantenimiento mensual con soporte prioritario, mejoras continuas y monitoreo. Vos elegís si querés que te acompañemos o quedarte con todo el código.",
    },
    {
      q: "¿El código queda a mi nombre?",
      a: "Sí. Al finalizar, todo el código, los accesos y la infraestructura quedan 100% bajo tu propiedad. Sin ataduras.",
    },
    {
      q: "¿Qué tecnologías usan?",
      a: "Principalmente Next.js, React, Node y TypeScript, con la nube que mejor se adapte (Vercel, AWS). Para IA integramos modelos de lenguaje, automatizaciones y RAG sobre tus propios datos.",
    },
  ],
};

// ---------------------------------------------------------------------------
// CTA FINAL
// ---------------------------------------------------------------------------
export const finalCta = {
  title: "¿Listo para construir algo que venda?",
  subtitle:
    "Agendá una videollamada gratis de 15 minutos por Google Meet. Elegí el horario que mejor te quede entre los huecos disponibles. Sin compromiso: entendemos tu objetivo y te decimos honestamente cómo podemos ayudarte.",
  cta: "Agendá tu videollamada gratis",
  meetCta: "Elegí horario en Google Meet",
};

// ---------------------------------------------------------------------------
// NAVEGACIÓN
// ---------------------------------------------------------------------------
export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];
