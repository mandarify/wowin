/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Menu

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type IMenu from "./Menu.types";

// ########## СТИЛИ
import "./Menu.styles.css";

// ########## КОМПОНЕНТЫ
import { IconDouble, MenuItem, MenuTopItem } from "@shared/ui";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Menu = (): JSX.Element => {
   return (
      <menu id="menu">

         <div className="menu-backdrop _unuse"></div>

         <div className="menu-container">
            <div className="menu-content">

               <MenuItem title="профиль" path="/profile"><IconDouble.User size={24} /></MenuItem>
               <MenuItem title="ящик" path="/inventory"><IconDouble.Box size={24} /></MenuItem>
               <MenuTopItem path="/game"><IconDouble.Swords size={54} /></MenuTopItem>
               <MenuItem title="магазин" path="/shop"><IconDouble.Shop size={24} /></MenuItem>
               <MenuItem title="меню" path="/menu"><IconDouble.Menu size={24} /></MenuItem>

            </div>
         </div>

      </menu>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Menu;
