import { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Heading } from './foundations/Heading';
import frLocale from '@fullcalendar/core/locales/fr'; // Import French locale

export default function Calendar() {
  const calendarRef = useRef(null);
  const queryParams = new URLSearchParams(window.location.search);
  const initialActivity = queryParams.get('activity') ? [queryParams.get('activity')] : [];

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: '',
    startDate: '',
    endDate: '',
    activity: [...initialActivity], // Initialize with activity from URL
    gender: [], // Changed to array for multiple selections
    ageGroup: [], // Changed to array for multiple selections
    level: [], // Changed to array for multiple selections
  });

  const [accordionOpen, setAccordionOpen] = useState({
    activity: true, // Default open
    gender: true,   // Default open
    ageGroup: true, // Default open
    level: true,    // Default open
  });

  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer

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

            return {
              title: event.summary,
              start: event.start.dateTime || event.start.date,
              end: event.end.dateTime || event.end.date,
              activity,
              gender,
              ageGroup,
              level,
              extendedProps: {
                description: event.description,
                activity: event.activity,
              },
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
        const matchesGender = gender.length === 0 || gender.includes(event.gender);
        const matchesAgeGroup = ageGroup.length === 0 || ageGroup.includes(event.ageGroup);
        const matchesLevel = level.length === 0 || level.includes(event.level);

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

  const handleMultiSelectChange = (filterType, value) => {
    setFilters((prev) => {
      const isSelected = prev[filterType].includes(value);
      return {
        ...prev,
        [filterType]: isSelected
          ? prev[filterType].filter((item) => item !== value) // Remove if already selected
          : [...prev[filterType], value], // Add if not selected
      };
    });
  };

  const toggleAccordion = (category) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="flex space-x-4 items-center">
        <button onClick={toggleDrawer} className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <Heading level={3}>Planning des Activités</Heading>
      </div>
      <div className="flex">
        {/* Drawer Button for Mobile */}

        {/* Drawer for Filters (Mobile) */}
        {drawerOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 lg:hidden" onClick={toggleDrawer}>
            <div className="bg-white w-64 p-4 absolute left-0 top-0 h-full">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              {/* Filters */}
              <input
                type="text"
                name="searchTerm"
                placeholder="Search by title..."
                value={filters.searchTerm}
                onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                className="p-2 border rounded mb-4 w-full"
              />

              {/* Activity Accordion */}
              <div className="border rounded mb-2">
                <h3 onClick={() => toggleAccordion('activity')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
                  Activité
                </h3>
                {accordionOpen.activity && (
                  <div className="p-2 bg-white border-t">
                    {['krav-maga', 'luta-livre', 'boxe-pied-poing', 'tolpar', 'mma', 'crossfit', 'événement'].map((activity) => (
                      <label key={activity} className="block">
                        <input
                          type="checkbox"
                          checked={filters.activity.includes(activity)}
                          onChange={() => handleActivityFilterChange(activity)}
                          className="mr-2"
                        />
                        {activity}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Gender Accordion */}
              <div className="border rounded mb-2">
                <h3 onClick={() => toggleAccordion('gender')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
                  Genre
                </h3>
                {accordionOpen.gender && (
                  <div className="p-2 bg-white border-t">
                    {['femme', 'homme'].map(gender => (
                      <label key={gender} className="block">
                        <input
                          type="checkbox"
                          checked={filters.gender.includes(gender)}
                          onChange={() => handleMultiSelectChange('gender', gender)}
                          className="mr-2"
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Age Group Accordion */}
              <div className="border rounded mb-2">
                <h3 onClick={() => toggleAccordion('ageGroup')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
                  Age Group
                </h3>
                {accordionOpen.ageGroup && (
                  <div className="p-2 bg-white border-t">
                    {['adulte', 'enfant'].map(age => (
                      <label key={age} className="block">
                        <input
                          type="checkbox"
                          checked={filters.ageGroup.includes(age)}
                          onChange={() => handleMultiSelectChange('ageGroup', age)}
                          className="mr-2"
                        />
                        {age}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Level Accordion */}
              <div className="border rounded mb-2">
                <h3 onClick={() => toggleAccordion('level')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
                  Niveau
                </h3>
                {accordionOpen.level && (
                  <div className="p-2 bg-white border-t">
                    {['sparring', 'confirmé'].map(level => (
                      <label key={level} className="block">
                        <input
                          type="checkbox"
                          checked={filters.level.includes(level)}
                          onChange={() => handleMultiSelectChange('level', level)}
                          className="mr-2"
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Filters Column (Desktop) */}
        <div className="hidden lg:block w-64 p-4 border-r">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          {/* Filters */}
          <input
            type="text"
            name="searchTerm"
            placeholder="Search by title..."
            value={filters.searchTerm}
            onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            className="p-2 border rounded mb-4 w-full"
          />

          {/* Activity Accordion */}
          <div className="border rounded mb-2">
            <h3 onClick={() => toggleAccordion('activity')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
              Activité
            </h3>
            {accordionOpen.activity && (
              <div className="p-2 bg-white border-t">
                {['krav-maga', 'luta-livre', 'boxe-pied-poing', 'tolpar', 'mma', 'crossfit', 'événement'].map((activity) => (
                  <label key={activity} className="block">
                    <input
                      type="checkbox"
                      checked={filters.activity.includes(activity)}
                      onChange={() => handleActivityFilterChange(activity)}
                      className="mr-2"
                    />
                    {activity}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Gender Accordion */}
          <div className="border rounded mb-2">
            <h3 onClick={() => toggleAccordion('gender')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
              Genre
            </h3>
            {accordionOpen.gender && (
              <div className="p-2 bg-white border-t">
                {['femme', 'homme'].map(gender => (
                  <label key={gender} className="block">
                    <input
                      type="checkbox"
                      checked={filters.gender.includes(gender)}
                      onChange={() => handleMultiSelectChange('gender', gender)}
                      className="mr-2"
                    />
                    {gender}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Age Group Accordion */}
          <div className="border rounded mb-2">
            <h3 onClick={() => toggleAccordion('ageGroup')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
              Age Group
            </h3>
            {accordionOpen.ageGroup && (
              <div className="p-2 bg-white border-t">
                {['adulte', 'enfant'].map(age => (
                  <label key={age} className="block">
                    <input
                      type="checkbox"
                      checked={filters.ageGroup.includes(age)}
                      onChange={() => handleMultiSelectChange('ageGroup', age)}
                      className="mr-2"
                    />
                    {age}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Level Accordion */}
          <div className="border rounded mb-2">
            <h3 onClick={() => toggleAccordion('level')} className="cursor-pointer bg-gray-200 p-2 hover:bg-gray-300 transition">
              Niveau
            </h3>
            {accordionOpen.level && (
              <div className="p-2 bg-white border-t">
                {['sparring', 'confirmé'].map(level => (
                  <label key={level} className="block">
                    <input
                      type="checkbox"
                      checked={filters.level.includes(level)}
                      onChange={() => handleMultiSelectChange('level', level)}
                      className="mr-2"
                    />
                    {level}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Calendar Component */}
        <div className="flex-1 lg:p-4">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            views={{
              timeGridWeek: {
                allDaySlot: false,
                slotMinTime: '08:00:00', // Start showing time slots at 8 AM
                slotMaxTime: '24:00:00', // End showing time slots at midnight
              },
              timeGridDay: {
                allDaySlot: false,
                slotMinTime: '08:00:00', // Start showing time slots at 8 AM
                slotMaxTime: '24:00:00', // End showing time slots at midnight
              },
            }}
            eventClick={(info) => {
              const calendarApi = calendarRef.current.getApi();
              calendarApi.changeView('timeGridDay', info.event.startStr);
            }}
            events={filteredEvents}
            locale={frLocale}
            height="auto"
          />
        </div>
      </div>
    </>
  );
}
