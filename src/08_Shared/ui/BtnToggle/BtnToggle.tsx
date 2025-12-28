/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BtnToggle

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IBtnToggle from "./BtnToggle.types";

// ########## СТИЛИ
import "./BtnToggle.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const BtnToggle = ({ id, isActive, action, children, extraClass }: IBtnToggle): JSX.Element => {

   const vibrate = useVibrate();

   const onClick = useCallback(() => {
      vibrate.apply("soft");
      action(id);
   }, [action, vibrate, id]);

   return (
      <div className={`btn-toggle ${extraClass ?? ''} ${isActive ? 'btn-toggle_active' : ''}`.trim()} onClick={onClick}>
         <div className="btn-toggle-content">
            {children}
         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BtnToggle);
