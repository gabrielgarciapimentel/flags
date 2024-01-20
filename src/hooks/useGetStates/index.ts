import { useCallback } from "react";
import { create } from "zustand";
import { axiosInstance } from "../../services/axiosInstance";
import { IbgeStatesResult } from "./types";
import { COLORS } from "../../styles/global";

const useStates = create<StateModelState & StateModelActions>((set) => ({
  data: [],
  loading: false,
  called: false,
  error: undefined,
  setData: (props) => set((oldState) => ({...oldState, ...props})),
  reset: () => set(() => ({data: [], called: true, loading: false, error: undefined})),
  resetWithError: (props) => set(() => ({data: [], called: true, loading: false, error: props}))
}))

export const useGetStates = () => {
  const {data, loading, called, reset, resetWithError, setData} = useStates();

  const handleGetStates = useCallback(async() => {
    try {
      reset();

      const {data} = await axiosInstance({connection: 'ibge'}).get<IbgeStatesResult[]>('/localidades/estados');

      const formattedDate: State[] = data.map(item => {
        const formatted: State = {
          id: item.id,
          name: item.nome,
          icon: item.sigla as Svgs,
          color: COLORS[item.sigla as States]
        }

        return formatted
      });

      setData({
        called: true,
        data: formattedDate,
        loading: false,
        error: undefined
      });
      
    } catch (error) {
      resetWithError('Ocorreu algum erro');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {data, loading, called, handleGetStates};
};