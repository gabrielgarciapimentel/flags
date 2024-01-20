import {useState} from './useState';
import { StateLayout } from "./Layout";

export function State() {
  const layoutProps = useState();
  return <StateLayout {...layoutProps} />;
}
