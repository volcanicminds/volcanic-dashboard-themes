import { useState } from "react";

// Tipo per rappresentare lo stato del drawer
type DrawerState = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
};

const useDrawer = (initialState: boolean = false): DrawerState => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  // Funzione per aprire il drawer
  const openDrawer = () => {
    setIsOpen(true);
  };

  // Funzione per chiudere il drawer
  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Funzione per aprire o chiudere il drawer in base al suo stato attuale
  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return {
    isOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
};

export default useDrawer;
