/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: ShopPage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type IShopPage from "./ShopPage.types";

// ########## СТИЛИ
import "./ShopPage.styles.css";

// ########## КОМПОНЕНТЫ
import { TitleMain } from "@shared/ui";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const ShopPage = (): JSX.Element => {
   return (
      <div className="content-page">
         <div className="page-shop">
            <TitleMain title="магазин" icon="shop" />
         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default ShopPage;
