/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BtnBasic

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";

// ########## ТИПЫ
import type IBtnBasic from "./BtnBasic.types";

// ########## СТИЛИ
import "./BtnBasic.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const BtnBasic = ({ id, title, icon, isActive, extraClass, action }: IBtnBasic): JSX.Element => {

   const vibrate = useVibrate();

   const clickByBtn = () => {
      vibrate.apply("soft");
      action(id);
   };

   return (
      <div className={`btn-basic ${isActive ? 'btn-basic_active' : ''} ${extraClass ?? ""}`.trim()} onClick={clickByBtn}>
         <span className={`svg-icon svg-model-${icon}`} />
         <span className="btn-basic-title _unselect">{title}</span>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BtnBasic);

