/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BadgeTimer

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useEffect, useState, useRef } from "react";

// ########## ТИПЫ
import type IBadgeTimer from "./BadgeTimer.types";

// ########## СТИЛИ
import "./BadgeTimer.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { getRemainingSeconds, toHumanTime } from "@shared/funcs/time";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const getUpdateDelay = (sec: number): number => {
   if (sec <= 0) return 0;

   // секунды
   if (sec < 60) {
      return 1000;
   }

   // минуты (< 59 минут)
   if (sec < 60 * 60) {
      const secondsLeftInMinute = sec % 60;
      return (secondsLeftInMinute || 60) * 1000;
   }

   // часы (>= 1 часа)
   const minutesLeftInHour = Math.floor((sec % 3600) / 60);
   return (minutesLeftInHour || 60) * 60_000;
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const BadgeTimer = ({ dtStart, duration, style, extraClass }: IBadgeTimer): JSX.Element => {

   const timeoutId = useRef<number | null>(null);

   const [secondsLeft, setSecondsLeft] = useState(() =>
      Math.max(0, getRemainingSeconds(dtStart, duration))
   );

   useEffect(() => {

      const tick = () => {
         const remaining = Math.max(0, getRemainingSeconds(dtStart, duration));
         setSecondsLeft(remaining);
         if (remaining <= 0) {
            timeoutId.current = null;
            return;
         }

         const delay = getUpdateDelay(remaining);
         timeoutId.current = window.setTimeout(tick, delay);
      };

      tick();

      return () => {
         if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
         }
      };

   }, [dtStart, duration]);

   return (
      <div className={`badge badge-timer badge-style-${style} ${extraClass ?? ""}`.trim()}>
         <span className="badge-timer-content _unselect">
            {toHumanTime(secondsLeft)}
         </span>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BadgeTimer);
