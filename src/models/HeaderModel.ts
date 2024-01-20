/* eslint-disable @typescript-eslint/no-unused-vars */

interface HeaderModelState {
  readonly title: string;
  readonly description: string;
  readonly color: string;
  readonly hasBackButton: boolean;
}

interface HeaderModelActions {
  initialSetup: (props: Pick<HeaderModelState, 'title' | 'description' | 'color'>) => void;
  enableBackButton: () => void;
  disableBackButton: () => void;
} 