/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IBadgeTimer

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


export default interface IBadgeTimer {
   dtStart: number,
   duration: number,
   style: "new" | "limit" | "timer";
   extraClass?: string;
};
