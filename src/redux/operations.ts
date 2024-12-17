import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CampersResponse, FetchError, Camper } from "../types";

export const fetchCampers = createAsyncThunk<
  CampersResponse,
  { filters: Record<string, string> },
  { rejectValue: FetchError }
>("campers/fetchCampers", async ({ filters }, { rejectWithValue }) => {
  try {
    const queryString = new URLSearchParams(filters).toString();
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${queryString}`
    );
    return response.data.items;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unexpected error occurred");
  }
});

export const fetchCamperDetails = createAsyncThunk<
  Camper,
  string,
  { rejectValue: FetchError }
>("campers/fetchCamperDetails", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unexpected error occurred");
  }
});
