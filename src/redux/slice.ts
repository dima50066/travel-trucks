import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "./operations";
import { CampersState } from "../types";

const initialState: CampersState = {
  items: [],
  loading: false,
  error: null,
  camperDetails: null,
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
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
      // Campers
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      //   Camper details
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

export default campersSlice.reducer;
