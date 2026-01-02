/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Games API

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ
import type { TGamesData } from "@shared/types/data.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { API } from "@shared/consts/api.consts";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const getDataGames = async (signal?: AbortSignal): Promise<TGamesData> => {
   const res = await fetch(API.GAMES.getAll.url, { method: "GET", signal });
   if (!res.ok) throw new Error(`Get games API error. HTTP ${res.status}.`);
   const data = (await res.json()) as TGamesData;
   return data;
};
