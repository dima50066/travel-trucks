import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredCampers, fetchCamperDetails } from "./operations";
import { CampersState } from "../types";

const initialState: CampersState = {
  items: [],
  loading: false,
  error: null,
  camperDetails: null,
  favorites: [], // Зберігається через persist
  currentPage: 1,
  totalPages: 1,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const existingIndex = state.favorites.findIndex((id) => id === camperId);
      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(camperId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchCamperDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.camperDetails = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { toggleFavorite } = campersSlice.actions;
export default campersSlice.reducer;
