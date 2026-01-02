/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Settings Consts

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { ELanguageCode } from "@entities/Language/Language.types";

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

