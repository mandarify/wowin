/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: WheelFortuneMini

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useRef, useEffect, useState, useCallback } from "react";

// ########## ТИПЫ
// import type IWheelFortuneMini from "./WheelFortuneMini.types";

// ########## СТИЛИ
import "./WheelFortuneMini.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const getTimeFormat = (sec: number): string => {
   const h = Math.floor(sec / 3600);
   const m = Math.floor((sec % 3600) / 60);
   const s = sec % 60;

   const pad = (n: number) => String(n).padStart(2, "0");

   return h
      ? `${pad(h)}:${pad(m)}:${pad(s)}`
      : `${pad(m)}:${pad(s)}`;
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const WheelFortuneMini = (): JSX.Element => {

   const vibrate = useVibrate();
   const wheelRef = useRef<SVGSVGElement>(null);
   const [time, setTime] = useState(10);

   useEffect(() => {

      if (time === 0) {
         const wheel = wheelRef.current;
         if (!wheel) return;
         wheel.classList.add("_run");
         const updateId = setTimeout(() => {
            wheel.classList.remove("_run");
            setTime(10);
            clearTimeout(updateId);
         }, 5000);
         return;
      }

      let timerId: number | null = null;

      timerId = setTimeout(() => {
         setTime(prev => prev - 1);
      }, 1000);

      return () => {
         if (timerId) clearTimeout(timerId);
      };

   }, [time]);

   const handleClick = useCallback(() => {
      vibrate.apply("soft");
   }, [vibrate]);

   return (
      <div className="wheel-fortune-mini" onClick={handleClick}>

         <div className="wheel-fortune-mini__top">

            <svg className="mini-wheel-top" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="25" cy="25" r="5" fill="#FFAA05" />
               <path d="M22 1H28L25 7L22 1Z" fill="#FFAA05" />
            </svg>


            <svg ref={wheelRef} className="mini-wheel-circle" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g>
                  <circle cx="25" cy="25" r="25" fill="#FFAA05" />
                  <circle cx="25" cy="25" r="23" fill="#5F42A0" />
                  <path d="M48 25C48 21.9796 47.4051 18.9888 46.2492 16.1983C45.0934 13.4078 43.3992 10.8723 41.2634 8.73654L25 25H48Z" fill="#422E71" />
                  <path d="M25 48C28.0204 48 31.0112 47.4051 33.8017 46.2492C36.5922 45.0934 39.1277 43.3992 41.2635 41.2634L25 25L25 48Z" fill="#422E71" />
                  <path d="M2.00002 25C2.00002 28.0204 2.59493 31.0112 3.75079 33.8017C4.90664 36.5922 6.60081 39.1277 8.73656 41.2635L25 25L2.00002 25Z" fill="#422E71" />
                  <path d="M25 2.00002C21.9796 2.00002 18.9888 2.59493 16.1983 3.75079C13.4078 4.90664 10.8723 6.60081 8.73655 8.73656L25 25L25 2.00002Z" fill="#422E71" />
               </g>
            </svg>

         </div>

         <div className="wheel-fortune-mini__bottom">
            <span className="wheel-timer _unselect">{time === 0 ? "ИГРА" : getTimeFormat(time)}</span>
         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(WheelFortuneMini);
