/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: GameCaseLayout

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import { Outlet } from "react-router-dom";
import { Header, Menu } from "@widgets/interface";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const GameCaseLayout = (): JSX.Element => {
   return (
      <>

         <Header type="back" />

         <div className="app">
            <div className="app-container">
               <main className="main">

                  <Outlet />

               </main>
            </div>
         </div>

         <Menu type="empty" />

      </>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default GameCaseLayout;
