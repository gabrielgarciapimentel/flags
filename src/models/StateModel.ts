/* eslint-disable @typescript-eslint/no-unused-vars */

type State = {
  readonly id: number;
  readonly name: string;
  readonly icon: Svgs;
  readonly color: string;
}

interface StateModelState extends FlagsResponseRequest {
  data: State[];
}

interface StateModelActions {
  setData: (props: StateModelState) => void;
  reset: () => void;
  resetWithError: (error: string) => void;
} 