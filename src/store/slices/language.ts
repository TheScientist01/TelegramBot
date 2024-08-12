import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type languageType = "en" | "es" | "ru" | "cn" | "jp";

const initialState: {
  language: languageType;
} = {
  language: "en",
};

const languageSlice = createSlice({
  name: "generalSearchSlice",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<languageType>) => {
      state.language = payload;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language;
