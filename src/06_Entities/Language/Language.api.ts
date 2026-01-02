/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Language API

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { ELanguage, ELanguageCode } from "./Language.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { API } from "@shared/consts/api.consts";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

/**
 * Получить перевод для приложения на нужном языке.
 * @param lan : код языка.
 */
export const getDataLanguage = async (lan: ELanguageCode, signal?: AbortSignal): Promise<ELanguage> => {
   const res = await fetch(API.LANGUAGES.get.url(lan), { method: "GET", signal });
   if (!res.ok) throw new Error(`Get language "${lan}" API error. HTTP ${res.status}.`);
   const data = (await res.json()) as ELanguage;
   return data;
};
