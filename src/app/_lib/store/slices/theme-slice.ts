import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for this slice
const initialState = {
    themeDetails:  ''
};

// Create a Redux slice for managing card data
const themeDetailsSlice = createSlice({
    name: "themeDetails", // Name of the slice
    initialState, // Initial state
    reducers: {
      // Reducer for updating cardDetails after a successful resource fetch
      getThemeSuccess(state, action) {
        const resources = action.payload;
        state.themeDetails = resources;
      },
    },
  });

  // Export the action creator for getResourcesSuccess
export const { getThemeSuccess } = themeDetailsSlice.actions;

// Export the reducer
export default themeDetailsSlice.reducer;