/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IBadgeLimit

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

export default interface IBadgeLimit {
   total: number,
   purchased: number,
   style: "new" | "limit" | "timer";
   extraClass?: string;
};
