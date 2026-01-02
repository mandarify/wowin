/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Games Thunks

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { createAsyncThunk } from "@reduxjs/toolkit";

// ########## ТИПЫ
import type { TGamesData } from "@shared/types/data.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { API } from "@shared/consts/api.consts";
import { getDataGames } from "./Games.api";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export const getGames = createAsyncThunk<TGamesData, void, { rejectValue: string }>(API.GAMES.getAll.name, async (_, { rejectWithValue, signal }) => {
   try {
      return await getDataGames(signal);
   } catch (error) {
      return rejectWithValue(`Server Error: ${error}`);
   }
});
