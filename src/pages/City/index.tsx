import {useCity} from './useCity';
import { CityLayout } from "./Layout";

export function City() {
  const layoutProps = useCity();
  return <CityLayout {...layoutProps} />;
}
