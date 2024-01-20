import { SvgrsLayoutProps } from "./types";

export function SvgrsLayout({Component, ...props}: SvgrsLayoutProps) {
  return <Component {...props} />;
}
