import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { CountryState } from '../../../_interfaces/country.interface';

// Define the initial state for this slice
const initialState: CountryState = {
    countryDetails: {
        name: '',
        code: ''
    },
};

// Create a Redux slice for managing card data
const countrySlice = createSlice({
    name: "country", // Name of the slice
    initialState, // Initial state
    reducers: {
      // Reducer for updating cardDetails after a successful resource fetch
      getResourcesSuccess(state, action) {
        const resources = action.payload;
        state.countryDetails = resources;
      },
    },
  });

  // Export the action creator for getResourcesSuccess
export const { getResourcesSuccess } = countrySlice.actions;

// Export the reducer
export default countrySlice.reducer;