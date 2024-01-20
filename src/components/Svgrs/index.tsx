import { SvgrsLayout } from "./Layout";
import { SvgrsProps } from "./types";
import { useSvgrs } from "./useSvgrs";

export function Svgrs({className, ...props}: SvgrsProps) {
  const {Component} = useSvgrs({...props});
  return <SvgrsLayout Component={Component} className={className} />;
}
