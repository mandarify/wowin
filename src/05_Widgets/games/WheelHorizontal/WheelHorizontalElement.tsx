/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: WheelHorizontalElement

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

// ########## ТИПЫ
import type { IWheelHorizontalElement, IWheelHorizontalElementHandler } from "./WheelHorizontal.types";
import type { GameCaseItem } from "@shared/types/games/case.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const WheelHorizontalElement = forwardRef(({ data }: IWheelHorizontalElement, ref): JSX.Element => {

   const imgRef = useRef<HTMLImageElement>(null);
   const elementRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      element.style.transform = `translate3d(${data.x}px, 0, 0)`;
   });

   useImperativeHandle(ref, (): IWheelHorizontalElementHandler => ({

      element: elementRef.current,

      setX: (x: number) => {
         if (!elementRef.current) return;
         elementRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
      },

      setData: (newData: GameCaseItem) => {

         const img = imgRef.current;
         const element = elementRef.current;
         if (!element || !img) return;

         if (newData.content.type === "coin") {
            element.classList.add("wheel-h-element_price");
         }
         else {
            element.classList.remove("wheel-h-element_price");
         }

         element.dataset.id = newData.id.toString();
         element.dataset.rarity = newData.rarity;
         element.dataset.price = newData.price.toString();

         img.alt = newData.content.name;
         img.src = newData.content.src;
      },

   }));

   return (
      <div ref={elementRef} className={`wheel-h-element ${data.element.content.type === "coin" ? 'wheel-h-element_price' : ''}`.trim()}
         data-id={data.element.id} data-rarity={data.element.rarity} data-price={data.element.price}
      >
         <div className="wheel-h-element-container">
            <div className="wheel-h-element-content">
               <img ref={imgRef} className="wheel-h-element-img _unselect" src={data.element.content.src} alt={data.element.content.name} />
            </div>
         </div>
      </div>
   );
});

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(WheelHorizontalElement);
