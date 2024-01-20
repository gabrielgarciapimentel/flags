export interface SvgrsProps {
  name: Svgs;
  className?: string | undefined;
}

export type UseSvgrsProps = SvgrsProps;

export interface SvgrsLayoutProps {
  Component: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}> | React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>;
  className?: string | undefined;
}