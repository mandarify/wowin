/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: SORT

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART

// ########## ТИПЫ
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
      const aIsNew = isWithinDays(a.dtCreate, 7);
      const bIsNew = isWithinDays(b.dtCreate, 7);

      // если одна новая, а другая нет — новая выше
      if (aIsNew && !bIsNew) return -1;
      if (!aIsNew && bIsNew) return 1;

      // если обе новые или обе не новые — сортируем по position
      return a.position - b.position;
   })

   return games;

};
