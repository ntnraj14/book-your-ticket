'use client'

import React, { useState } from 'react';

import Home from './home/page';

import { IEvent } from './_interfaces/event.interface';
import Header from './_components/header/header';

export default function App() {
  const [eventList, setEventList] = useState<IEvent[] | null>(null);

  const onCountrySelection = (eventListData: IEvent[] | null) => {
    setEventList(eventListData);
  }
  
  return (
     <div>
        <Header setEventList={onCountrySelection}/>
        <Home eventList={eventList}/>
     </div>
  )
}
