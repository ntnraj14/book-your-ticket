"use client"

import React from 'react';

import { useRouter } from 'next/navigation';

import EventCards from '../_components/event-cards/event-cards';

import { IEvent } from '../_interfaces/event.interface';

interface EventCardsProps {
    eventList: IEvent[] | null;
}

export default function Home(eventList : EventCardsProps) {
    const router = useRouter()

    const handleCardClick = (item: IEvent): void => {
        console.log(item);
        router.push('/event-details')        
    }

  return (
    <>
      <div className="px-8 mt-4">
        <EventCards eventList={eventList.eventList} onCardClick={handleCardClick}/>
      </div>
    </>
  );
}

