import { ExternalLink } from "lucide-react";
import { ProjectGallery } from "@/components/ProjectGallery/ProjectGallery";
import { profile } from "@/data/portfolio";
import styles from "./page.module.css";

export default function ProyectosPage() {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.pageHeader}>
        <p className="eyebrow">Proyectos</p>
        <h1>Soluciones que he desarrollado</h1>

        <p>
          Una selección de proyectos profesionales, institucionales e
          independientes donde he participado en desarrollo móvil, frontend,
          full-stack, cloud, integraciones y mantenimiento de plataformas.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {profile.projects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <ProjectGallery
              projectTitle={project.title}
              images={project.images}
            />

            <div className={styles.projectContent}>
              <div className={styles.projectMeta}>
                <span>{project.type}</span>
                <strong>{project.status}</strong>
              </div>

              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className={styles.projectHighlights}>
                <h3>Aspectos destacados</h3>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.projectStack}>
                {project.stack.map((technology) => (
                  <span className="chip" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className={styles.projectActions}>
                {project.comingSoon ? (
                  <span className={styles.comingSoon}>Próximamente</span>
                ) : (
                  project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.siteButton}>
                      <span>{link.label}</span>
                      <ExternalLink
                        className={styles.buttonIcon}
                        size={16}
                        aria-hidden="true"
                      />
                    </a>
                  ))
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
