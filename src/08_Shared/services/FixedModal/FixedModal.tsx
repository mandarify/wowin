/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: FixedModal

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import { createPortal } from "react-dom";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export interface IFixedModal {
   children: React.ReactNode;
};

const FixedModal = ({ children }: IFixedModal): React.ReactNode => {

   const fixedModal = document.getElementById("modal");
   if (!fixedModal) return null;

   return createPortal(<>{children}</>, fixedModal);
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default FixedModal;
