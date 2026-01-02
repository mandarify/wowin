/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: MenuItem

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IMenuItem from "./MenuItem.types";

// ########## СТИЛИ
import "./MenuItem.styles.css";

// ########## КОМПОНЕНТЫ
import { NavLink } from "react-router-dom";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const MenuItem = ({ title, path, children, position }: IMenuItem): JSX.Element => {

   const vibrate = useVibrate();
   const goToPath = useCallback(() => vibrate.apply("soft"), [vibrate]);

   return (
      <div className={`menu-item ${position ? `menu-item-${position}` : ''}`.trim()}>
         <NavLink end to={path} onClick={goToPath} className={({ isActive }) => `menu-item-link ${isActive ? 'menu-item-link_active double-icon-active' : ''}`}>
            <div className="menu-item__top">{children}</div>
            <div className="menu-item__bottom">
               <span className="menu-item__title _unuse">{title}</span>
            </div>
         </NavLink>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(MenuItem);
