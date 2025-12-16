/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: MenuTopItem

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IMenuTopItem from "./MenuTopItem.types";

// ########## СТИЛИ
import "./MenuTopItem.styles.css";

// ########## КОМПОНЕНТЫ
import { NavLink } from "react-router-dom";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const MenuTopItem = ({ path, children }: IMenuTopItem): JSX.Element => {

   const vibrate = useVibrate();
   const goToPath = useCallback(() => vibrate.apply("medium"), [vibrate]);

   return (
      <div className="menu-top-item">
         <NavLink end to={path} onClick={goToPath} className={({ isActive }) => `menu-top-item-link ${isActive ? 'menu-top-item-link_active double-icon-active' : ''}`}>
            <div className="menu-top-item__top">{children}</div>
         </NavLink>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(MenuTopItem);
