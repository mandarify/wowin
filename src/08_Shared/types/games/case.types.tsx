/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: CASE TYPES

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART

// ########## ТИПЫ
import type { GameTopic } from "../games.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


/**
 * Редкость предметов в кейсе.
 */
export type GameCaseItemRarity = "legendary" | "epic" | "rare" | "unique" | "common";

/**
 * Тип содержимого предмета.
 */
export type GameCaseItemContentType = "gift" | "coin";

/**
 * Стиль кейса.
 */
export type GameCaseStyle = "purgold" | "ice" | "tree" | "zoom";

/**
 * Описание содержимого предмета.
 * - `id`      : идентификатор содержимого предмета.
 * - `type`    : тип содержимого предмета.
 * - `name`    : название содержимого предмета.
 * - `src`     : ссылка на изображение содержимого предмета.
 */
export type GameCaseItemContent = {
   id: null | string,
   type: GameCaseItemContentType,
   name: string,
   src: string,
};

/**
 * Описание предмета.
 * - `id`         : идентификатор предмета.
 * - `rarity`     : редкость предмета.
 * - `permille`   : шанс предмета.
 * - `content`    : содержимое предмета.
 */
export type GameCaseItem = {
   id: number,
   rarity: GameCaseItemRarity,
   permille: number,
   price: number,
   content: GameCaseItemContent,
};

/**
 * Полное описание игры Кейс.
 */
export type GameCase = GameTopic & {
   /* Unix дата создания кейса. */
   dtCreate: number,
   /** Стиль отображения кейса. */
   style: GameCaseStyle,
   /** Цена на покупки кейса. */
   price: number,
   /** Скидка на покупку. 
    * - `percent`    : процент скидки.  
    * - `oldPrice`   : старая цена.
   */
   sale: null | {
      percent: number,
      oldPrice: number,
   },
   /** Ограничение количества кейсов.
    * - `total`        : общее количество доступных кейсов. 
    * - `purchased`    : количество уже проданных кейсов. 
    */
   limit: null | {
      total: number,
      purchased: number,
   },
   /** Ограничение на время покупки.
    * - `dtStart`    : дата начала.
    * - `duration`   : продолжительность.
   */
   timer: null | {
      dtStart: number,
      duration: number,
   },
   /** Статистика по количеству предметов каждой редкости в кейсе. */
   stats: Record<GameCaseItemRarity, number>,
   /** Ссылки на изображения кейса низкого и высокого качества. */
   srcs: {
      low: string,
      high: string,
   },
   /** Массив предметов кейса. */
   items: GameCaseItem[],
};
