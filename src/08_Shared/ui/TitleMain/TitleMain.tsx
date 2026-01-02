/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: TitleMain

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type ITitleMain from "./TitleMain.types";

// ########## СТИЛИ
import "./TitleMain.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const TitleMain = ({ title, icon }: ITitleMain): JSX.Element => {
   return (
      <div className="title-block">
         <span className={`svg-icon svg-icon-14 svg-model-${icon}`} />
         <h1 className="title-main _unselect">{title}</h1>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default TitleMain;
