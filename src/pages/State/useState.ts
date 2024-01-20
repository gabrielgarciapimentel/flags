import { useCallback, useLayoutEffect } from "react";
import { useHeaderControl } from "../../hooks/useHeaderControl"
import { Location, useLocation, useNavigate } from "react-router-dom";
import { StateProps } from "./types";
import { Countries } from "../../types/enums";
import { useGetStates } from "../../hooks/useGetStates";

export const useState = () => {
  const {initialSetup, enableBackButton, disableBackButton} = useHeaderControl();
  const {state} = useLocation() as Location<StateProps>;
  const {handleGetStates, data, loading} = useGetStates();
  const navigate = useNavigate();

  const handleNavigate = useCallback((item: State) => {

    navigate('/countries/state/cities', { state: { ...item } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useLayoutEffect(() => {
    if (!state) {
      history.back();
    }

    initialSetup({color: state.color[0], description: state.description, title: Countries[state.title as AvaiableCountries]});
    enableBackButton();

    return () => {
      disableBackButton();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  
  useLayoutEffect(() => {
    handleGetStates();
  }, []);
  
  return {colors: state.color, data, loading, handleNavigate};
}