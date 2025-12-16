/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: GAMES TYPES

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


/**
 * Типы игр.
 */
export type GameType = "top" | "case" | "duel" | "pvp" | "solo";


/**
 * Общие параметры для описания игры.
 * - `id`         : идентификатор игры.
 * - `isTop`      : нахождение в топе игр.
 * - `position`   : позиция игры в своей категории.
 * - `title`      : название игры.
 * - `desc`       : описание игры.
 * - `link`       : ссылка на игру.
 */
export type GameTopic = {
   id: number,
   isTop: null | number,
   position: number,
   title: string,
   desc: string,
   link: string,
};


/**
 * Категория игр. 
 * - `id`     : идентификатор категории.
 * - `type`   : тип категории.
 * - `title`  : название категории.
 */
export type GameCatygory = {
   id: number,
   type: GameType,
   title: string,
};
