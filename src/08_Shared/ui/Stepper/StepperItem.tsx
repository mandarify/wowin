/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: StepperItem

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useRef, useEffect } from "react";

// ########## ТИПЫ
import type { IStepperItem } from "./Stepper.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const StepperItem = ({ id, content, isActive, delay }: IStepperItem): JSX.Element => {

   const itemRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const item = itemRef.current;
      if (!item) return;

      let timeoutId: number | null = null;

      if (isActive) {
         timeoutId = setTimeout(() => {
            item.classList.add("stepper-item_activ", "_shimmer");
            if (timeoutId) clearTimeout(timeoutId);
         }, delay);
      } else if (item.classList.contains("stepper-item_activ")) {
         item.classList.remove("stepper-item_activ", "_shimmer");
      }

      return () => {
         if (timeoutId) clearTimeout(timeoutId);
      };

   }, [isActive, delay]);

   return (
      <div ref={itemRef} className={`stepper-item _unselect`} data-id={id}>{content}</div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(StepperItem);
