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
 * СЛАЙД
 * - `id`      : идентификатор слайда.
 * - `src`     : ссылки на изображения в плохом и хорошем качестве.
 * - `title`   : название слайда.
 * - `link`    : ссылка для перехода по клику на слайд.
 */
export type TSlideData = {
   id: number,
   srcs: {
      low: string;
      high: string;
   },
   title: string;
   link: string,
};

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
