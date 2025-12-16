/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Slider

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";

// ########## ТИПЫ
import type ISlider from "./Slider.types";
import type { TSlideData } from "@shared/types/data.types";

// ########## СТИЛИ
import "./Slider.styles.css";

// ########## КОМПОНЕНТЫ
import SliderItem from "./SliderItem";

// ########## МОДУЛИ
import MoveSlider from "./extra/MoveSlider/MoveSlider";
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const SWIPE_THRESHOLD = 40;


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Slider = ({

   data,
   onSlideClick,
   nextSlideMs = 10000,
   btnMovePercent = 16,

}: ISlider): JSX.Element => {

   const animationMs = 500;
   const vibrate = useVibrate();

   const [index, setIndex] = useState(0);

   const trackRef = useRef<HTMLDivElement>(null);
   const intervalId = useRef<number | null>(null);
   const isAnimate = useRef(false);

   const swipeStartX = useRef<number | null>(null);
   const swipeStartY = useRef<number | null>(null);
   const isSwiping = useRef(false);

   const moveSlider = useMemo(() => new MoveSlider(data), [data]);
   const slides = useMemo<TSlideData[]>(() => {
      return moveSlider.getSlides(index);
   }, [index, moveSlider]);

   /* Перемещение на следующий слайд. */
   const nextSlide = useCallback(() => {
      setIndex(prev => (prev + 1 === data.length ? 0 : prev + 1));
   }, [data.length]);

   /* Перемещение на предыдущий слайд. */
   const prevSlide = useCallback(() => {
      setIndex(prev => (prev - 1 < 0 ? data.length - 1 : prev - 1));
   }, [data.length]);

   /* Автопрокрутка */
   useEffect(() => {
      if (intervalId.current !== null) {
         clearInterval(intervalId.current);
      }

      intervalId.current = window.setInterval(nextSlide, nextSlideMs);

      return () => {
         if (intervalId.current !== null) {
            clearInterval(intervalId.current);
            intervalId.current = null;
         }
      };
   }, [index, nextSlide, nextSlideMs]);

   /* Клик по слайдеру */

   const pause = () => {
      const pauseId = setTimeout(() => {
         isAnimate.current = false;
         clearTimeout(pauseId);
      }, animationMs);
   };

   const step = (fun: () => void) => {
      if (isAnimate && isAnimate.current) return;
      isAnimate.current = true;
      fun();
      pause();
   };

   const handleClick = (e: React.MouseEvent) => {

      if (isSwiping.current) {
         isSwiping.current = false;
         return;
      }

      if (!trackRef.current) return;

      vibrate.apply("soft");

      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const sliderWidth = rect.width;
      const btnWidth = sliderWidth * (btnMovePercent / 100);

      /* Предыдущий слайд. */
      if (clickX <= btnWidth) step(prevSlide);

      /* Следующий слайд. */
      else if (clickX >= sliderWidth - btnWidth) step(nextSlide);

      /* Событие слайда */
      else onSlideClick(data[index]);

   };

   /* Начало свайпа. */
   const onTouchStart = (e: React.TouchEvent) => {
      const touch = e.touches[0];
      swipeStartX.current = touch.clientX;
      swipeStartY.current = touch.clientY;
      isSwiping.current = false;
   };

   /* Движение свайпа. */
   const onTouchMove = (e: React.TouchEvent) => {
      if (swipeStartX.current === null || swipeStartY.current === null) return;

      const touch = e.touches[0];
      const dx = touch.clientX - swipeStartX.current;
      const dy = touch.clientY - swipeStartY.current;

      // горизонтальный свайп
      if (Math.abs(dx) > Math.abs(dy)) {
         isSwiping.current = true;
         e.preventDefault();
      }
   };

   /* Конец свайпа. */
   const onTouchEnd = (e: React.TouchEvent) => {

      if (swipeStartX.current === null) return;

      const touch = e.changedTouches[0];
      const dx = touch.clientX - swipeStartX.current;

      swipeStartX.current = null;
      swipeStartY.current = null;

      if (Math.abs(dx) < SWIPE_THRESHOLD) return;

      vibrate.apply("soft");

      if (dx > 0) step(prevSlide);

      else step(nextSlide);
   };

   return (
      <div className="slider"
         onClick={handleClick}
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}
      >

         <div ref={trackRef} className="slider-track">
            {slides.map((item, i) => <SliderItem key={`slide-${item.id}`} slide={item} isActive={i === 1} offset={i} />)}
         </div>

         <div className="slider-pagination">
            {data.map((slide, i) =>
               <div key={`slide-number-${i}`} className={`slider-pagination-item ${i === index ? 'slider-pagination-item_active' : ''}`} data-slide={slide.id} />
            )}
         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(Slider);
