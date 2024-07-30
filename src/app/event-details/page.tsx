"use client"

import React from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Header from '../_components/header/header';
// Import Redux-related functions and actions
import { useSelector } from './../_lib/store/store';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function EventDetails() {
    const router = useRouter();

    // Select the 'cardDetails' data from the Redux store using useSelector
    const { eventDetails } = useSelector((state) => state.eventDetails);

    const onCountrySelection = () => {
        router.push('/');
    }

  return (
    <div>
      <Header setEventList={onCountrySelection}/>
        <div className="mx-auto mt-5 w-3/5">
          <Image src={`/${eventDetails.image}`} alt={eventDetails.name} width="1075" height="600" />
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                  <div className='mt-3'>
                    <div>{eventDetails.time.split('•')[0]}</div>
                    <h1>{eventDetails.name}</h1>
                    <div className='text-xs'>Learn about consumer behavior, market research, brand strategy and digital marketing. Enjoy hands-on learning and a chance to network too!</div>
                  </div>
                </div>
                <div className='mt-3 pr-7'>
                  <div className='text-right'>
                    <span className='pi pi-heart'></span>
                    <span className='pi pi-download ml-4'></span>
                  </div>
                  <div>
                  <Card title='' className='mt-4 text-center'>
                      <div className='text-sm mt-1'>Free</div>
                      <Button className='font-semibold mt-4 w-full' label="Tickets" severity="danger" />
                  </Card>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}