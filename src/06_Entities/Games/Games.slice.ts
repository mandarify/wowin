/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Games Slice

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { createSlice } from "@reduxjs/toolkit";

// ########## ТИПЫ
import type { StateEGames } from "./Games.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { unixNow } from "@shared/funcs/time";
import { getGames } from "./Games.thunks";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const initialState: StateEGames = {
   current: null,
   date: null,
   status: "idle",
   error: null,
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const gamesSlice = createSlice({
   name: "games",
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
         .addCase(getGames.pending, (state) => {
            state.status = "loading";
            state.date = null;
            state.error = null;
         })
         // success
         .addCase(getGames.fulfilled, (state, action) => {
            state.current = action.payload;
            state.status = "success";
            state.date = unixNow();
         })
         // error
         .addCase(getGames.rejected, (state, action) => {
            state.status = "error";
            state.error = action.payload ?? "Error.";
         });
   },
});

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default gamesSlice.reducer;
export const { clearError, reset } = gamesSlice.actions;
