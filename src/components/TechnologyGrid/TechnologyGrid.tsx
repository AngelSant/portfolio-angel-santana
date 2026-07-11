import Image from "next/image";
import type { TechnologyItem } from "@/app/types/portfolio";
import styles from "./TechnologyGrid.module.css";

type TechnologyGridProps = {
  items: TechnologyItem[];
};

export function TechnologyGrid({ items }: TechnologyGridProps) {
  return (
    <div className={styles.technologyGrid}>
      {items.map((technology) => (
        <div className={styles.technologyItem} key={technology.name}>
          <div className={styles.iconContainer}>
            <Image
              src={technology.icon}
              alt={`Icono de ${technology.name}`}
              width={52}
              height={52}
              className={styles.technologyIcon}
            />
          </div>

          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  );
}
