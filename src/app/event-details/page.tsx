"use client"

import React from 'react';

import { useRouter } from 'next/navigation';

import Header from '../_components/header/header';

export default function EventDetails() {
    const router = useRouter();

    const onCountrySelection = () => {
        router.push('/');
    }

  return (
    <div>
      <Header setEventList={onCountrySelection}/>
      <h1>Event Details</h1>
    </div>
  );
}