import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for this slice
const initialState = {
    eventsList: []
};

// Create a Redux slice for managing card data
const eventListSlice = createSlice({
    name: "eventList", // Name of the slice
    initialState, // Initial state
    reducers: {
      // Reducer for updating cardDetails after a successful resource fetch
      getEventList(state, action) {
        const resources = action.payload;
        state.eventsList = resources;
      },
    },
  });

  // Export the action creator for getResourcesSuccess
export const { getEventList } = eventListSlice.actions;

// Export the reducer
export default eventListSlice.reducer;