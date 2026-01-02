/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IBtnSimple

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

export default interface IBtnSimple {
   title: string;
   icon?: "reply" | "info" | "palette";
   isBlock: boolean;
   action: () => void;
   extraClass?: string;
};
