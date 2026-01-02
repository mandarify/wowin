/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Slide Types

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { TStoreStatus } from "@shared/types/store.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

/**
 * СЛАЙД
 * - `id`      : идентификатор слайда.
 * - `src`     : ссылки на изображения в плохом и хорошем качестве.
 * - `title`   : название слайда.
 * - `link`    : ссылка для перехода по клику на слайд.
 */
export interface ESlide {
   id: number;
   srcs: {
      low: string;
      high: string;
   };
   title: string;
   link: string;
};

export interface StateESlides {
   current: ESlide[];
   date: number | null;
   status: TStoreStatus;
   error: string | null;
};
