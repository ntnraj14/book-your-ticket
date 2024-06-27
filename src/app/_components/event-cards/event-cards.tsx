import { Card } from 'primereact/card';
import { IEvent } from '@/app/_interfaces/event.interface';
import { isArray } from 'util';

interface EventCardsProps {
    eventList: IEvent[] | null;
    onSendMessage: Function;
}

export default function EventCards(eventList: EventCardsProps, onSendMessage: Function) {
    const listItems = eventList.eventList?.map((item, index) =>
        <Card title={item.name} key={index} className='mt-4' onClick={() => onSendMessage(item)}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <div>
                {item.price}
            </div>
        </Card>
    );

    return (  
        <>
            {Array.isArray(listItems) ? 
               (listItems.length ? <div className='flex gap-4'>{listItems}</div> : <div className='text-center mt-6'>No events found for the selected country</div>)
                : <div></div>
            }   
        </>  
    )
}