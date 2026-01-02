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
import { Provider } from "react-redux";

import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./providers/AuthProvider/AuthProvider";

import LocationProvider from "./providers/LocationProvider/LocationProvider";
import TelegramProvider from "./providers/TelegramProvider/TelegramProvider";

import { FixedModalProvider } from "@shared/contexts/FixedModalContext/FixedModal.provider";

// ########## МОДУЛИ
import store from "@store/store";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const App = (): JSX.Element => {
   return (
      <BrowserRouter basename="/wowin">
         <Provider store={store}>
            <TelegramProvider>
               <AuthProvider>
                  <LocationProvider key="app">

                     <FixedModalProvider>

                        <AppRoutes />

                     </FixedModalProvider>

                  </LocationProvider>
               </AuthProvider>
            </TelegramProvider>
         </Provider>
      </BrowserRouter>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default App;
