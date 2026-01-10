/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: SettingsPage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type ISettingsPage from "./SettingsPage.types";

// ########## СТИЛИ
import "./SettingsPage.styles.css";

// ########## КОМПОНЕНТЫ
import { TitleMain } from "@shared/ui";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const SettingsPage = (): JSX.Element => {
   return (
      <div className="content-page">
         <div className="page-settings">
            <TitleMain title="настройки" icon="settings" />

            <pre>V.0.0.38</pre>

            {!!Telegram?.WebApp?.initDataUnsafe?.user &&
               <>

                  <pre>{JSON.stringify({
                     user: {
                        id: Telegram.WebApp.initDataUnsafe.user.id,
                        name: Telegram.WebApp.initDataUnsafe.user.first_name + " " + Telegram.WebApp.initDataUnsafe.user.last_name,
                        username: Telegram.WebApp.initDataUnsafe.user.username,
                     }
                  }, null, 3)}</pre>

                  <pre>{JSON.stringify({
                     platform: Telegram.WebApp.platform,
                     safeArea: Telegram.WebApp.safeAreaInset,
                     contentSafeArea: Telegram.WebApp.safeAreaInset,
                     viewportHeight: Telegram.WebApp.viewportHeight,
                     viewportStableHeight: Telegram.WebApp.viewportStableHeight,
                  }, null, 3)}</pre>

                  <pre>{JSON.stringify({
                     winInnerHeight: window.innerHeight,
                     clientHeight: document.documentElement.clientHeight,
                     scrollHeight: document.documentElement.scrollHeight,
                     visualViewport: window.visualViewport,
                  }, null, 3)}</pre>

               </>
            }

         </div>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default SettingsPage;
