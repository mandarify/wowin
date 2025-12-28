/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: LocationProvider

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ########## ТИПЫ

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useBackButton from "@shared/hooks/useBackButton";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const LocationProvider = (props: { children: React.ReactNode }): React.ReactNode => {

   useBackButton();

   const location = useLocation();

   useEffect(() => {
      console.log(`Path: %c${location.pathname}`, `color: ${location.pathname === '/404' ? 'red' : 'green'}`);
      scrollTo({ top: 0 });
   }, [location]);

   return props.children;
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default LocationProvider;
