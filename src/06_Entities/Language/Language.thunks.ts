/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Language Thunks

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { createAsyncThunk } from "@reduxjs/toolkit";

// ########## ТИПЫ
import type { ELanguage, ELanguageCode } from "./Language.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { API } from "@shared/consts/api.consts";
import { getDataLanguage } from "./Language.api";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const getLanguage = createAsyncThunk<ELanguage, ELanguageCode, { rejectValue: string }>(API.LANGUAGES.get.name, async (lan, { rejectWithValue, signal }) => {
   try {
      return await getDataLanguage(lan, signal);
   } catch (error) {
      return rejectWithValue(`Server Error: ${error}`);
   }
});
