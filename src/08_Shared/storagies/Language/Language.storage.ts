/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Language Locale Storage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { ELanguageCode } from "@entities/Language/Language.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { STORAGE } from "@shared/consts/storage.consts";
import { LANGUAGE_DEFAULT } from "@shared/consts/settings.consts";
import { LanguageCodes } from "@entities/Language/Language.types";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const LanguageStorage = {

   load: (): ELanguageCode => {
      try {
         const raw = localStorage.getItem(STORAGE.APP_SETTINGS.LANGUAGE) as (ELanguageCode | null);
         if (raw && LanguageCodes.includes(raw)) return raw;
         else throw Error;
      } catch {
         localStorage.setItem(STORAGE.APP_SETTINGS.LANGUAGE, LANGUAGE_DEFAULT);
         return LANGUAGE_DEFAULT;
      }
   },

   save: (lan: ELanguageCode): void => {
      localStorage.setItem(STORAGE.APP_SETTINGS.LANGUAGE, lan);
   },

};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default LanguageStorage;
