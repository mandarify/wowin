/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Slides API

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { ESlide } from "./Slides.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { API } from "@shared/consts/api.consts";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const getDataSlides = async (signal?: AbortSignal): Promise<ESlide[]> => {
   const res = await fetch(API.SLIDES.get.url, { method: "GET", signal });
   if (!res.ok) throw new Error(`Get slidse API error. HTTP ${res.status}.`);
   const data = (await res.json()) as ESlide[];
   return data;
};

