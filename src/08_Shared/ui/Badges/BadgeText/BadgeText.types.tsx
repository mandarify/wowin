/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IBadgeText

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

export default interface IBadgeText {
   text: string;
   style: "new" | "limit" | "timer";
   extraClass?: string;
};
