
import React from 'react';
import EventCard from './EventCard';
import { events } from '../data';

const EventListing = ({ onEventClick }) => {
  return (
    <div className="event-listing">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={onEventClick} />
      ))}
    </div>
  );
};

export default EventListing;
