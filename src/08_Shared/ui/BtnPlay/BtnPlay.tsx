/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BtnPlay

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React, { useCallback } from "react";
import type { JSX } from "react";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";

// ########## ТИПЫ
import type IBtnPlay from "./BtnPlay.types";
import type { BtnPlayLabel, IBtnPlayHandler } from "./BtnPlay.types";

// ########## СТИЛИ
import "./BtnPlay.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const BtnPlay = forwardRef(({ delay, states, action }: IBtnPlay, ref): JSX.Element => {

   const vibrate = useVibrate();

   const btnRef = useRef<HTMLDivElement>(null);
   const timeoutIdRef = useRef<number | null>(null);

   const [currentId, setCurrentId] = useState<"main" | "second">("main");
   const [labels, setLabels] = useState<BtnPlayLabel[]>([
      { id: 'wait', element: states.wait, position: "top" },
      { id: 'main', element: states.main, position: "center" },
      { id: 'second', element: "", position: "bottom" },
   ]);

   /* Инициализация и Очистка зависимостей при удалении объекта. */
   useEffect(() => {
      const btn = btnRef.current;
      if (!btn) return;
      btn.style.setProperty("--btn-play-duraction", `${delay}ms`);
      return () => {
         if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      };
   }, [delay]);

   /* Обновить порядок лейблов. */
   const updateStatus = useCallback((def?: boolean) => {
      setLabels(prev => prev.map(item => {
         if (item.id === currentId) item.position = def ? "center" : "bottom";
         else if (item.id === "wait") item.position = def ? "top" : "center";
         return item;
      }));
   }, [setLabels, currentId]);

   /* Сменить главную кнопку. */
   const switchMainStatus = useCallback((newMain: React.ReactNode) => {
      const newCurrentId = currentId === "main" ? "second" : "main";
      setLabels(prev => prev.map(item => {
         if (item.id === "main") item.position = currentId === "main" ? "top" : "center";
         else if (item.id === "second") item.position = currentId === "main" ? "center" : "bottom";
         if (item.id === newCurrentId) item.element = newMain;
         return item;
      }));
      setCurrentId(newCurrentId);
      return true;
   }, [setLabels, setCurrentId, currentId]);

   /* Выполнение клика по кнопке. */
   const onStart = useCallback(() => {

      const btn = btnRef.current;
      if (!btn) return;

      vibrate.apply('medium');
      btn.classList.toggle("_start");
      updateStatus();

      timeoutIdRef.current = setTimeout(() => {
         btn.classList.toggle("_start");
         updateStatus(true);
         if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      }, delay);

   }, [vibrate, updateStatus, delay]);

   /* Imperative Handle */
   useImperativeHandle(ref, (): IBtnPlayHandler => ({
      setMain: (newMain: React.ReactNode) => {
         return switchMainStatus(newMain);
      },
      start: onStart,
   }), [switchMainStatus, onStart]);

   return (
      <div ref={btnRef} className="btn-play" onClick={action}>

         <div className="btn-play-content _unselect">
            <div className="btn-play-content-list">

               {labels.map((label) =>
                  <div key={label.id} className={`btn-play-content-item _${label.position}`.trim()}>{label.element}</div>
               )}

            </div>
         </div>

         <div className={`btn-play-container _shimmer-before`}>
            <div className="btn-play-backdrop"></div>
         </div>

      </div>
   );
});

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default BtnPlay;
