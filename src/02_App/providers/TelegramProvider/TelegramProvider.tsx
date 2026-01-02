/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: TelegramProvider

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type React from "react";
import { useEffect } from "react";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const TelegramProvider = (props: { children: React.ReactNode }): React.ReactNode => {

   useEffect(() => {

      const isTelegram = Telegram?.WebApp?.initDataUnsafe?.user;
      if (!isTelegram) return;

      const tg = Telegram!.WebApp!;

      const resize = () => {
         let safeTop = 80;
         let safeBottom = 30;
         if (tg.platform === "ios") {
            safeTop = tg.safeAreaInset.top + 50;
            safeBottom = tg.safeAreaInset.bottom;
         }
         else if (["tdesktop", "web", "weba", "webk", "macos"].includes(tg.platform)) {
            safeTop = 30;
            safeBottom = 30;
         }
         document.documentElement.style.setProperty('--tg-safe-top', `${safeTop}px`);
         document.documentElement.style.setProperty('--tg-safe-bottom', `${safeBottom}px`);
      };

      tg.disableVerticalSwipes();
      tg.enableClosingConfirmation();

      if (!tg.isFullscreen) {
         tg.requestFullscreen();
      }

      resize();

      tg.onEvent("safeAreaChanged", resize);

      return () => {
         tg.offEvent("safeAreaChanged", resize);
      };

   });

   return props.children;
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default TelegramProvider;
