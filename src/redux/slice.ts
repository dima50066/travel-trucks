import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "./operations";
import { CampersState } from "../types";

const initialState: CampersState = {
  items: [],
  loading: false,
  error: null,
  camperDetails: null,
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
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
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg.page === 1) {
          state.items = action.payload.items;
          state.currentPage = 1;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.totalPages = Math.ceil(action.payload.total / 4);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
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
