/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: MenuPage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type IMenuPage from "./MenuPage.types";

// ########## СТИЛИ
import "./MenuPage.styles.css";

// ########## КОМПОНЕНТЫ
import { TitleMain } from "@shared/ui";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const MenuPage = (): JSX.Element => {
   return (
      <div className="content-page">
         <div className="page-menu">
            <TitleMain title="топ" icon="cup" />
         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default MenuPage;
