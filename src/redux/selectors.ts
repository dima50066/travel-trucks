import { RootState } from "./store";

export const selectCampers = (state: RootState) => state.campers.items;

export const selectLoading = (state: RootState) => state.campers.loading;

export const selectError = (state: RootState) => state.campers.error;

export const selectCamperDetails = (state: RootState) =>
  state.campers.camperDetails;

export const selectFavorites = (state: RootState) => state.campers.favorites;
