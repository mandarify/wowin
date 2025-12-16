/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: ISlider

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART

// ########## ТИПЫ
import type { TSlideData } from "@shared/types/data.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


/**
 *  Данные web слайда.
 */
export type TSlide = {
   data: TSlideData,
   ref: any,
};

/**
 * Интерфейс SliderItem.
 */
export interface ISliderItem {
   slide: TSlideData;
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
   data: TSlideData[];
   onSlideClick: (slide: TSlideData) => void;
   nextSlideMs?: number;
   btnMovePercent?: number;
};
