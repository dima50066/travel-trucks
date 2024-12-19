import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CampersResponse, FetchError, Camper } from "../types";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk<
  CampersResponse,
  { filters: Record<string, string>; page: number; limit: number },
  { rejectValue: FetchError }
>(
  "campers/fetchCampers",
  async ({ filters, page, limit }, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams({
        ...filters,
        page: page.toString(),
        limit: limit.toString(),
      }).toString();
      const response = await axios.get(`${BASE_URL}?${queryString}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const fetchCamperDetails = createAsyncThunk<
  Camper,
  string,
  { rejectValue: FetchError }
>("campers/fetchCamperDetails", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unexpected error occurred");
  }
});
