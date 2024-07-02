export interface Country {
    name: string;
    code: string;
  }

// Define the interface for the state managed by this slice
export interface CountryState {
  countryDetails: Country;
}
  