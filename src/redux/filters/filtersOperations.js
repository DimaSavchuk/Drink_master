import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  'filters/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/filters/categories');
      return response.data.categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchIngredients = createAsyncThunk(
  'filters/fetchIngredients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/filters/ingredients');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
