import { createSlice } from "@reduxjs/toolkit";
import { fetchCocktailsByParams } from "./drinksOperations";


const drinksSlice = createSlice({
    name: 'cocktails',
    initialState: {
        cocktails: [],
        totalCocktails: 0,
        isLoading: false
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCocktailsByParams.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCocktailsByParams.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cocktails = action.payload.data;
                state.totalCocktails = action.payload.quantityTotal
            })
            .addCase(fetchCocktailsByParams.rejected, (state) => {
                state.isLoading = false;
                state.cocktails = [];
                state.totalCocktails = 0;
    })        
});

export const drinksReducer = drinksSlice.reducer;