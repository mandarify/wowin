/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: AuthProvider

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STORE
import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from "@entities/Language/Language.thunks";
import { getLanguageState } from "@entities/Language/Language.selectors";

// ########## STANDART
import type React from "react";
import { useEffect } from "react";

// ########## ТИПЫ
import type { AppDispatch } from "@store/store";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import LanguageStorage from "@shared/storagies/Language/Language.storage";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const AuthProvider = (props: { children: React.ReactNode }): React.ReactNode => {

   const dispatch = useDispatch<AppDispatch>();
   const language = useSelector(getLanguageState);

   useEffect(() => {
      if (language.status === "idle") {
         const lan = LanguageStorage.load();
         dispatch(getLanguage(lan));
      }
   }, [dispatch, language.status]);

   if (language.status !== "success") return <div>loading...</div>;
   return props.children;
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default AuthProvider;
