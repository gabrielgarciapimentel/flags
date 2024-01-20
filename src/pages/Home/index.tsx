import {useHome} from './useHome';
import { HomeLayout } from "./Layout";

export function Home() {
  const layoutProps = useHome();
  return <HomeLayout {...layoutProps} />;
}
