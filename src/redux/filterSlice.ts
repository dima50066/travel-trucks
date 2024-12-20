import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilteredCampers } from "./operations";

interface FiltersState {
  filters: Record<string, string>;
  page: number;
  limit: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: FiltersState = {
  filters: {},
  page: 1,
  limit: 4,
  totalPages: 1,
  loading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Record<string, string>>) {
      state.filters = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    resetFilters(state) {
      state.filters = {};
      state.page = 1;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.filters.location = action.payload;
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
        state.totalPages = Math.ceil(action.payload.total / state.limit);
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setFilters, setPage, resetFilters, setLocation } =
  filtersSlice.actions;
export default filtersSlice.reducer;
