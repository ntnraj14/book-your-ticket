"use client"

import React, { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import EventCards from '../_components/event-cards/event-cards';

import { IEvent } from '../_interfaces/event.interface';

import { getEventDetails } from '../_lib/store/slices/event-details-slice';
import { getEventList } from '../_lib/store/slices/events-slice';
import { useSelector, useDispatch } from '../_lib/store/store';

interface EventCardsProps {
    eventList: IEvent[] | null;
}

export default function Home(eventList : EventCardsProps) {
    const router = useRouter();
    const dispatch = useDispatch();
    // Select the 'cardDetails' data from the Redux store using useSelector
    const { eventsList } = useSelector((state) => state.eventList);
    if(eventList.eventList?.length === 0) {

    } else if (!eventList.eventList?.length) {
      eventList = {
        eventList: eventsList
      }
    }

    const handleCardClick = (item: IEvent): void => {
      dispatch(getEventList(eventList.eventList))
      dispatch(getEventDetails(item));
      router.push(`/event-details?`)
    }


  return (
    <>
      <div className="px-8 mt-4">
        <EventCards eventList={eventList.eventList} onCardClick={handleCardClick}/>
      </div>
    </>
  );
}

