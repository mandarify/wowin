/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: ITitleMain

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

/**
 * Интерфейс для инициализации комопнента TitleMain.
 * - `title`      : заголовок.
 * - `icon`       : иконка.
 */
export default interface ITitleMain {
   title: string;
   icon: "swords" | "box" | "shop" | "chess-queen" | "cup" | "settings" | "notification";
};
