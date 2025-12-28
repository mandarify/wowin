/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: MenuMain

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type IMenuMain from "./MenuMain.types";

// ########## СТИЛИ
import "./MenuMain.styles.css";

// ########## КОМПОНЕНТЫ
import { IconDouble, MenuItem, MenuTopItem } from "@shared/ui";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const MenuMain = (): JSX.Element => {
   return (
      <div className="menu-content menu-main">

         <MenuItem title="профиль" path="/profile" position="first"><IconDouble.User size={24} /></MenuItem>
         <MenuItem title="ящик" path="/inventory"><IconDouble.Box size={24} /></MenuItem>
         <MenuTopItem path="/game"><IconDouble.Swords size={54} /></MenuTopItem>
         <MenuItem title="магазин" path="/shop"><IconDouble.Shop size={24} /></MenuItem>
         <MenuItem title="меню" path="/menu" position="last"><IconDouble.Menu size={24} /></MenuItem>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default MenuMain;
