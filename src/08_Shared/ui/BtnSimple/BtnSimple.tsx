/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BtnSimple

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IBtnSimple from "./BtnSimple.types";

// ########## СТИЛИ
import "./BtnSimple.styles.css";

// ########## КОМПОНЕНТЫ
import TextGame from "../TextGame/TextGame";
import IconBasic from "../IconBasic";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const icons = {
   "reply": () => <IconBasic.Reply size={14} />,
   "info": () => <IconBasic.Info size={14} />,
   "palette": () => <IconBasic.Palette size={14} />,
}

const BtnSimple = ({ title, icon, isBlock, action, extraClass }: IBtnSimple): JSX.Element => {

   const vibrate = useVibrate();

   const onBtnClick = useCallback(() => {
      if (isBlock) return;
      vibrate.apply("soft");
      action();
   }, [vibrate, isBlock, action]);

   return (
      <div className={`btn-simple ${isBlock ? 'btn-simple-block' : ''} ${extraClass ?? ''}`.trim()} onClick={onBtnClick}>
         <div className="btn-simple-box">
            {icon && icons[icon]()}
            <TextGame type="block" content={title} extraClass="btn-simple-text" />
         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BtnSimple);
