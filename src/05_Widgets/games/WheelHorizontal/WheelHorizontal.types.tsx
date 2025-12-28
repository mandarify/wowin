/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IWheelHorizontal

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART
import React from "react";

// ########## ТИПЫ
import type { GameCaseItem } from "@shared/types/games/case.types";
import type { CaseLogicElement } from "@shared/modules/CaseLogic/CaseLogic.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import CaseLogic from "@shared/modules/CaseLogic/CaseLogic";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


export interface IWheelHorizontalElement {
   data: CaseLogicElement;
};

export interface IWheelHorizontalElementHandler {
   element: HTMLDivElement | null;
   setX: (x: number) => void;
   setData: (newData: GameCaseItem) => void;
};

export interface IWheelHorizontalState {
   refId: number | null;
   timeStart: number | null;
   distance: number;
   currentId: number;
   isPlay: boolean;
};

export interface IWheelHorizontalItem {
   ref: React.RefObject<IWheelHorizontalElementHandler | null>;
   data: CaseLogicElement,
};

export interface WheelHorizontalHandler {
   play: (winId: number) => void;
};

export default interface IWheelHorizontal {
   logic: CaseLogic;
};
