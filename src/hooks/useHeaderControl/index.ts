import { create } from "zustand";

export const useHeaderControl = create<HeaderModelState & HeaderModelActions>((set) => ({
  color: '#309E3A',
  description: '',
  hasBackButton: false,
  title: '',
  initialSetup: (props) => set((oldState) => ({...oldState, ...props})),
  enableBackButton: () => set((oldState) => ({...oldState, hasBackButton: true})),
  disableBackButton: () => set((oldState) => ({...oldState, hasBackButton: false})),
}))