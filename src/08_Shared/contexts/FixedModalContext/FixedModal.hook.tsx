/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: FixedModal useFixedModal

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { useContext } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { FixedModalContext } from "./FixedModal.context";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const useFixedModal = () => {
   const ctx = useContext(FixedModalContext);
   if (!ctx) throw new Error('useModal must be inside ModalProvider');
   return ctx;
};
