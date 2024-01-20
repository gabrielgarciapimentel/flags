import { useCallback, useLayoutEffect, useMemo } from "react";
import { useHeaderControl } from "../../hooks/useHeaderControl";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
  const { initialSetup } = useHeaderControl();
  const navigate = useNavigate();

  const handleNavigate = useCallback((item: Omit<OptionProps, 'handleClick'>) => {
    if (item.icon === 'usa-icon') {
      alert('OPS... Estamos implementando isso ainda.');
      return;
    }
    navigate('/countries/state', { state: { ...item } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countries = useMemo<Omit<OptionProps, 'handleClick'>[]>(() => [
    {
      color: ['#309E3A', '#FEE000', '#002277'],
      icon: 'bra-icon',
      title: 'BRA',
      description: 'Lista de estados brasileiros'
    },
    {
      color: ['#BD3D44', '#FFFFFF', '#192F5D'],
      icon: 'usa-icon',
      title: 'USA',
      description: 'Lista de estados estadunidenses'
    }
  ], []);

  useLayoutEffect(() => {
    initialSetup({ color: '#292929', description: 'Lista de países disponíveis', title: 'PAÍSES' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { handleNavigate, countries }
}