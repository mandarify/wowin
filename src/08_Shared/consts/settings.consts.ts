/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Settings Consts

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { ELanguageCode } from "@entities/Language/Language.types";
import type { CaseLogicParams } from "@shared/modules/CaseLogic/CaseLogic.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const LANGUAGE_DEFAULT: ELanguageCode = "ru";

/* Время для запроса новых слайдов (10 мин.) */
export const UPDATE_SLIDES_SEC = 600;

/* Время для запроса новго списка игр (10 мин.) */
export const UPDATE_GAMES_SEC = 600;

export const SLIDER = {
   SWIPE_THRESHOLD: 40,
   NEXT_SLIDE_MS: 10000,
   BTN_MOVE_PERCENT: 16,
   ANIMATION_MS: 500,
};

/* Case Logic Params: Long 5s and Short 2.5s. */

export const CASE_LOGIC_LONG: CaseLogicParams = {
   sizes: {
      wrapper: 500,
      element: 100,
   },
   args: {
      timeAcc: 0.5,
      timeMax: 2.0,
      timeDec: 2.5,
      wayWrapperCount: 10,
   }
};

export const CASE_LOGIC_SHORT: CaseLogicParams = {
   sizes: {
      wrapper: 500,
      element: 100,
   },
   args: {
      timeAcc: 0.5,
      timeMax: 1.0,
      timeDec: 1.0,
      wayWrapperCount: 10,
   }
};
