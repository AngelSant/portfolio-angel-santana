import type { TechSkillGroup } from "@/app/types/portfolio";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const about = {
  professionalProfile:
    "Soy Ingeniero en Software egresado de la Universidad Politécnica de Pachuca, enfocado en el desarrollo de aplicaciones móviles y plataformas web. Me interesa construir soluciones digitales que sean funcionales, claras, mantenibles y orientadas a resolver necesidades reales de negocio.",

  value:
    "He participado en proyectos relacionados con logística, transporte de carga, CRM, gestión inmobiliaria, sistemas administrativos, gestión documental, plataformas SaaS y soluciones digitales a medida. Me he involucrado en análisis de requerimientos, diseño de interfaces, desarrollo de módulos, consumo de APIs, validaciones, mantenimiento, corrección de errores y mejoras UI/UX.",

  objective:
    "Busco seguir creciendo como Mobile App Developer y Full-Stack Developer, fortaleciendo mis conocimientos en arquitectura de software, backend, cloud, UX/UI, ciberseguridad, inteligencia artificial aplicada y buenas prácticas de desarrollo.",
};

export const experience = [
  {
    company: "CargaApp / Sector logístico",
    position: "Mobile App Developer & Full-Stack Developer",
    period: "Actualidad",
    description:
      "Desarrollo de funcionalidades móviles y web para soluciones enfocadas en logística y transporte de carga.",
    highlights: [
      "Desarrollo móvil con Flutter y Dart.",
      "Integración de Firebase Cloud Messaging, autenticación, permisos nativos, geolocalización y Google Maps API.",
      "Consumo de APIs REST, tracking, configuración de flavors, generación de builds y publicación en Google Play Console.",
      "Mantenimiento y desarrollo de plataformas web con Angular, TypeScript, JavaScript y SCSS.",
    ],
  },
  {
    company: "Kibernétika-TI Consultoría",
    position: "Full-Stack Developer",
    period: "Experiencia profesional",
    description:
      "Participación en soluciones web a medida para clientes empresariales e institucionales.",
    highlights: [
      "Desarrollo de OD Contact Center, CRM web con Angular, Firebase y Google Cloud.",
      "Implementación de módulos para gestión de clientes, cuentas financieras, seguimiento operativo y administración interna.",
      "Colaboración en sistemas EMR, sitios corporativos, plataformas responsivas y soluciones con enfoque SaaS.",
    ],
  },
  {
    company:
      "CITNOVA / Unidad de Planeación y Prospectiva del Estado de Hidalgo",
    position: "Desarrollador Web",
    period: "Estadía profesional",
    description:
      "Desarrollo de un sistema gestor de archivos y solicitudes internas para un entorno institucional.",
    highlights: [
      "Construcción con Laravel, PHP, MySQL, JavaScript, jQuery, DataTables y XAMPP.",
      "Implementación de login, roles, permisos, CRUD, rutas protegidas, carga y descarga de archivos.",
      "Diseño de base de datos, consultas SQL, administración con phpMyAdmin y generación de reportes PDF con FPDF.",
    ],
  },
  {
    company: "Proyecto independiente inmobiliario",
    position: "Full-Stack Developer",
    period: "Proyecto independiente",
    description:
      "Desarrollo de una plataforma web para gestión y publicación de propiedades inmobiliarias.",
    highlights: [
      "Desarrollo con Angular, Firebase y Google Cloud.",
      "Implementación de autenticación, registro, login, roles, permisos, guards y operaciones CRUD.",
      "Diseño de interfaces y preparación para despliegue web.",
    ],
  },
];

export const education = [
  {
    institution: "Universidad Politécnica de Pachuca",
    degree: "Ingeniería en Software",
    status: "Egresado",
  },
];

export const aptitudes = [
  "Pensamiento analítico",
  "Aprendizaje continuo",
  "Adaptabilidad",
  "Comunicación clara",
  "Trabajo colaborativo",
  "Resolución de problemas",
  "Organización por prioridades",
  "Orientación a producto",
];

