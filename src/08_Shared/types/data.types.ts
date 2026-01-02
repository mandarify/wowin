/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: DATA TYPES

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART

// ########## ТИПЫ
import type { GameTopic, GameType, GameCatygory } from "./games.types";
import type { GameCase, GameCaseItemContent } from "./games/case.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

/**
 * Набор данных о выигранном подарке.
 */
export type TWinData = {
   user: {
      tid: string,
      name: string,
      avatar: string,
   },
   game: GameTopic,
   type: GameType,
   content: GameCaseItemContent,
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

/**
 * Набор данных о всех доступных играх.
 */
export type TGamesData = {
   categories: GameCatygory[],
   top?: {
      gamesIds: number[],
   },
   case?: {
      games: GameCase[],
   },
   duel?: {
      games: string[],
   },
   pvp?: {
      games: string[],
   },
   solo?: {
      games: string[],
   }
}

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */
