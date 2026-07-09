import Link from "next/link";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <p className="eyebrow">Portafolio profesional</p>

        <h1>
          Hola, soy <span>{profile.shortName}</span>
        </h1>

        <h2>{profile.degree}</h2>

        <p className="role">{profile.role}</p>

        <p className="heroDescription">
          Desarrollo aplicaciones móviles, plataformas web y soluciones
          full-stack enfocadas en resolver necesidades reales de negocio con una
          estructura clara, funcional y mantenible.
        </p>

        <div className="heroActions">
          <Link href="/proyectos" className="primaryButton">
            Ver proyectos
          </Link>

          <Link href="/contacto" className="secondaryButton">
            Contactarme
          </Link>
        </div>
      </div>

      <div className="heroVisual">
        <div className="imagePlaceholder">
          <span>Imagen principal / ilustración / fotografía profesional</span>
        </div>
      </div>

      <div className="quickAccess">
        {profile.quickLinks.map((item) => (
          <Link href={item.href} key={item.href} className="quickCard">
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
