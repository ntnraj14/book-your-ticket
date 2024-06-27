"use client"

import React, { useEffect, useState } from 'react';

import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from "primereact/autocomplete";

import { CountryService } from './_lib/country-service';
import { EventListService } from './_lib/event-list-service';

import EventCards from './_components/event-cards/event-cards';

import { IEvent } from './_interfaces/event.interface';
import { Country } from './_interfaces/country.interface';

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [eventList, setEventList] = useState<IEvent[] | null>(null);
  const [noCountryFound, setNoCountryFound] = useState(false);
  const eventListData = EventListService.getEventList();

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
        setEventList(null);
      } else {
        setNoCountryFound(false);
      }
    }, 250);
  };

  useEffect(() => {
    CountryService.getCountries().then((data) => setCountries(data));
  }, []);

    function handleMessage(item: IEvent): void {
        console.log(item);
    }

  return (
    <>
      <div className="border-y-2 p-3 border-slate-100 px-8">
        <div className='flex align-items-center'>
            <span className="mr-2">Browsing events in</span>{" "}
            <AutoComplete
            field="name"
            value={selectedCountry}
            suggestions={filteredCountries}
            completeMethod={search}
            onChange={(e: AutoCompleteChangeEvent) => setSelectedCountry(e.value)}
            onSelect={(event: AutoCompleteSelectEvent) => setEventList(eventListData)}
            placeholder="Enter name of the City"
            forceSelection
            />
        </div>
        {noCountryFound && <div className='mt-2 text-sm text-red-500'>No country matches your search. Trying searching any other country.</div>}
      </div>
      <div className="px-8 mt-4">
        <EventCards eventList={eventList} onSendMessage={handleMessage}/>
      </div>
    </>
  );
}

