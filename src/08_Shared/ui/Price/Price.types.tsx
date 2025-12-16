/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IPrice

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


export default interface IPrice {
   value: number;
   size: 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30;
   justify: "start" | "end" | "none";
   strike?: boolean;
   extraClass?: string;
};
