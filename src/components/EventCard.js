

import React from 'react';

const EventCard = ({ event, onClick }) => (
  <div className="event-card" onClick={() => onClick(event)}>
     <img src={event.image} alt={event.name} loading="lazy" />  {/* Lazy loading added here */}
    <div className="event-info">
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <button className="view-more-button" onClick={() => onClick(event)}>View More</button>
    </div>
  </div>
);

export default EventCard;