export const techSkills = [
  {
    category: "Mobile",
    items: [
      {
        name: "Flutter",
        icon: `${DEVICON}/flutter/flutter-original.svg`,
      },
      {
        name: "Dart",
        icon: `${DEVICON}/dart/dart-original.svg`,
      },
      {
        name: "Android",
        icon: `${DEVICON}/android/android-original.svg`,
      },
      {
        name: "iOS",
        icon: `${DEVICON}/apple/apple-original.svg`,
      },
      {
        name: "Kotlin",
        icon: `${DEVICON}/kotlin/kotlin-original.svg`,
      },
      {
        name: "Swift",
        icon: `${DEVICON}/swift/swift-original.svg`,
      },
      {
        name: "Android Studio",
        icon: `${DEVICON}/androidstudio/androidstudio-original.svg`,
      },
      {
        name: "Xcode",
        icon: `${DEVICON}/xcode/xcode-original.svg`,
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "Angular",
        icon: `${DEVICON}/angular/angular-original.svg`,
      },
      {
        name: "TypeScript",
        icon: `${DEVICON}/typescript/typescript-original.svg`,
      },
      {
        name: "JavaScript",
        icon: `${DEVICON}/javascript/javascript-original.svg`,
      },
      {
        name: "HTML",
        icon: `${DEVICON}/html5/html5-original.svg`,
      },
      {
        name: "CSS",
        icon: `${DEVICON}/css3/css3-original.svg`,
      },
      {
        name: "SCSS",
        icon: `${DEVICON}/sass/sass-original.svg`,
      },
      {
        name: "React",
        icon: `${DEVICON}/react/react-original.svg`,
      },
      {
        name: "Next.js",
        icon: `${DEVICON}/nextjs/nextjs-original.svg`,
      },
      {
        name: "Tailwind CSS",
        icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
      },
      {
        name: "Bootstrap",
        icon: `${DEVICON}/bootstrap/bootstrap-original.svg`,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "PHP",
        icon: `${DEVICON}/php/php-original.svg`,
      },
      {
        name: "Laravel",
        icon: `${DEVICON}/laravel/laravel-original.svg`,
      },
      {
        name: "Node.js",
        icon: `${DEVICON}/nodejs/nodejs-original.svg`,
      },
      {
        name: "Express.js",
        icon: `${DEVICON}/express/express-original.svg`,
      },
      {
        name: "NestJS",
        icon: `${DEVICON}/nestjs/nestjs-original.svg`,
      },
      {
        name: ".NET",
        icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
      },
      {
        name: "APIs REST",
        icon: `${DEVICON}/openapi/openapi-original.svg`,
      },
    ],
  },
  {
    category: "Bases de datos",
    items: [
      {
        name: "MySQL",
        icon: `${DEVICON}/mysql/mysql-original.svg`,
      },
      {
        name: "PostgreSQL",
        icon: `${DEVICON}/postgresql/postgresql-original.svg`,
      },
      {
        name: "MongoDB",
        icon: `${DEVICON}/mongodb/mongodb-original.svg`,
      },
      {
        name: "SQL Server",
        icon: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg`,
      },
      {
        name: "Firebase",
        icon: `${DEVICON}/firebase/firebase-original.svg`,
      },
    ],
  },
  {
    category: "Cloud & plataformas",
    items: [
      {
        name: "Firebase",
        icon: `${DEVICON}/firebase/firebase-original.svg`,
      },
      {
        name: "Google Cloud",
        icon: `${DEVICON}/googlecloud/googlecloud-original.svg`,
      },
      {
        name: "Google Play Console",
        icon: `${DEVICON}/google/google-original.svg`,
      },
      {
        name: "Docker",
        icon: `${DEVICON}/docker/docker-original.svg`,
      },
    ],
  },
  {
    category: "Herramientas",
    items: [
      {
        name: "Git",
        icon: `${DEVICON}/git/git-original.svg`,
      },
      {
        name: "GitHub",
        icon: `${DEVICON}/github/github-original.svg`,
      },
      {
        name: "Postman",
        icon: `${DEVICON}/postman/postman-original.svg`,
      },
      {
        name: "Hoppscotch",
        icon: `${DEVICON}/hoppscotch/hoppscotch-original.svg`,
      },
      {
        name: "Figma",
        icon: `${DEVICON}/figma/figma-original.svg`,
      },
      {
        name: "Jira",
        icon: `${DEVICON}/jira/jira-original.svg`,
      },
      {
        name: "Trello",
        icon: `${DEVICON}/trello/trello-original.svg`,
      },
      {
        name: "Visual Studio Code",
        icon: `${DEVICON}/vscode/vscode-original.svg`,
      },
    ],
  },
] satisfies TechSkillGroup[];
