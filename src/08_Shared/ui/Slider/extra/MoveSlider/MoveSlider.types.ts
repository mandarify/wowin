/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  ИНТЕРФЕЙС: IMoveSlider

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
 * Интерфейс для взаимодействия с модулем MoveSlider.
 * - `getSlide`      : Получить слайд по индексу (loop).
 * - `getSlides`     : Получить набор из 3-х слайдов вокруг индекса (index - 1, index, index + 1).
 */
export default interface IMoveSlider {
   getSlide: (index: number) => TSlideData;
   getSlides: (index: number) => TSlideData[];
};
