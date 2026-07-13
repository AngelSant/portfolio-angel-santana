import Image from "next/image";
import { TechnologyGrid } from "@/components/TechnologyGrid/TechnologyGrid";
import { profile } from "@/data/portfolio";
import { assetPath } from "@/lib/assetPath";
import styles from "./page.module.css";

export default function SobreMiPage() {
  const firstName = profile.fullName.split(" ")[0];
  const remainingName = profile.fullName.split(" ").slice(1).join(" ");

  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutHero}>
        <div className={styles.aboutImage}>
          <Image
            src={assetPath("/images/about/FP1.png")}
            alt="Fotografía"
            fill
            sizes="(max-width: 980px) min(100vw - 40px, 620px), 500px"
            className={styles.aboutPhoto}
          />
        </div>

        <div className={styles.aboutIntro}>
          <p className="eyebrow">Sobre mí</p>

          <h1>
            {firstName}{" "}
            <span className="animatedGradientText">{remainingName}</span>
          </h1>

          <h2>{profile.degree}</h2>
          <p className="role">{profile.role}</p>

          <p className={styles.aboutText}>
            {profile.about.professionalProfile}
          </p>

          <p className={styles.aboutText}>{profile.about.value}</p>
        </div>
      </div>

      <div className={styles.aboutGrid}>
        <article className={`${styles.aboutCard} ${styles.aboutCardLarge}`}>
          <p className={styles.sectionLabel}>Experiencia profesional</p>
          <h2>Experiencia construyendo soluciones reales</h2>

          <div className={styles.timeline}>
            {profile.experience.map((item) => (
              <div className={styles.timelineItem} key={item.company}>
                <div className={styles.timelineDot} />

                <div>
                  <p className={styles.timelinePeriod}>{item.period}</p>
                  <h3>{item.position}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>

                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className={styles.aboutSide}>
          <article className={styles.aboutCard}>
            <p className={styles.sectionLabel}>Educación</p>

            {profile.education.map((item) => (
              <div key={item.institution}>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <span className={styles.smallBadge}>{item.status}</span>
              </div>
            ))}
          </article>

          <article className={styles.aboutCard}>
            <p className={styles.sectionLabel}>Aptitudes</p>

            <div className="chipList">
              {profile.aptitudes.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </aside>
      </div>

      <section className={styles.skillsSection}>
        <div className={styles.skillsHeader}>
          <p className="eyebrow">Stack técnico</p>
          <h2>Lenguajes, frameworks y herramientas</h2>

          <p>
            Tecnologías que he utilizado en proyectos móviles, web, backend,
            cloud, bases de datos y flujos de desarrollo.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {profile.techSkills.map((group) => (
            <article className={styles.skillCard} key={group.category}>
              <h3>{group.category}</h3>
              <TechnologyGrid items={group.items} />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.aboutObjective}>
        <p className="eyebrow">Objetivo profesional</p>
        <h2>Crear productos útiles, escalables y bien diseñados</h2>
        <p className={styles.objectiveText}>{profile.about.objective}</p>
      </section>
    </section>
  );
}
