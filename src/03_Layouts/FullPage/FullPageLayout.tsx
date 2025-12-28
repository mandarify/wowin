/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: FullPageLayout

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import { Menu, Header } from "@widgets/interface";
import { Outlet } from "react-router-dom";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const FullPageLayout = (): JSX.Element => {
   return (
      <>
         <Header />

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

export default FullPageLayout;
