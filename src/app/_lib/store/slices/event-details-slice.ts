import { createSlice } from "@reduxjs/toolkit";
import { EventDetailsState } from '../../../_interfaces/event.interface';

// Define the initial state for this slice
const initialState: EventDetailsState = {
    eventDetails: {
        name: '',
        price: '',
        image: '',
        id: 0,
        time: '',
        location: '',
    },
};

// Create a Redux slice for managing card data
const eventDetailsSlice = createSlice({
    name: "eventDetails", // Name of the slice
    initialState, // Initial state
    reducers: {
      // Reducer for updating cardDetails after a successful resource fetch
      getEventDetails(state, action) {
        const resources = action.payload;
        state.eventDetails = resources;
      },
    },
  });

  // Export the action creator for getResourcesSuccess
export const { getEventDetails } = eventDetailsSlice.actions;

// Export the reducer
export default eventDetailsSlice.reducer;