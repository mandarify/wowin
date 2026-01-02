/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: GAMES TYPES

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

/**
 * Ресурсы игры.
 */
export type GameResources = "coin" | "case";

/**
 * Типы игр.
 */
export type GameType = "top" | "case" | "duel" | "pvp" | "solo";

/**
 * Статус игры.
 */
export type GameStatus = "edit" | "published" | "deleted";

/**
 * Общие параметры для описания игры.
 * - `id`         : идентификатор игры.
 * - `isTop`      : нахождение в топе игр.
 * - `position`   : позиция игры в своей категории.
 * - `title`      : название игры.
 * - `desc`       : описание игры.
 * - `slug`       : сокращенное название игры.
 */
export type GameTopic = {
   id: number,
   version: number,
   status: GameStatus,
   isTop: null | number,
   position: number,
   title: string,
   desc: string,
   slug: string,
   /* Unix дата публикации. */
   dtPublication: number | null,
   /* Unix дата обновления. */
   dtUpdated: number;
   /* Unix дата создания. */
   dtCreated: number,
   /* Unix дата удаления. */
   dtDeleted: number | null,
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
};
