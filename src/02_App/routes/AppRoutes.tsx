/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: AppRoutes

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useLocation } from "react-router-dom";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import { Routes, Route, Navigate } from "react-router-dom";
import Layouts from "@layouts/index";
import Pages from "@pages/index";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const AppRoutes = (): JSX.Element => {

   const location = useLocation();

   return (
      <Routes location={location} key={location.pathname}>

         <Route path="/" element={<Layouts.Page />}>


            <Route index element={<Navigate to="/game" replace />} />


            <Route path="/game">
               <Route index element={<Pages.basic.Home />} />
               <Route path="case" element={<Pages.games.Case />} />
            </Route>

            <Route path="/profile">
               <Route index element={<Pages.basic.Profile />} />
            </Route>

            <Route path="/inventory">
               <Route index element={<Pages.basic.Inventory />} />
            </Route>

            <Route path="/shop">
               <Route index element={<Pages.basic.Shop />} />
            </Route>

            <Route path="/menu">
               <Route index element={<Pages.basic.Menu />} />
            </Route>

            <Route path="/mail">
               <Route index element={<Pages.basic.Mail />} />
            </Route>

            <Route path="/settings">
               <Route index element={<Pages.basic.Settings />} />
            </Route>

            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="404" element={<Pages.technical.E404 />} />

         </Route>

      </Routes>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default AppRoutes;
