/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: ITextGame

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

export default interface ITextGame {
   type: "line" | "block";
   content: string;
   gradient?: true;
   extraClass?: string;
};
