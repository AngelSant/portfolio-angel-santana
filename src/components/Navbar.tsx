import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Certificaciones", href: "/licencias-certificaciones" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  return (
    <header className="navbarWrapper">
      <nav className="navbar">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="navLink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
