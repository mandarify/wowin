/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: MAIN

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ########## ТИПЫ

// ########## СТИЛИ
import "@styles/index.css";

// ########## КОМПОНЕНТЫ
import App from '@app/App';

// ########## МОДУЛИ

// ########## ПРОВАЙДЕРЫ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


/* Задний фон приложения. */
const backdrop = document.getElementById('backdrop')!;

/* Вход в приложение. */
const wrapper = document.getElementById('wrapper')!;


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


createRoot(backdrop).render(<></>);

createRoot(wrapper).render(
   <StrictMode>
      <App />
   </StrictMode>
);


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */
