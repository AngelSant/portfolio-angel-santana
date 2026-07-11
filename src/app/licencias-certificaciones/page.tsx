import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";
import styles from "./page.module.css";

export default function LicenciasCertificacionesPage() {
  return (
    <section className={styles.certificationsPage}>
      <div className={styles.pageHeader}>
        <p className="eyebrow">Licencias y certificaciones</p>

        <h1>Formación continua y validación técnica</h1>

        <p>
          Certificaciones, insignias y rutas de aprendizaje que respaldan mi
          formación en desarrollo de software, inteligencia artificial, cloud,
          bases de datos, Python y diseño de experiencia de usuario.
        </p>
      </div>

      <div className={styles.certificationsGrid}>
        {profile.certifications.map((certification) => (
          <article
            className={styles.certificationCard}
            key={`${certification.issuer}-${certification.title}`}>
            <div className={styles.certificateImage}>
              <Image
                src={assetPath(certification.image)}
                alt={certification.imageAlt}
                width={1200}
                height={800}
                className={styles.certificatePreview}
              />
            </div>

            <div className={styles.certificateContent}>
              <div className={styles.certificateMeta}>
                <span>{certification.type}</span>
                <strong>{certification.date}</strong>
              </div>

              <h2>{certification.title}</h2>

              <p className={styles.issuer}>
                Impartido por: <strong>{certification.issuer}</strong>
              </p>

              <p className={styles.description}>{certification.description}</p>

              <div className="chipList">
                {certification.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className={styles.certificateActions}>
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}>
                  <span>Ver credencial</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className={styles.learningSection}>
        <p className="eyebrow">Aprendizaje continuo</p>

        <h2>Me mantengo en constante actualización</h2>

        <p>
          Complemento mi experiencia práctica con formación en inteligencia
          artificial, desarrollo con Python, cloud computing, bases de datos,
          diseño UX, redes y construcción de soluciones digitales.
        </p>
      </section>
    </section>
  );
}
