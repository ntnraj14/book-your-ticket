'use client'

import React, { useState } from 'react';

import Home from './home/page';

import { IEvent } from './_interfaces/event.interface';
import Header from './_components/header/header';
import Navbar from './_components/navbar/navbar';

export default function App() {
  const [eventList, setEventList] = useState<IEvent[] | null>(null);

  const onCountrySelection = (eventListData: IEvent[] | null) => {
    setEventList(eventListData);
  }
  
  return (
     <div>
        <Header setEventList={onCountrySelection}/>
        {eventList && eventList.length > 0 &&
          <Navbar />
        }
        <Home eventList={eventList}/>
     </div>
  )
}
