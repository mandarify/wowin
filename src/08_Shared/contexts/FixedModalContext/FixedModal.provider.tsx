/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: FixedModal Provider

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { useState, useCallback, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import FixedModal from "@shared/services/FixedModal/FixedModal";

// ########## МОДУЛИ
import { FixedModalContext } from "./FixedModal.context";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const FixedModalProvider = ({ children }: { children: React.ReactNode }) => {

   const [content, setContent] = useState<React.ReactNode | null>(null);

   const location = useLocation();

   const open = useCallback((node: React.ReactNode) => {
      setContent(node);
   }, []);

   const close = useCallback(() => {
      setContent(null);
   }, []);

   useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setContent(null);
   }, [location.pathname, setContent]);

   const value = useMemo(() => ({ open, close }), [open, close]);

   return (
      <FixedModalContext.Provider value={value}>
         {children}
         {content && <FixedModal>{content}</FixedModal>}
      </FixedModalContext.Provider>
   );
};
