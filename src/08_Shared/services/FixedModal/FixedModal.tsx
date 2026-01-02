/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: FixedModal

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import { createPortal } from "react-dom";

// ########## ТИПЫ
import type IFixedModal from "./FixedModal.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const FixedModal = ({ children }: IFixedModal): React.ReactNode => {

   const fixedModal = document.getElementById("modal");
   if (!fixedModal) return null;

   return createPortal(<>{children}</>, fixedModal);
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default FixedModal;
