import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCocktailsByParams = createAsyncThunk(
    'cocktails/fetchCocktailsByParams',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.get('/drinks/search', {
                params: credentials,
            });
            return response.data;
        } catch (error) {

            return rejectWithValue(error.message);
        }
    }
);