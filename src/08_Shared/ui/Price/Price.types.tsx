/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IPrice

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART

// ########## ТИПЫ
import type { GameResources } from "@shared/types/games.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


export default interface IPrice {
   value: number;
   size: 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30;
   justify: "start" | "end" | "none";
   resource?: GameResources;
   strike?: boolean;
   animation?: boolean;
   extraClass?: string;
};
