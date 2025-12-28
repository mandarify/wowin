/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BtnGameType

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IBtnGameType from "./BtnGameType.types";

// ########## СТИЛИ
import "./BtnGameType.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { GameIcons } from "@shared/consts/data.consts";
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const BtnGameType = ({ type, action }: IBtnGameType): JSX.Element => {

   const vibrate = useVibrate();

   const onBtnClick = useCallback(() => {
      vibrate.apply("soft");
      action();
   }, [vibrate, action]);

   return (
      <div className="btn-gametype" onClick={onBtnClick}>
         <span className={`svg-icon svg-icon-16 svg-model-${GameIcons[type]}`} />
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BtnGameType);
