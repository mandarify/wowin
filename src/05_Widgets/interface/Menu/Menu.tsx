/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Menu

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type IMenu from "./Menu.types";

// ########## СТИЛИ
import "./Menu.styles.css";

// ########## КОМПОНЕНТЫ
import MenuMain from "./views/MenuMain/MenuMain";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const Menu = ({ type }: IMenu): JSX.Element => {
   return (
      <menu id="menu" className={type === "empty" ? '_empty' : ''}>

         <div className="menu-backdrop _unuse"></div>

         <div className="menu-container">

            {(!type || type === "main") && <MenuMain />}
            {type === "empty" && <div className="menu-content menu-empty" />}

         </div>

      </menu>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Menu;
