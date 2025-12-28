/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: useBackButton

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useVibrate from "./useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const useBackButton = () => {

   const vibrate = useVibrate();
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {

      const isTelegram = Telegram?.WebApp?.initDataUnsafe?.user;
      if (!isTelegram) return;

      const tg = Telegram!.WebApp!;

      if (location.pathname === '/game') {
         if (tg.BackButton.isVisible) tg.BackButton.hide();
      } else {
         if (!tg.BackButton.isVisible) tg.BackButton.show();
      }

      const onBack = () => {
         if (location.pathname !== '/game') {
            vibrate.apply("soft");
            navigate(-1);
         } else {
            tg.close();
         }
      };

      tg.BackButton.onClick(onBack);

      return () => {
         tg.BackButton.offClick(onBack);
         tg.BackButton.hide();
      };

   }, [location.pathname, navigate, vibrate]);
}


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default useBackButton;
