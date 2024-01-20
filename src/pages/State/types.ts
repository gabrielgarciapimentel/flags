export interface StateLayoutProps {
  colors: string[];
  data: State[];
  loading: boolean;
  handleNavigate: (item: State) => void;
}

export type StateProps = Omit<OptionProps, 'handleClick'>;