export interface HomeLayoutProps {
  handleNavigate: (item: Omit<OptionProps, 'handleClick'>) => void
  countries: Omit<OptionProps, 'handleClick'>[];
}