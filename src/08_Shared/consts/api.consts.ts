/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: API CONSTS

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { ELanguageCode } from "@entities/Language/Language.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const API = {
   LANGUAGES: {
      get: {
         name: "language/getLanguage",
         url: (lan: ELanguageCode) => `/wowin/test/data/lang/${lan}.json`,
      },
   },
   SLIDES: {
      get: {
         name: "slides/getSlides",
         url: "/wowin/test/data/slides.json",
      },
   },
   GAMES: {
      getAll: {
         name: "games/getGames",
         url: "/wowin/test/data/games.json",
      }
   }
};
