/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Language Selectors

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { AppState } from "@store/store";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const getLanguageState = (state: AppState) => state.language;

export const getLanguageDate = (state: AppState) => state.language.date;

export const getCurrentLanguage = (state: AppState) => state.language.current;
