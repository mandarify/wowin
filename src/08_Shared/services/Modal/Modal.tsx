/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Модальное окно.

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART
import type { ReactNode } from "react";
import { createRoot } from 'react-dom/client';

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


function getModalRoot() {
   if (!window.__modal_root__) {
      const el = document.getElementById("modal");
      if (!el) throw new Error("#modal not found");
      window.__modal_root__ = createRoot(el);
   }
   return window.__modal_root__;
}

class Modal {

   private modal: ReactNode = null;

   constructor() { }

   open = (component: ReactNode) => {
      const modalRoot = getModalRoot();
      this.modal = component;
      modalRoot.render(<>{this.modal && (this.modal)}</>);
   };

   close = () => {
      const modalRoot = getModalRoot();
      modalRoot.render(<></>);
      this.modal = null;
   };

};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const modal = new Modal();

export default modal;
