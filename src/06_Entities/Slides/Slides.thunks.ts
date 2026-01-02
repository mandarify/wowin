/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Slides Thunks

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { createAsyncThunk } from "@reduxjs/toolkit";

// ########## ТИПЫ
import type { ESlide } from "./Slides.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { API } from "@shared/consts/api.consts";
import { getDataSlides } from "./Slides.api";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const getSlides = createAsyncThunk<ESlide[], void, { rejectValue: string }>(API.SLIDES.get.name, async (_, { rejectWithValue, signal }) => {
   try {
      return await getDataSlides(signal);
   } catch (error) {
      return rejectWithValue(`Server Error: ${error}`);
   }
});
