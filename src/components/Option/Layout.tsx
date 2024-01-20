import { Svgrs } from "../Svgrs";
import styles from "./styles.module.scss";
import { OptionLayoutProps } from "./types";

export function OptionLayout({ color, handleClick, icon, title }: OptionLayoutProps) {
  return (
    <section
      className={styles.container}
      style={{ backgroundColor: color[0] }}
      onClick={handleClick}
    >
      <Svgrs name={icon} className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </section>
  );
}
