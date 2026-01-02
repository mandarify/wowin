/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Language Slice

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { createSlice } from "@reduxjs/toolkit";

// ########## ТИПЫ
import type { StateELanguage } from "./Language.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { unixNow } from "@shared/funcs/time";
import { getLanguage } from "./Language.thunks";
import { LANGUAGE_DEFAULT_DATA } from "@shared/data/default.language";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const initialState: StateELanguage = {
   current: null,
   date: null,
   status: "idle",
   error: null,
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const languageSlice = createSlice({
   name: "language",
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
         .addCase(getLanguage.pending, (state) => {
            state.status = "loading";
            state.date = null;
            state.error = null;
         })
         // success
         .addCase(getLanguage.fulfilled, (state, action) => {
            state.current = action.payload;
            state.status = "success";
            state.date = unixNow();
         })
         // error
         .addCase(getLanguage.rejected, (state, action) => {
            state.current = LANGUAGE_DEFAULT_DATA;
            state.status = "error";
            state.error = action.payload ?? "Error.";
         });
   },
});

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default languageSlice.reducer;
export const { clearError, reset } = languageSlice.actions;
