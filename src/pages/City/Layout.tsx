import { Svgrs } from "../../components/Svgrs";
import styles from "./styles.module.scss";
import { CityLayoutProps } from "./types";

export function CityLayout({colors, icon, data}: CityLayoutProps) {
  return (
    <section
      className={styles.container}
    >
      <Svgrs name={icon} className={styles.icon} />
      <section
        className={styles.content}
        style={{ backgroundColor: colors[0] }}
      >
        
        {
          data.map(city => <p key={city.id} className={styles.title}>{city.name}</p>)
        }
      </section>
    </section>
  );
}
