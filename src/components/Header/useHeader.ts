import { useCallback } from "react";
import { useHeaderControl } from "../../hooks/useHeaderControl"
import { HeaderLayoutProps } from "./types";

export const useHeader: () => HeaderLayoutProps = () => {
  const {title, color, description, hasBackButton} = useHeaderControl();

  const handleBackButton = useCallback(() => {
    history.back();
  }, [])

  return {title, color, description, hasBackButton, handleBackButton}
}