
import React from 'react';


const EventModal = ({ event, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{event.name}</h2>
        <img src={event.image} alt={event.name} />
        <p>{event.description}</p>
        <p>{event.date}</p>
        <p>{event.location}</p>
      </div>
    </div>
  );
};

export default EventModal;



