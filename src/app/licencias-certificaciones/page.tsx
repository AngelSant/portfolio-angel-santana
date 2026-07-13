import Image from "next/image";
import {
  BrainCircuit,
  ChevronDown,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
  Palette,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { certificationSections } from "@/data/portfolio/certifications";
import { assetPath } from "@/lib/assetPath";
import styles from "./page.module.css";

const sectionIcons = {
  ai: BrainCircuit,
  code: Code2,
  cloud: CloudCog,
  database: Database,
  ux: Palette,
} as const;

export default function LicenciasCertificacionesPage() {
  const certificationsByTitle = new Map(
    profile.certifications.map((certification) => [
      certification.title,
      certification,
    ]),
  );

  return (
    <section className={styles.certificationsPage}>
      <div className={styles.pageHeader}>
        <p className="eyebrow">Licencias y certificaciones</p>

        <h1>Formación continua y validación técnica</h1>

        <p>
          Certificaciones, insignias y rutas de aprendizaje organizadas por área
          de conocimiento. Selecciona una sección para consultar sus
          credenciales.
        </p>
      </div>

      <div className={styles.sectionsList}>
        {certificationSections.map((section) => {
          const Icon = sectionIcons[section.icon];

          const sectionCertifications = section.certificationTitles.flatMap(
            (title) => {
              const certification = certificationsByTitle.get(title);

              return certification ? [certification] : [];
            },
          );

          return (
            <details
              key={section.id}
              id={section.id}
              name="certification-sections"
              className={styles.certificationSection}>
              <summary className={styles.sectionSummary}>
                <span className={styles.sectionIcon}>
                  <Icon aria-hidden="true" />
                </span>

                <span className={styles.sectionInformation}>
                  <strong>{section.title}</strong>
                  <span>{section.description}</span>
                </span>

                <span className={styles.sectionCount}>
                  {sectionCertifications.length}
                  <span className={styles.sectionCountLabel}>
                    {sectionCertifications.length === 1
                      ? "credencial"
                      : "credenciales"}
                  </span>
                </span>

                <ChevronDown
                  className={styles.sectionChevron}
                  aria-hidden="true"
                />
              </summary>

              <div className={styles.sectionContent}>
                <div className={styles.certificationsGrid}>
                  {sectionCertifications.map((certification) => (
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

                        <p className={styles.description}>
                          {certification.description}
                        </p>

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
              </div>
            </details>
          );
        })}
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
