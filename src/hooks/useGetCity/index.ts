import { useCallback } from "react";
import { create } from "zustand";
import { axiosInstance } from "../../services/axiosInstance";
import { IbgeCitiesResult, IbgeCitiesVariable } from "./types";

const useCities = create<CityModelCity & CityModelActions>((set) => ({
  data: [],
  loading: false,
  called: false,
  error: undefined,
  setData: (props) => set((oldState) => ({...oldState, ...props})),
  reset: () => set(() => ({data: [], called: true, loading: false, error: undefined})),
  resetWithError: (props) => set(() => ({data: [], called: true, loading: false, error: props}))
}))

export const useGetCities = () => {
  const {data, loading, called, reset, resetWithError, setData} = useCities();

  const handleGetCities = useCallback(async({state}: IbgeCitiesVariable) => {
    try {
      reset();

      const {data} = await axiosInstance({connection: 'ibge'}).get<IbgeCitiesResult[]>(`/localidades/estados/${state}/distritos`);

      const formattedDate: City[] = data.map(item => {
        const formatted: City = {
          id: item.id,
          name: item.nome,
        }

        return formatted;
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

  return {data, loading, called, handleGetCities};
};