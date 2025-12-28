/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IPopup

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


export default interface IPopup {
   title: string;
   closeAction: () => void;
   children: JSX.Element;
   style?: "info";
   button?: {
      name: string;
      action: (flag: boolean) => void;
      checkbox?: string;
   };
};
