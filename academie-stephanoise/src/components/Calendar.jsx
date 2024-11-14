import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr'; // Import French locale

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: '',
    startDate: '',
    endDate: '',
    activity: [], // Allow multiple selections
    gender: 'All',
    ageGroup: 'All',
    level: 'All', // Add level filter
  });

  const activityColors = {
    'krav-maga': '#60a5fa', // bg-blue-300
    'luta-livre': '#f87171', // bg-red-300
    'boxe-pied-poing': '#fdba74', // bg-orange-300
    tolpar: '#c084fc', // bg-purple-300
    mma: '#86efac', // bg-green-300
    'cross-training': '#fde047', // bg-yellow-300
    default: '#485ed4',
  };

  useEffect(() => {
    fetch('/.netlify/functions/calendar')
      .then((res) => res.json())
      .then((data) =>
        setEvents(
          data.map((event) => {
            const description = event.description || '';

            // Extract categories using regex for each field
            const activity = description.match(/Activité:\s*([^ ]+)/i)?.[1]?.trim() || 'Unspecified';
            const gender = description.match(/Genre:\s*([^ ]+)/i)?.[1]?.trim() || 'Unspecified';
            const ageGroup = description.match(/Age:\s*([^ ]+)/i)?.[1]?.trim() || 'All';
            const level = description.match(/Niveau:\s*([^ ]+)/i)?.[1]?.trim() || 'All';

            console.log('Parsed Event:', { activity, gender, ageGroup, level });

            return {
              title: event.summary,
              start: event.start.dateTime || event.start.date,
              end: event.end.dateTime || event.end.date,
              activity,
              gender,
              ageGroup,
              level,
              color: activityColors[activity.toLowerCase()] || activityColors.default, // Assign color
            };
          })
        )
      )
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((event) => {
        const { activity, gender, ageGroup, level } = filters;

        const matchesActivity =
          activity.length === 0 || activity.includes(event.activity);
        const matchesGender = gender === 'All' || event.gender === gender;
        const matchesAgeGroup = ageGroup === 'All' || event.ageGroup === ageGroup;
        const matchesLevel = level === 'All' || event.level === level;

        return matchesActivity && matchesGender && matchesAgeGroup && matchesLevel;
      })
    );
  }, [events, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleActivityFilterChange = (activity) => {
    setFilters((prev) => {
      const isSelected = prev.activity.includes(activity);
      return {
        ...prev,
        activity: isSelected
          ? prev.activity.filter((act) => act !== activity) // Remove if already selected
          : [...prev.activity, activity], // Add if not selected
      };
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        {/* Filters */}
        <input
          type="text"
          name="searchTerm"
          placeholder="Search by title..."
          value={filters.searchTerm}
          onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
          className="p-2 border rounded mr-2"
        />

        {/* Activity Buttons */}
        <div>
          {['krav-maga', 'luta-livre', 'boxe-pied-poing', 'tolpar', 'mma', 'crossfit', 'événement'].map((activity) => (
            <button
              key={activity}
              onClick={() => handleActivityFilterChange(activity)}
              className={`p-2 border rounded mr-2 ${
                filters.activity.includes(activity) ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {activity}
            </button>
          ))}
          <button
            onClick={() => setFilters((prev) => ({ ...prev, activity: [] }))}
            className="p-2 border rounded mr-2"
          >
            All Activities
          </button>
        </div>

        {/* Gender Buttons */}
        <div>
          {['femme'].map(gender => (
            <button
              key={gender}
              onClick={() => handleFilterChange('gender', gender)}
              className={`p-2 border rounded mr-2 ${filters.gender === gender ? 'bg-blue-500 text-white' : ''}`}
            >
              {gender}
            </button>
          ))}
          <button
            onClick={() => handleFilterChange('gender', 'All')}
            className="p-2 border rounded mr-2"
          >
            All
          </button>
        </div>

        {/* Age Group Buttons */}
        <div>
          {['adulte', 'enfant'].map(age => (
            <button
              key={age}
              onClick={() => handleFilterChange('ageGroup', age)}
              className={`p-2 border rounded mr-2 ${filters.ageGroup === age ? 'bg-blue-500 text-white' : ''}`}
            >
              {age}
            </button>
          ))}
          <button
            onClick={() => handleFilterChange('ageGroup', 'All')}
            className="p-2 border rounded mr-2"
          >
            All Age Groups
          </button>
        </div>

        {/* Level Buttons */}
        <div>
          {['sparring', 'confirmé'].map(level => (
            <button
              key={level}
              onClick={() => handleFilterChange('level', level)}
              className={`p-2 border rounded mr-2 ${filters.level === level ? 'bg-blue-500 text-white' : ''}`}
            >
              {level}
            </button>
          ))}
          <button
            onClick={() => handleFilterChange('level', 'All')}
            className="p-2 border rounded mr-2"
          >
            All Levels
          </button>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={filteredEvents}
        eventColor="#2563eb"
        height="auto"
        locale={frLocale} // Set the locale to French
      />
    </div>
  );
}
