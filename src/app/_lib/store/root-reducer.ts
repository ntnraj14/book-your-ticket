import { combineReducers } from 'redux';

// import slices
import countrySlice from './slices/country-slice';
import EventDetails from './slices/event-details-slice';
import ThemeDetails from './slices/theme-slice';
import EventList from './slices/events-slice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    country: countrySlice,
    eventDetails: EventDetails,
    themeDetails: ThemeDetails,
    eventList: EventList
});

export default rootReducer;

export const setupStore = (preloadedState: any) => {
    return configureStore({
      reducer: rootReducer,
      preloadedState
    })
  }