/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: SORT

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { TGamesData } from "@shared/types/data.types";
import type { GameCase } from "@shared/types/games/case.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { isWithinDays } from "./time";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

/**
 * Сортировка игр по позиции и новызне.
 * @param games 
 */
export const sortCases = (games: GameCase[]) => {

   games.sort((a, b) => {
      const aIsNew = isWithinDays(a.dtCreated, 7);
      const bIsNew = isWithinDays(b.dtCreated, 7);

      // если одна новая, а другая нет — новая выше
      if (aIsNew && !bIsNew) return -1;
      if (!aIsNew && bIsNew) return 1;

      // если обе новые или обе не новые — сортируем по position
      return a.position - b.position;
   })

   return games;

};

/**
 * Получить игры, которые нахоядтся в топе.
 * @param data 
 * @returns 
 */
export const getTopGames = (data: TGamesData) => {
   return {
      categories: data.categories,
      top: data.top,
      case: !data.case ? undefined : { games: data.case.games.filter(game => game.isTop !== null) },
      // duel: !data.duel ? undefined : { games: data.duel.games.filter(game => game.isTop !== null) },
      // pvp: !data.pvp ? undefined : { games: data.pvp.games.filter(game => game.isTop !== null) },
      // solo: !data.solo ? undefined : { games: data.solo.games.filter(game => game.isTop !== null) },
   } as TGamesData;
};
