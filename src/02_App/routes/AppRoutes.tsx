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

         <Route element={<Layouts.Page />}>

            <Route path="/profile">
               <Route index element={<Pages.basic.Profile />} />
            </Route>

         </Route>

         <Route element={<Layouts.FullPage />}>

            <Route path="/" element={<Navigate to="/game" replace />} />

            <Route path="/game" element={<Pages.basic.Home />} />

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

         </Route>

         <Route element={<Layouts.GameCase />}>

            <Route path="/game/case/package" element={<Pages.games.Case name="package" />} />
            <Route path="/game/case/fortune" element={<Pages.games.Case name="fortune" />} />
            <Route path="/game/case/swag" element={<Pages.games.Case name="swag" />} />
            <Route path="/game/case/iceblock" element={<Pages.games.Case name="iceblock" />} />
            <Route path="/game/case/glow" element={<Pages.games.Case name="glow" />} />

         </Route>

         <Route element={<Layouts.FullPage />}>

            <Route path="/404" element={<Pages.technical.E404 />} />

            <Route path="*" element={<Navigate to="/404" replace />} />

         </Route>


      </Routes>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default AppRoutes;
