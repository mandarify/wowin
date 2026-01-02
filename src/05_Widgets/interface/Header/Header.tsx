/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Header

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type IHeader from "./Header.types";

// ########## СТИЛИ
import "./Header.styles.css";

// ########## КОМПОНЕНТЫ
import HeaderMain from "./views/HeaderMain/HeaderMain";
import HeaderBack from "./views/HeaderBack/HeaderBack";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const Header = ({ type }: IHeader): JSX.Element => {

   return (
      <header id="header">

         <div className="header-backdrop _unuse"></div>

         <div className="header-container">

            {(!type || type === "main") && <HeaderMain />}
            {type === "back" && <HeaderBack />}
            {type === "empty" && <div className="header-content header-empty" />}

         </div>

      </header>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Header;
