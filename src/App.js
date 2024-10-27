import React, { useState, useEffect } from 'react';
import { events } from './data';  // Import mock event data
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);  // State for loading

  // Simulate data fetching
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);  // Data fetching simulation
      }, 1000);  // Simulating a 1-second loading time
    };
    fetchData();
  }, []);

  // Filter events based on search query
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(query.toLowerCase()) ||
      event.location.toLowerCase().includes(query.toLowerCase())
  );

  // Handle modal open/close
  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="App">
      <header className="app-header">
        
        <h1 className='birthstone-regular'>EventSpot Lite</h1>
        <input
          type="text"
          placeholder="Search by event name or location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>

      {loading ? (
        <LoadingSpinner />  // Show loading spinner while data is fetching
      ) : (
        <div className="event-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event,index) => (
              <EventCard key={event.id} event={event} onClick={openModal} style={{ animationDelay: `${index * 0.1}s` }} />
            ))
          ) : (
            <div className="no-matches-container">
            <img src="./assets/noResult.png" alt="No matches illustration" />
            <p>No events match your search.</p>
            <p className="suggestions">Try searching with different keywords.</p>
          </div>
          )}
        </div>
      )}

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;


