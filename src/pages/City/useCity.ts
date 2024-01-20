import { useLayoutEffect } from "react";
import { useHeaderControl } from "../../hooks/useHeaderControl";
import { Location, useLocation } from "react-router-dom";
import { CityProps } from "./types";
import { useGetCities } from "../../hooks/useGetCity";

export const useCity = () => {
  const { initialSetup, enableBackButton, disableBackButton } = useHeaderControl();
  const {state} = useLocation() as Location<CityProps>;
  const {data, handleGetCities} = useGetCities();

  const {icon} = state;

  useLayoutEffect(() => {
    if (!state) {
      history.back();
    }

    initialSetup({color: state.color, description: 'Lista de municípios', title: state.name.toUpperCase()});
    enableBackButton();

    return () => {
      disableBackButton();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useLayoutEffect(() => {
    if (icon) {
      handleGetCities({state: icon});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [icon]);

  return {colors: [state.color], icon: state.icon, data};
}