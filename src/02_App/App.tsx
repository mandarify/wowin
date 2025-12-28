/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: App

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import LocationProvider from "./providers/LocationProvider/LocationProvider";
import TelegramProvider from "./providers/TelegramProvider/TelegramProvider";

import { FixedModalProvider } from "@shared/contexts/FixedModalContext/FixedModalContext";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const App = (): JSX.Element => {
   return (
      <BrowserRouter basename="/wowin">
         <TelegramProvider>
            <AuthProvider>
               <LocationProvider key="app">

                  <FixedModalProvider>

                     <AppRoutes />

                  </FixedModalProvider>

               </LocationProvider>
            </AuthProvider>
         </TelegramProvider>
      </BrowserRouter>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default App;
