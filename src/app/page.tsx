import Link from "next/link";
import Image from "next/image";
import { TypewriterRole } from "@/components/TypewriterRole/TypewriterRole";
import { profile } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className="eyebrow">Portafolio profesional</p>

        <h1>
          Hola, soy{" "}
          <span className="animatedGradientText">{profile.shortName}</span>
        </h1>

        <h2>{profile.degree}</h2>

        <TypewriterRole roles={profile.roles} />

        <p className={styles.heroDescription}>
          Desarrollo aplicaciones móviles, plataformas web y soluciones
          full-stack enfocadas en resolver necesidades reales de negocio con una
          estructura clara, funcional y mantenible.
        </p>

        <div className={styles.heroActions}>
          <Link href="/proyectos" className={styles.primaryButton}>
            Ver proyectos
          </Link>

          <Link href="/contacto" className={styles.secondaryButton}>
            Contactarme
          </Link>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.imagePlaceholder}>
          <Image
            src={assetPath("/images/home/FE1.jpeg")}
            alt="Fotografía"
            fill
            priority
            sizes="(max-width: 900px) min(100vw - 28px, 520px), 430px"
            className={styles.heroPhoto}
          />
        </div>
      </div>

      <div className={styles.quickAccess}>
        {profile.quickLinks.map((item) => (
          <Link href={item.href} key={item.href} className={styles.quickCard}>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
