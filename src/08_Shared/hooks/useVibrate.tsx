/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: useVibrate
   - вибрация в приложении.

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


const defaultVibrate = () => {
   if ("vibrate" in navigator) {
      navigator.vibrate(20);
   }
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const useVibrate = () => {

   /* Узнать есть ли настройка вибрации в localStorage.
      Если настройки нет -> по умолчанию выключить вибрацию. */
   const setting = localStorage.getItem("app_setting_vibrate");
   const isVibrate = setting ? setting === "true" : "true";

   /* Узнать находится ли пользователь в телеграм. */
   const isTelegram = !!Telegram?.WebApp?.initDataUnsafe?.user;

   return {
      apply: (type: "soft" | "light" | "medium" | "heavy" | "rigid") => {
         return isVibrate ? (isTelegram ? Telegram.WebApp.HapticFeedback.impactOccurred(type) : defaultVibrate()) : null;
      }
   };
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default useVibrate;
