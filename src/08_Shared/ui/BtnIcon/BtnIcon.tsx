/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BtnIcon

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IBtnIcon from "./BtnIcon.types";

// ########## СТИЛИ
import "./BtnIcon.styles.css";

// ########## КОМПОНЕНТЫ
import { NavLink } from "react-router-dom";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const BtnIcon = ({ path, size, isNew, children }: IBtnIcon): JSX.Element => {

   const vibrate = useVibrate();

   const goToPath = useCallback(() => vibrate.apply('soft'), [vibrate]);

   return (
      <NavLink to={path} onClick={goToPath} className={`btn-icon btn-icon-${size} ${isNew ? 'btn-icon__new' : ''}`}>
         {children}
      </NavLink>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BtnIcon);
