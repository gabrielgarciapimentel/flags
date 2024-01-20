import { HeaderLayoutProps } from "./types";
import styles from "./styles.module.scss";
import { Svgrs } from "../Svgrs";

export function HeaderLayout({
  color,
  description,
  hasBackButton,
  title,
  handleBackButton
}: HeaderLayoutProps) {
  return (
    <section className={styles.container} style={{ backgroundColor: color }} onClick={handleBackButton}>
      {hasBackButton && <Svgrs name="left-icon" className={styles.backButton} />}
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
