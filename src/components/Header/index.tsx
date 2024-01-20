import { HeaderLayout } from "./Layout";
import {useHeader} from './useHeader';

export function Header() {
  const layoutProps = useHeader();
  return <HeaderLayout {...layoutProps} />;
}
