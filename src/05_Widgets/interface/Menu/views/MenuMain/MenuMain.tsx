/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: MenuMain

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STORE
import { useSelector } from "react-redux";
import { getCurrentLanguage } from "@entities/Language/Language.selectors";

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

   const language = useSelector(getCurrentLanguage)!;

   return (
      <div className="menu-content menu-main">

         <MenuItem title={language.labels["menu_main_profile"]} path="/profile" position="first"><IconDouble.User size={24} /></MenuItem>
         <MenuItem title={language.labels["menu_main_inventory"]} path="/inventory"><IconDouble.Box size={24} /></MenuItem>
         <MenuTopItem path="/game"><IconDouble.Swords size={54} /></MenuTopItem>
         <MenuItem title={language.labels["menu_main_shop"]} path="/shop"><IconDouble.Shop size={24} /></MenuItem>
         <MenuItem title={language.labels["menu_main_menu"]} path="/menu" position="last"><IconDouble.Menu size={24} /></MenuItem>

      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default MenuMain;
