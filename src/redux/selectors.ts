import { RootState } from "./store";

export const selectCampers = (state: RootState) => state.campers.items;
export const selectLoading = (state: RootState) => state.campers.loading;
export const selectError = (state: RootState) => state.campers.error;
export const selectCamperDetails = (state: RootState) =>
  state.campers.camperDetails;
export const selectFavorites = (state: RootState) => state.campers.favorites;

// Filters
export const selectFilters = (state: RootState) => state.filters.filters;
export const selectPage = (state: RootState) => state.filters.page;
export const selectTotalPages = (state: RootState) => state.filters.totalPages;
export const selectFilterLoading = (state: RootState) => state.filters.loading;
export const selectLocation = (state: RootState) =>
  state.filters.filters.location || "";
export const selectLimit = (state: RootState) => state.filters.limit;
