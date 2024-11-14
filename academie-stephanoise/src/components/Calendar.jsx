import { useEffect, useState } from "react";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/.netlify/functions/calendar").catch((error) => {
        console.error("Error fetching calendar events:", error);
        return { ok: false };
      });
      if (!response.ok) {
        console.error("Failed to fetch calendar events, status:", response.status);
        return;
      }
      const data = await response.json();
      setEvents(data || []);
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-4 p-4 border rounded">
            <h2 className="text-lg font-semibold">{event.summary}</h2>
            <p>{new Date(event.start.dateTime || event.start.date).toLocaleString()}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
