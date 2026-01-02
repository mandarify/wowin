/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: STORE

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STORE
import { configureStore } from "@reduxjs/toolkit";

// ########## STANDART

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import languageReducer from "@entities/Language/Language.slice";
import slidesReducer from "@entities/Slides/Slides.slice";
import gamesReducer from "@entities/Games/Games.slice";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const store = configureStore({
   reducer: {
      language: languageReducer,
      slides: slidesReducer,
      games: gamesReducer,
   },
});

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
