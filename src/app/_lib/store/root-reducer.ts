import { combineReducers } from 'redux';

// import slices
import countrySlice from './slices/country-slice';

const rootReducer = combineReducers({
    country: countrySlice,
});

export default rootReducer;