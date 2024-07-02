'use client'

import React, { useEffect, useState } from 'react';

import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from "primereact/autocomplete";

import { Country } from '../../_interfaces/country.interface';
import { CountryService } from '../../_lib/country-service';

import { EventListService } from '../../_lib/event-list-service';

// Import Redux-related functions and actions
import { useSelector, useDispatch } from '../../_lib/store/store';
import { getResourcesSuccess } from '../../_lib/store/slices/country-slice';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    setEventList: Function;
}

export default function Header(headerProps: HeaderProps) {
  const eventListData = EventListService.getEventList();
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [noCountryFound, setNoCountryFound] = useState(false);
  const pathName = usePathname();

    // Initialize useDispatch to dispatch Redux actions
    const dispatch = useDispatch();

    // Select the 'cardDetails' data from the Redux store using useSelector
    const { countryDetails } = useSelector((state) => state.country);

  useEffect(() => {
    CountryService.getCountries().then((data) => setCountries(data));
    if (countryDetails) {
      setSelectedCountry(countryDetails)
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
    dispatch(getResourcesSuccess(value));
  }
  
  return (
     <div>
        <div className="border-y-2 p-3 border-slate-100 px-8">
            <div className='flex align-items-center'>
                <span className="mr-2">Browsing events in</span>{" "}
                <AutoComplete
                field="name"
                value={selectedCountry}
                suggestions={filteredCountries}
                completeMethod={search}
                onChange={(e: AutoCompleteChangeEvent) => onCountrySelection(e.value)}
                onSelect={(event: AutoCompleteSelectEvent) => headerProps.setEventList(eventListData)}
                placeholder="Enter name of the City"
                forceSelection
                disabled={pathName === '/event-details'}
                />
            </div>
            {noCountryFound && <div className='mt-2 text-sm text-red-500'>No country matches your search. Trying searching any other country.</div>}
        </div>
     </div>
  )
}
