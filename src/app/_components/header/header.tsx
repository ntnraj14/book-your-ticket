'use client'

import React, { useContext, useEffect, useState } from 'react';

import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from "primereact/autocomplete";

import { Country } from '../../_interfaces/country.interface';
import { CountryService } from '../../_lib/country-service';

// Import Redux-related functions and actions
import { useSelector, useDispatch } from '../../_lib/store/store';
import { getResourcesSuccess } from '../../_lib/store/slices/country-slice';
import { getThemeSuccess } from '../../_lib/store/slices/theme-slice';

import { usePathname } from 'next/navigation';

import { PrimeReactContext } from 'primereact/api';

import Image from 'next/image';

interface HeaderProps {
    setEventList: Function;
}

export default function Header(headerProps: HeaderProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [noCountryFound, setNoCountryFound] = useState(false);
  const [theme, setTheme] = useState('light');
  const pathName = usePathname();
  let primeContext = useContext(PrimeReactContext);

    // Initialize useDispatch to dispatch Redux actions
    const dispatch = useDispatch();

    // Select the 'cardDetails' data from the Redux store using useSelector
    const { countryDetails } = useSelector((state) => state.country);

    // Select the 'cardDetails' data from the Redux store using useSelector
    const { themeDetails } = useSelector((state) => state.themeDetails);

  useEffect(() => {
    const data = CountryService.getCountries();
    setCountries(data)
    if (countryDetails) {
      setSelectedCountry(countryDetails)
    }
    if (themeDetails) {
      setTheme(themeDetails)
    }
  }, []);

  const search = (event: AutoCompleteCompleteEvent) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
      if(_filteredCountries.length === 0) {
        setNoCountryFound(true);
        headerProps.setEventList(null);
      } else {
        setNoCountryFound(false);
      }
    }, 250);
  };

  const onCountrySelection = (value: Country) => {
    setSelectedCountry(value);
  }
  const onCountrySelect = (event: AutoCompleteSelectEvent) => {
    setSelectedCountry(event.value);
    dispatch(getResourcesSuccess(event.value));
    headerProps.setEventList(event.value.events);
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    primeContext && primeContext.changeTheme && primeContext.changeTheme(`/themes/lara-${theme}-blue/theme.css`, `/themes/lara-${newTheme}-blue/theme.css`, 'theme-link')
    setTheme(newTheme);
    dispatch(getThemeSuccess(newTheme));
};
  
  return (
    <>
     <div className='border-b-2 border-slate-100 flex items-center px-5'>
        <Image src='/images/eventbrite.png' alt='eventbrite' width="120" height="24" />
        <div className="p-3 px-4 mr-6">
            <div className='flex align-items-center'>
                <span className="mr-2" data-testid="browseEvents">Browsing events in</span>{" "}
                <AutoComplete
                  data-testid="autoComplete"
                  field="name"
                  value={selectedCountry}
                  suggestions={filteredCountries}
                  completeMethod={search}
                  onChange={(e: AutoCompleteChangeEvent) => onCountrySelection(e.value)}
                  onSelect={(event: AutoCompleteSelectEvent) => onCountrySelect(event)}
                  placeholder="Enter name of the City"
                  forceSelection
                  disabled={pathName === '/event-details'}
                  inputClassName='text-blue-600 font-medium'
                  dropdown= {true}
                />
            </div>
        </div>
        <div className='mr-8 font-bold'>Find Events</div>
        <div className='mr-8 font-bold'>Create Events</div>
        <div className='mr-8 font-bold'>Find Your Tickets</div>
        <div className='mr-8 font-bold'>Help Center</div>
        <div className='mr-8 font-bold'>Log In</div>
        <div className='mr-8 font-bold'>Sign Up</div>
        <div className='font-bold p-2' onClick={toggleTheme}>
          {theme === 'light' && <span className='pi pi-sun'></span>}
          {theme === 'dark' && <span className='pi pi-moon'></span>}
        </div>
     </div>
      {noCountryFound && <div className='text-sm text-red-500 ml-80'>No country matches your search. Trying searching any other country.</div>}
    </>
  )
}
