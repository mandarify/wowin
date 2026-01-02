/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Slides Slice

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/
// ########## STANDART
import { createSlice } from "@reduxjs/toolkit";

// ########## ТИПЫ
import type { StateESlides } from "./Slides.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { unixNow } from "@shared/funcs/time";
import { getSlides } from "./Slides.thunks";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const initialState: StateESlides = {
   current: [],
   date: null,
   status: "idle",
   error: null,
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const slidesSlice = createSlice({
   name: "slides",
   initialState,
   reducers: {
      clearError: (state) => {
         state.error = null;
      },
      reset: () => {
         return { ...initialState };
      },
   },
   extraReducers: (builder) => {
      builder
         // pending
         .addCase(getSlides.pending, (state) => {
            state.status = "loading";
            state.date = null;
            state.error = null;
         })
         // success
         .addCase(getSlides.fulfilled, (state, action) => {
            state.current = action.payload;
            state.status = "success";
            state.date = unixNow();
         })
         // error
         .addCase(getSlides.rejected, (state, action) => {
            state.status = "error";
            state.error = action.payload ?? "Error.";
         });
   },
});

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default slidesSlice.reducer;
export const { clearError, reset } = slidesSlice.actions;
