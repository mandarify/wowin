/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: КОНСТАНТЫ

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART

// ########## ТИПЫ
import type { GameType } from "@shared/types/games.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

/**
 * Категории игр и их иконки.
 */
export const GameIcons = {
   "top": "fire",
   "case": "box",
   "duel": "swords",
   "pvp": "chess-queen",
   "solo": "chess-pawn",
} as const satisfies Record<GameType, string>;

/**
 * Значения иконок.
 */
export type GameIcon = typeof GameIcons[keyof typeof GameIcons];
