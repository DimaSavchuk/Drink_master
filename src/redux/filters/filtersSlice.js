import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchIngredients } from "./filtersOperations";

const filtersSlice = createSlice({
    name: 'auth',
    initialState: {
        categories: [],
        ingredients: [],
        isLoading: false
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.categories.unshift("All categories");
                state.isLoading = false;
            })
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.ingredients = action.payload;
                state.ingredients.unshift({ title: "Ingredients" });
                state.isLoading = false;
            })
            .addCase(fetchIngredients.pending, (state) => {
                state.isLoading = true;
    })
});

export const filtersReducer = filtersSlice.reducer;