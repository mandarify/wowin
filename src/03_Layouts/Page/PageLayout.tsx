/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: PageLayout

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import { Menu } from "@widgets/interface";
import { Outlet } from "react-router-dom";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const PageLayout = (): JSX.Element => {
   return (
      <>

         <div className="app">
            <div className="app-container">
               <main className="main">

                  <Outlet />

               </main>
            </div>
         </div>

         <Menu />

      </>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default PageLayout;
