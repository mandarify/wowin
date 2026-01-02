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
import { getRemainingSeconds, toHumanTime, getUpdateDelay } from "@shared/funcs/time";

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
