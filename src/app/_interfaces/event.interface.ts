export interface IEvent {
    name: string;
    price: string;
    image: string;
    id: number;
    time: string;
    location: string;
}

// Define the interface for the state managed by this slice
export interface EventDetailsState {
    eventDetails: IEvent;
  }