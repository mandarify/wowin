/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Move Slider
  - модуль для работы с данными слайдом.

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type IMoveSlider from "./MoveSlider.types";
import type { ESlide } from "@entities/Slides/Slides.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

class MoveSlider implements IMoveSlider {

   private slides: ESlide[];
   private length: number;

   constructor(slides: ESlide[]) {
      this.slides = slides;
      this.length = slides.length;
   }

   /* PUBLIC */

   /**
    * Получить слайд по индексу (loop).
    * @param index индекс
    * @returns TSlideData
    */
   getSlide = (index: number): ESlide => {
      return this.slides[index] ? this.slides[index] : (index === this.length ? this.slides[0] : this.slides[this.length - 1]);
   };

   /**
    * Получить набор из 3-х слайдов вокруг индекса (index - 1, index, index + 1).
    * @param index индекс.
    * @returns TSlideData[3].
    */
   getSlides = (index: number): ESlide[] => {
      if (this.length <= 1) return this.slides;
      return [
         this.getSlide(index - 1),
         this.getSlide(index),
         this.getSlide(index + 1),
      ];
   };

};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default MoveSlider;
