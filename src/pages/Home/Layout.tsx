import { Option } from "../../components/Option";
import { HomeLayoutProps } from "./types";

export function HomeLayout({ countries, handleNavigate }: HomeLayoutProps) {
  return (
    <section>
      {countries.map((country) => (
        <Option
          key={country.title}
          {...country}
          handleClick={() => handleNavigate(country)}
        />
      ))}
    </section>
  );
}
