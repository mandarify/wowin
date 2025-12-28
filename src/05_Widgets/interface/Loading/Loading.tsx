/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Loading

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useEffect, useRef } from "react";

// ########## ТИПЫ
import type { ILoading } from "./Loading.types";

// ########## СТИЛИ
import "./Loading.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Loading = ({ status, delay, extraClass }: ILoading): JSX.Element => {

   const vibrate = useVibrate();

   const loadRef = useRef<HTMLDivElement>(null);
   const doorsRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const load = loadRef.current;
      const doors = doorsRef.current;
      if (!load || !doors) return;

      let timeoutId: number | null = null;

      // Close Loading
      const close = () => {
         document.body.classList.add('no-scroll');
         load.classList.remove("loading-open");
         load.classList.add("loading-close");
      };

      // Open Loading
      const open = () => {
         vibrate.apply('medium');
         load.classList.remove("loading-close");
         load.classList.add("loading-open");
         document.body.classList.remove('no-scroll');
      };

      if (status === "close") close();

      else if (status === "open") {
         if (!delay) open();
         else {
            timeoutId = setTimeout(() => {
               open();
               if (timeoutId) clearTimeout(timeoutId);
            }, delay);
         }
      }

      return () => {
         if (timeoutId) clearTimeout(timeoutId);
         document.body.classList.remove('no-scroll');
      };

   }, [status, delay, vibrate]);

   return (
      <div ref={loadRef} className={`loading loading-close ${extraClass ?? ''} _unuse`.trim()}>

         <div ref={doorsRef} className="loading-doors">
            <div className="loading-doors-part loading-doors-left _use" />
            <div className="loading-doors-part loading-doors-right _use" />
         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(Loading);
