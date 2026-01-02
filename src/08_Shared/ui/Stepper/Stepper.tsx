/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Stepper

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import { useEffect, useRef } from "react";

// ########## ТИПЫ
import type { IStepper, IStepperItem } from "./Stepper.types";

// ########## СТИЛИ
import "./Stepper.styles.css";

// ########## КОМПОНЕНТЫ
import StepperItem from "./StepperItem";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const createItems = (total: number, current: number, isInit?: boolean): IStepperItem[] => {
   return Array.from({ length: total }, (_, index) => {
      const count = index + 1;
      return {
         id: index,
         content: count,
         isActive: count <= current,
         delay: isInit ? index * 100 : (current === 1 ? 0 : 200),
      };
   });
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const Stepper = ({ total, current, isInit, delay }: IStepper) => {

   const progressRef = useRef<HTMLDivElement>(null);

   const items: IStepperItem[] = createItems(total, current, isInit);
   const transition = isInit ? `transform ${100 * (current - 1)}ms linear` : `transform 200ms linear`;

   /* Инициализация. */
   useEffect(() => {

      const progress = progressRef.current;
      if (!progress) return;

      let timeoutId: number | null = null;

      const update = () => {
         const percent = ((100 / (total - 1)) * (current - 1)) - 100;
         progress.style.transform = `translateX(${percent}%)`;
      };

      progress.style.transition = transition;
      progress.getBoundingClientRect();

      if (!delay) update();
      else {
         timeoutId = setTimeout(() => {
            update();
            if (timeoutId) clearTimeout(timeoutId);
         }, delay);
      }

      return () => {
         progress.style.transform = `translateX(-100%)`;
      };

   }, [total, current, transition, delay]);

   return (
      <div className="stepper">

         <div className="stepper-list">
            {items.map(item => <StepperItem key={`stepper-${item.id}`} id={item.id} content={item.content} isActive={item.isActive} delay={delay ? delay + item.delay : item.delay} />)}
         </div>

         <div className="stepper-line _shimmer">
            <div ref={progressRef} className="stepper-progress" />
         </div>

      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(Stepper);
