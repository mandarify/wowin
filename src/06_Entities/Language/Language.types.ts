/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Language Types

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { TStoreStatus } from "@shared/types/store.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export type ELanguageCode = "ru" | "en";

export const LanguageCodes: ELanguageCode[] = ["ru", "en"];

export interface ELanguage {
   lan: ELanguageCode;
   labels: Record<string, string>;
};

export interface StateELanguage {
   current: ELanguage | null;
   date: number | null;
   status: TStoreStatus;
   error: string | null;
};
