import { Option } from "../../components/Option";
import styles from "./styles.module.scss";
import { StateLayoutProps } from "./types";

export function StateLayout({ colors, data, loading, handleNavigate }: StateLayoutProps) {
  if (loading) {
    return <p>CARREGANDO...</p>;
  }
  return (
    <section
      className={styles.container}
      style={{ backgroundColor: colors[2] }}
    >
      <section
        className={styles.content}
        style={{ backgroundColor: colors[1] }}
      >
        {data.map((item) => (
          <Option
            color={[item.color]}
            icon={item.icon}
            key={item.id}
            title={item.name}
            description="Municipios"
            handleClick={() => handleNavigate(item)}
          />
        ))}
      </section>
    </section>
  );
}
