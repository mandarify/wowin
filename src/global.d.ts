declare global {
   interface Window {
      Telegram?: typeof import("telegram-webapps");
      __modal_root__?: import("react-dom/client").Root;
   }
}

export { };
