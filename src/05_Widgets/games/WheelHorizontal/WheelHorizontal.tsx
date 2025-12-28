/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: WheelHorizontal

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useRef, useState, createRef, forwardRef, useImperativeHandle, useEffect } from "react";

// ########## ТИПЫ
import type IWheelHorizontal from "./WheelHorizontal.types";
import type { IWheelHorizontalState, IWheelHorizontalItem, WheelHorizontalHandler } from "./WheelHorizontal.types";
import type { CaseLogicElement } from "@shared/modules/CaseLogic/CaseLogic.types";

// ########## СТИЛИ
import "./WheelHorizontal.styles.css";

// ########## КОМПОНЕНТЫ
import WheelHorizontalElement from "./WheelHorizontalElement";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const getStartState = (): IWheelHorizontalState => ({
   refId: null,
   timeStart: null,
   distance: 0,
   currentId: 0,
   isPlay: false,
});


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const WheelHorizontal = forwardRef(({ logic }: IWheelHorizontal, ref): JSX.Element => {

   const vibrate = useVibrate();

   const [items] = useState<IWheelHorizontalItem[]>(() => logic.getPlaceholderElements().map(data => ({ data, ref: createRef() })));
   const itemsRef = useRef<IWheelHorizontalItem[]>(items);
   const winnerElementsRef = useRef<CaseLogicElement[]>([]);

   const headIndexRef = useRef(0);
   const stateRef = useRef<IWheelHorizontalState>(getStartState());

   /* Automove Refs */
   const autoTimerId = useRef<number | null>(null);
   const autoRafId = useRef<number | null>(null);
   const lastTsRef = useRef<number | null>(null);
   const dragOffsetRef = useRef(0);

   /* Движение к победному элементу. */
   const animate = (timestamp: number): void => {

      const state = stateRef.current;
      if (!state.timeStart) state.timeStart = timestamp;

      /* Время от старта в секундах. */
      const timeFromStart = Math.min((timestamp - state.timeStart) / 1000, logic.opts.times.total);

      /* Абсолютный пройденный путь в этот момент. */
      const pathFromStart = logic.getDistanceAt(timeFromStart);

      /* Дельта пути - смещение относительно прошлого кадра. */
      const delta = pathFromStart - state.distance;

      /* Смещение всех элементов вправо на delta. */
      const currentItems = itemsRef.current;
      const count = items.length;

      if (delta !== 0) {

         for (let i = 0; i < count; i++) {
            const item = currentItems[i];
            item.data.x += delta;
            item.ref.current!.setX(item.data.x);
         }

         state.distance = pathFromStart;
      }

      /* Переопределение элементов, которые вышли за границу. */
      const wrapperLimit = logic.opts.sizes.wrapper + 0.5;
      const elSize = logic.opts.sizes.element;

      while (currentItems[headIndexRef.current].data.x >= wrapperLimit) {
         const head = headIndexRef.current;
         const tail = (head + count - 1) % count;

         const current = currentItems[head];
         const last = currentItems[tail];

         current.data = winnerElementsRef.current[stateRef.current.currentId] || logic.getRandomElement();
         current.data.x = last.data.x - elSize;

         current.ref.current!.setData(current.data.element);
         current.ref.current!.setX(current.data.x);

         state.currentId += 1;
         headIndexRef.current = (head + 1) % count;

         vibrate.apply("soft");
      }

      /* Запустить следующий кадр. */
      if (timeFromStart < logic.opts.times.total) stateRef.current.refId = requestAnimationFrame(animate);

      /* Конец анимации. */
      else {
         stateRef.current.distance = logic.getDistanceAt(logic.opts.times.total);
         stateRef.current = getStartState();
      }

   };

   /* Движение элементов. */
   const move = (timestamp: number) => {

      if (!lastTsRef.current) lastTsRef.current = timestamp;

      const dt = (timestamp - lastTsRef.current) / 1000;
      lastTsRef.current = timestamp;

      const speed = 30; // px/sec
      const deltaX = speed * dt;

      const currentItems = itemsRef.current;
      const count = currentItems.length;

      const wrapperLimit = logic.opts.sizes.wrapper + 0.5;
      const elSize = logic.opts.sizes.element;

      dragOffsetRef.current = dragOffsetRef.current > elSize ? dragOffsetRef.current - elSize + deltaX : dragOffsetRef.current + deltaX;

      for (let i = 0; i < count; i++) {
         const item = currentItems[i];
         item.data.x += deltaX;
         item.ref.current!.setX(item.data.x);
      }

      while (currentItems[headIndexRef.current].data.x >= wrapperLimit) {
         const head = headIndexRef.current;
         const tail = (head + count - 1) % count;

         const current = currentItems[head];
         const last = currentItems[tail];

         current.data = logic.getRandomElement();
         current.data.x = last.data.x - elSize;

         current.ref.current!.setData(current.data.element);
         current.ref.current!.setX(current.data.x);

         headIndexRef.current = (head + 1) % count;
      }
   };

   /* Запуск автоматического движения элементов. */
   const loop = (ts: number) => {
      move(ts);
      autoRafId.current = requestAnimationFrame(loop);
   };

   /* Запуск движения при появлении. */
   useEffect(() => {
      autoRafId.current = requestAnimationFrame(loop);
      return () => {
         if (autoRafId.current) cancelAnimationFrame(autoRafId.current);
      }
   }, []);

   /* Запуск движения к победному элементу. */
   const play = (winId: number) => {

      if (stateRef.current.isPlay) return;

      /* Обновление скоростей с учетов сдвига. */
      logic.addOffset(dragOffsetRef.current);

      /* Сброс настроек автоматичекого прокручивания. */
      if (autoTimerId.current) clearTimeout(autoTimerId.current);
      if (autoRafId.current) cancelAnimationFrame(autoRafId.current);
      autoRafId.current = null;
      lastTsRef.current = null;
      dragOffsetRef.current = 0;

      /* Таймер на автопрокрут. */
      const timeout = logic.opts.times.total * 1000 + 5000;
      autoTimerId.current = setTimeout(() => {
         autoRafId.current = requestAnimationFrame(loop);
      }, timeout);

      /* Запуск прокрута. */
      winnerElementsRef.current = logic.getWinnerElements(winId);
      stateRef.current.isPlay = true;
      stateRef.current.refId = requestAnimationFrame(animate);
   };

   /* Внешнее управление. */
   useImperativeHandle(ref, (): WheelHorizontalHandler => ({
      play,
   }));

   return (
      <div className={`wheel-h ${items.length > 0 ? '' : '_shimmer'}`.trim()}>
         <div className="wheel-h-list">
            {items && items.map((item, index) => (
               <WheelHorizontalElement key={index} ref={item.ref} data={item.data} />
            ))}
         </div>
      </div>
   );
});


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(WheelHorizontal);
