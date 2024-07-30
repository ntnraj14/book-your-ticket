import { Card } from 'primereact/card';
import { IEvent } from '@/app/_interfaces/event.interface';
import { useSelector } from '../../_lib/store/store';
import Image from 'next/image';

interface EventCardsProps {
    eventList: IEvent[] | null;
    onCardClick: Function;
}

export default function EventCards(eventCardsProps: EventCardsProps) {

    const { countryDetails } = useSelector((state) => state.country);

    const listItems = eventCardsProps.eventList?.map((item, index) =>
        <Card title='' key={index} className='mt-4' onClick={() => eventCardsProps.onCardClick(item)}>
            <Image src={`/${item.image}`} alt={item.name} className="m-0" width="370" height="200" />
            <div className='pl-3'>
                <div className='font-semibold mt-2'>{item.name}</div>
                <div className='text-sm mt-1'>{item.time}</div>
                <div className='text-sm mt-1'>From {item.price}</div>
                <div className='text-sm mt-1'>{item.location}</div>
            </div>
        </Card>
    );

    return (  
        <>
            {eventCardsProps.eventList && eventCardsProps.eventList.length > 0 && <h2>Events in {countryDetails.name}</h2>}
            {Array.isArray(listItems) ? 
               (!listItems.length && countryDetails.name ? <div className='mt-6'> No event details found for selected country</div> : <div className='grid gap-4 grid-cols-4'>{listItems}</div>)
                : <div></div>
            }   
        </>  
    )
}