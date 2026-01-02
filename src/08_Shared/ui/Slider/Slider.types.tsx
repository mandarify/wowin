/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: ISlider

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { ESlide } from "@entities/Slides/Slides.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

/**
 *  Данные web слайда.
 */
export type TSlide = {
   data: ESlide,
   ref: any,
};

/**
 * Интерфейс SliderItem.
 */
export interface ISliderItem {
   slide: ESlide;
   isActive: boolean;
   offset: number;
};

/**
 * Интерфейс Slider.
 * - `data`           : массив слайдов с информацией.
 * - `onSlideClick`   : фукция для выполнения по клику на слайд.
 * - `nextSlideMs`    : время в мс для автоматического перещения слайдов.
 * - `btnMovePercent` : процент от длины всего слайдера который будет занимать каждая кнопка (справа и слева) для перемещения слайдов.
 */
export default interface ISlider {
   data: ESlide[];
   onSlideClick: (slide: ESlide) => void;
   nextSlideMs?: number;
   btnMovePercent?: number;
};
