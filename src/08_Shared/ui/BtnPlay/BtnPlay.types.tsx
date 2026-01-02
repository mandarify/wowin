/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IBtnPlay

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export type BtnPlayLabelPosition = "top" | "center" | "bottom";

export type BtnPlayLabel = {
   id: string;
   element: React.ReactNode;
   position: BtnPlayLabelPosition;
};

export default interface IBtnPlay {
   delay: number;
   states: {
      main: React.ReactNode;
      wait: React.ReactNode;
   },
   action: () => void;
};
