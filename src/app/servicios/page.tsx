import { profile } from "@/data/portfolio";
import styles from "./page.module.css";

export default function ServiciosPage() {
  return (
    <section className={styles.servicesPage}>
      <div className={styles.pageHeader}>
        <p className="eyebrow">Servicios</p>
        <h1>Soluciones digitales que puedo desarrollar</h1>
        <p>
          Puedo ayudarte a construir aplicaciones móviles, plataformas web,
          sistemas administrativos, integraciones con Firebase, soluciones
          full-stack y mejoras sobre software existente.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {profile.services.map((service) => (
          <article className={styles.serviceCard} key={service.title}>
            <div className={styles.serviceHeader}>
              <span>{service.category}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>

            <div className={styles.serviceBody}>
              <h3>Qué incluye</h3>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.serviceTools}>
              {service.tools.map((tool) => (
                <span className="chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className={styles.ctaSection}>
        <p className="eyebrow">Trabajemos juntos</p>
        <h2>¿Tienes una idea, sistema o proyecto por mejorar?</h2>
        <p>
          Puedo participar en el desarrollo de nuevas funcionalidades,
          construcción de plataformas desde cero, mantenimiento de código
          existente o integración de servicios para productos digitales.
        </p>

        <a href="/contacto" className={styles.ctaButton}>
          Ir a contacto
        </a>
      </section>
    </section>
  );
}
