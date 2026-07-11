import type { PortfolioProject } from "@/app/types/portfolio";

export const projects = [
  {
    title: "CargaApp",
    type: "Aplicación móvil / Logística",
    status: "Proyecto profesional",

    description:
      "Aplicación móvil enfocada en logística y transporte de carga, desarrollada para facilitar operaciones, tracking, comunicación y gestión de procesos dentro del sector logístico.",

    images: [
      {
        src: "/images/projects/CargaApp - Muestra.png",
        alt: "Vista previa de la plataforma CargaApp",
        label: "CargaApp",
      },
    ],

    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "FCM",
      "Google Maps API",
      "REST APIs",
      "Android",
      "Google Play Console",
    ],

    highlights: [
      "Desarrollo de funcionalidades móviles con Flutter y Dart.",
      "Integración de autenticación, permisos nativos, notificaciones push y geolocalización.",
      "Configuración de flavors, builds, firma de aplicación y publicación en Google Play Console.",
    ],

    links: [
      {
        label: "Ir al sitio",
        href: "https://cargaapp.com/",
      },
      {
        label: "Ver en Google Play",
        href: "https://play.google.com/store/apps/details?id=com.dnlogistics.cargaapp_movil",
      },
    ],
  },
  {
    title: "OD Contact Center",
    type: "CRM Web / Call Center",
    status: "Proyecto profesional",

    description:
      "CRM web orientado a la gestión de clientes, cuentas financieras, seguimiento operativo y administración interna de un call center.",

    images: [
      {
        src: "/images/projects/Od Contact Center - Muestra.png",
        alt: "Vista previa de OD Contact Center",
        label: "OD Contact Center",
      },
    ],

    stack: [
      "Angular",
      "TypeScript",
      "Firebase",
      "Google Cloud",
      "Firestore",
      "Firebase Auth",
      "SCSS",
    ],

    highlights: [
      "Desarrollo de módulos para usuarios, roles, dashboards y gestión operativa.",
      "Implementación de guards, permisos, rutas protegidas y servicios.",
      "Integración con Firebase y Google Cloud para autenticación, datos y despliegue.",
    ],

    links: [
      {
        label: "Ir al sitio",
        href: "https://odcontact.com/",
      },
    ],
  },
  {
    title: "Sistema Gestor Documental",
    type: "Sistema administrativo / Institucional",
    status: "Estadía profesional",

    description:
      "Sistema para la gestión de archivos y solicitudes internas, desarrollado para digitalizar y organizar flujos administrativos en un entorno institucional.",

    images: [
      {
        src: "/images/projects/Repositorio de archivos - Muestra.png",
        alt: "Vista previa del sistema gestor documental",
        label: "Sistema gestor de archivos",
      },
    ],

    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "DataTables",
      "FPDF",
      "XAMPP",
    ],

    highlights: [
      "Implementación de login, roles, permisos, CRUD y rutas protegidas.",
      "Carga y descarga de archivos, consultas SQL y administración con phpMyAdmin.",
      "Generación de reportes PDF con FPDF.",
    ],

    links: [
      {
        label: "Ir al sitio",
        href: "https://sigeh.hidalgo.gob.mx/",
      },
    ],
  },
  {
    title: "Plataforma Inmobiliaria",
    type: "Aplicación web / Gestión de propiedades",
    status: "Proyecto independiente",

    description:
      "Plataforma web para gestión y publicación de propiedades inmobiliarias, con autenticación, roles, permisos y operaciones administrativas.",

    images: [
      {
        src: "/images/projects/ISGA Hogares - Muestra.png",
        alt: "Vista previa de la plataforma inmobiliaria ISGA Hogares",
        label: "ISGA Hogares",
      },
    ],

    stack: [
      "Angular",
      "Firebase",
      "Google Cloud",
      "Firestore",
      "Firebase Auth",
      "TypeScript",
      "SCSS",
    ],

    highlights: [
      "Implementación de autenticación, registro, login, roles y permisos.",
      "Desarrollo de operaciones CRUD para administración de propiedades.",
      "Diseño de interfaces y preparación para despliegue web.",
    ],

    links: [],
    comingSoon: true,
  },
  {
    title: "Plataformas Web Empresariales",
    type: "Frontend / Full-Stack",
    status: "Experiencia profesional",

    description:
      "Desarrollo y mantenimiento de plataformas web empresariales, componentes reutilizables, formularios, servicios, validaciones y mejoras UI/UX.",

    images: [
      {
        src: "/images/projects/DNLogistics - Muestra.png",
        alt: "Vista previa del sitio DNLogistics",
        label: "DNLogistics",
      },
    ],

    stack: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "REST APIs",
      "Git",
      "Postman",
    ],

    highlights: [
      "Desarrollo de componentes, servicios, interceptores, guards y formularios.",
      "Consumo y validación de endpoints mediante Postman y Hoppscotch.",
      "Corrección de errores, mantenimiento de código existente y mejoras visuales.",
    ],

    links: [
      {
        label: "Ir al sitio",
        href: "https://dnlogistics.mx/",
      },
    ],
  },

  /*
  *Esto tiene que esperar, porque tengo que poner imagenes de los sistemas EMR / SaaS / Paginas coorporativas que eh desarrollado
  {
    title: "Sistemas EMR y SaaS",
    type: "Sistemas web / Salud / SaaS",
    status: "Colaboración profesional",

    description:
      "Participación en soluciones web enfocadas en hospitales, consultorios, sistemas administrativos y plataformas con enfoque SaaS.",

      images: [
        {
          src: "/images/projects/",
          alt: "Vista previa del sitio web ",
          label: ",
        },
        {
          src: "/images/projects/",
          alt: "Vista previa del sitio web ,
          label: ",
        },
      ],

    stack: [
      "Angular",
      "Firebase",
      "Google Cloud",
      "TypeScript",
      "APIs REST",
      "SCSS",
    ],

    highlights: [
      "Colaboración en interfaces responsivas y módulos administrativos.",
      "Participación en flujos para gestión de información y operación interna.",
      "Apoyo en mantenimiento, pruebas funcionales y ajustes de experiencia de usuario.",
    ],

    links: [
      {
        label: "Ir a ",
        href: "",
      },
      {
        label: "Ir a ",
        href: "",
      },
    ],
  },
  */
] satisfies PortfolioProject[];
