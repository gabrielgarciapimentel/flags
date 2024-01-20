/* eslint-disable @typescript-eslint/no-unused-vars */
type States =
  'RO' |
  'AC' |
  'AM' |
  'RR' |
  'PA' |
  'AP' |
  'TO' |
  'MA' |
  'PI' |
  'CE' |
  'RN' |
  'PB' |
  'PE' |
  'AL' |
  'SE' |
  'BA' |
  'MG' |
  'ES' |
  'RJ' |
  'SP' |
  'PR' |
  'SC' |
  'RS' |
  'MS' |
  'MT' |
  'GO' |
  'DF';

type Svgs =
  'left-icon' |
  'bra-icon' |
  'usa-icon' |
  States;


  type AvaiableCountries = 'BRA' | 'USA';

type Connections = 'ibge';

interface OptionProps {
  color: string[];
  icon: Svgs;
  title: string;
  description: string;
  handleClick: () => void;
}

type FlagsResponseRequest = {
  loading: boolean;
  error?: string;
  called: boolean;
}