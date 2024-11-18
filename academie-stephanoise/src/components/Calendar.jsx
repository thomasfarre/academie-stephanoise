import { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Heading } from './foundations/Heading';
import frLocale from '@fullcalendar/core/locales/fr'; // Import French locale
import { Button } from './foundations/Button';
import { BodyText } from './foundations/BodyText';
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
    otherFilters: true, // Default open for other filters
  });

  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer

  const activityColors = {
    'krav-maga': '#3b82f6', // bg-blue-500
    'luta-livre': '#ef4444', // bg-red-500
    'boxe-pied-poing': '#f97316', // bg-orange-500
    tolpar: '#a855f7', // bg-purple-500
    mma: '#22c55e', // bg-green-500
    'cross-training': '#eab308', // bg-yellow-500
    default: '#6366f1', // bg-neutral-500
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
      <style>
        {`
          :root {
            --fc-toolbar-title-font-size: 2rem;
            --fc-toolbar-title-font-family: 'Protest Strike', sans-serif;
          }
          .fc .fc-toolbar-title {
            font-size: var(--fc-toolbar-title-font-size);
            font-family: var(--fc-toolbar-title-font-family);
            max-width: var(--fc-toolbar-title-max-width);
            white-space: nowrap;
            overflow: hidden;
            text-transform: capitalize;
            text-overflow: ellipsis;
          }
          .fc .fc-event-time {
            display: block;
          }
          .fc .fc-view,
          .fc .fc-daygrid-day {
            background-color: white;
          }
          :root {
            --fc-button-bg-color: #1a202c;
            --fc-button-border-color: #1a202c; /* text-neutral-900 */
            --fc-button-hover-bg-color: #3f3f46; /* tailwind neutral-700 for hover */
            --fc-button-active-bg-color: #3f3f46; /* tailwind neutral-700 for active */
          }

          :root {
            @media (max-width: 1024px) {
              .fc .fc-event-time {
              display: none;
            }
            .fc-header-toolbar {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: auto auto;
              gap: 1rem;
            }
            .fc-toolbar-chunk:first-child {
              order: 2;
              display: flex;
              grid-column: span 1;
            }
            .fc-toolbar-chunk:nth-child(2) {
              order: 1;
              display: flex;
              justify-content: center;
              grid-column: span 2;
            }
            .fc-toolbar-chunk:last-child {
              order: 3;
              display: flex;
              justify-content: flex-end;
              grid-column: span 1;
              }
            }
          }
        `}
      </style>
      <div className="flex space-x-4 items-center">
        <button onClick={toggleDrawer} className="p-4 z-10 relative lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {/* <Heading level={3}>Planning des Activités</Heading> */}
      </div>
      <div className="flex">
        {/* Drawer Button for Mobile */}

        {/* Drawer for Filters (Mobile) */}
        {drawerOpen && (
          <>
          <div className="fixed inset-0 bg-neutral-800 bg-opacity-50 z-10 lg:hidden" onClick={toggleDrawer}></div>
          <div className="bg-white w-screen p-4 fixed z-20 left-0 top-0 h-full md:w-96">
            <h2 className="text-lg font-bold mb-4">Filtres</h2>
            {/* Activity Accordion */}
            <div className="py-2 border border-neutral-200 rounded-xl">
              <div>
                <button
                  onClick={() => toggleAccordion('activity')}
                  className="px-6 flex items-center justify-between py-4 w-full focus:outline-none"
                >
                  <BodyText variant="headline" className="font-bold">Activité</BodyText>
                  <span className={`transform duration-300 ease-out transition-transform ${accordionOpen.activity ? "rotate-180" : ""}`}>
                    <ChevronDownIcon className="size-6 text-neutral-700" />
                  </span>
                </button>
              </div>
              <div
                  style={{
                    maxHeight: accordionOpen.activity ? '1000px' : '0px', // Adjust max height based on open state
                  }}
                  className={`overflow-hidden transition-max-height duration-300 ease-out px-6`}
                >
                {accordionOpen.activity && (
                  <div className="py-2 text-neutral-700">
                    <fieldset>
                      <legend className="sr-only">Activités</legend>
                      <div className="space-y-3">
                        {['krav-maga', 'luta-livre', 'boxe-pied-poing', 'tolpar', 'mma', 'cross-training', 'événement'].map((activity) => (
                          <div key={activity} className="relative flex items-center">
                            <div className="flex h-6 items-center">
                              <input
                                id={activity}
                                name={activity}
                                type="checkbox"
                                checked={filters.activity.includes(activity)}
                                className={`size-4 rounded border-neutral-300 text-[${activityColors[activity.toLowerCase()] || activityColors.default}] focus:ring-[${activityColors[activity.toLowerCase()] || activityColors.default}] cursor`}
                                onChange={() => handleActivityFilterChange(activity)}
                              />
                            </div>
                            <div className="ml-3 text-sm/6 ">
                              <BodyText htmlFor={activity} classnvariant="formLabel">{activity}</BodyText>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}
              </div>
            </div>

            {/* Other Filters Accordion */}
            <div className="py-2 border border-neutral-200 rounded-xl mt-4">
              <div>
                <button
                  onClick={() => toggleAccordion('otherFilters')}
                  className="px-6 flex items-center justify-between py-4 w-full focus:outline-none"
                >
                  <BodyText variant="headline" className="font-bold">Autres Filtres</BodyText>
                  <span className={`transform duration-300 ease-out transition-transform ${accordionOpen.otherFilters ? "rotate-180" : ""}`}>
                    <ChevronDownIcon className="size-6 text-neutral-700" />
                  </span>
                </button>
              </div>
              <div
                  style={{
                    maxHeight: accordionOpen.otherFilters ? '1000px' : '0px', // Adjust max height based on open state
                  }}
                  className={`overflow-hidden transition-max-height duration-300 ease-out px-6`}
                >
                {accordionOpen.otherFilters && (
                  <div className="py-2 text-neutral-700 space-y-3">
                    {/* Gender Filter */}
                    <fieldset>
                      <legend className="sr-only">Genre</legend>
                      <div className="space-y-3">
                        {['femme'].map(gender => (
                          <div key={gender} className="relative flex items-center">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                checked={filters.gender.includes(gender)}
                                onChange={() => handleMultiSelectChange('gender', gender)}
                                className="size-4 rounded border-neutral-300 text-neutral-600 focus:ring-neutral-600 cursor"
                              />
                            </div>
                            <div className="ml-4 text-sm/6">
                              <BodyText htmlFor={gender} classnvariant="formLabel">{gender}</BodyText>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                    {/* Age Group Filter */}
                    <fieldset>
                      <legend className="sr-only">Groupe d'âge</legend>
                      <div className="space-y-3">
                        {['adulte', 'enfant'].map(age => (
                          <div key={age} className="relative flex items-center">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                checked={filters.ageGroup.includes(age)}
                                onChange={() => handleMultiSelectChange('ageGroup', age)}
                                className="size-4 rounded border-neutral-300 text-neutral-600 focus:ring-neutral-600 cursor"
                              />
                            </div>
                            <div className="ml-4 text-sm/6">
                              <BodyText htmlFor={age} classnvariant="formLabel">{age}</BodyText>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                    {/* Level Filter */}
                    <fieldset>
                      <legend className="sr-only">Niveau</legend>
                      <div className="space-y-3">
                        {['sparring', 'confirmé'].map(level => (
                          <div key={level} className="relative flex items-center">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                checked={filters.level.includes(level)}
                                onChange={() => handleMultiSelectChange('level', level)}
                                className="size-4 rounded border-neutral-300 text-neutral-600 focus:ring-neutral-600 cursor"
                              />
                            </div>
                            <div className="ml-4 text-sm/6">
                              <BodyText htmlFor={level} classnvariant="formLabel">{level}</BodyText>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <Button variant="secondary" onClick={toggleDrawer}>Confirmer</Button>
            </div>
          </div>
          </>
        )}

        {/* Filters Column (Desktop) */}
        <div className="hidden lg:block w-64 flex-shrink-0 p-4">

          {/* Activity Accordion */}
          <div className="py-2 border bg-white shadow border-neutral-200 rounded-xl">
            <div>
              <button
                onClick={() => toggleAccordion('activity')}
                className="px-6 flex items-center justify-between py-4 w-full focus:outline-none"
              >
                <BodyText variant="headline" className="font-bold">Activité</BodyText>
                <span className={`transform duration-300 ease-out transition-transform ${accordionOpen.activity ? "rotate-180" : ""}`}>
                  <ChevronDownIcon className="size-6 text-neutral-700" />
                </span>
              </button>
            </div>
            <div
                style={{
                  maxHeight: accordionOpen.activity ? '1000px' : '0px', // Adjust max height based on open state
                }}
                className={`overflow-hidden transition-max-height duration-300 ease-out px-6`}
              >
              {accordionOpen.activity && (
                <div className="py-2 text-neutral-700">
                  <fieldset>
                    <legend className="sr-only">Activités</legend>
                    <div className="space-y-3">
                      {['krav-maga', 'luta-livre', 'boxe-pied-poing', 'tolpar', 'mma', 'cross-training', 'événement'].map((activity) => (
                        <div key={activity} className="relative flex items-center">
                          <div className="flex h-6 items-center">
                            <input
                              id={activity}
                              name={activity}
                              type="checkbox"
                              checked={filters.activity.includes(activity)}
                              onChange={() => handleActivityFilterChange(activity)}
                              className={`size-4 rounded border-neutral-300 text-[${activityColors[activity.toLowerCase()] || activityColors.default}] focus:ring-[${activityColors[activity.toLowerCase()] || activityColors.default}] cursor-pointer`}
                            />
                          </div>
                          <div className="ml-4 text-sm/6">
                            <BodyText htmlFor={activity} className="cursor-pointer" variant="formLabel">{activity}</BodyText>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}
            </div>
          </div>

          {/* Other Filters Accordion */}
          <div className="py-2 border bg-white shadow border-neutral-200 rounded-xl mt-4">
            <div>
              <button
                onClick={() => toggleAccordion('otherFilters')}
                className="px-6 flex items-center justify-between py-4 w-full focus:outline-none"
              >
                <BodyText variant="headline" className="font-bold">Autres Filtres</BodyText>
                <span className={`transform duration-300 ease-out transition-transform ${accordionOpen.otherFilters ? "rotate-180" : ""}`}>
                  <ChevronDownIcon className="size-6 text-neutral-700" />
                </span>
              </button>
            </div>
            <div
                style={{
                  maxHeight: accordionOpen.otherFilters ? '1000px' : '0px', // Adjust max height based on open state
                }}
                className={`overflow-hidden transition-max-height duration-300 ease-out px-6`}
              >
              {accordionOpen.otherFilters && (
                <div className="py-2 text-neutral-700 space-y-3">
                  {/* Gender Filter */}
                  <fieldset>
                    <legend className="sr-only">Genre</legend>
                    <div className="space-y-3">
                      {['femme'].map(gender => (
                        <div key={gender} className="relative flex items-center">
                          <div className="flex h-6 items-center">
                            <input
                              id={gender}
                              name={gender}
                              type="checkbox"
                              checked={filters.gender.includes(gender)}
                              onChange={() => handleMultiSelectChange('gender', gender)}
                              className="size-4 rounded border-neutral-300 text-neutral-600 focus:ring-neutral-600 cursor"
                            />
                          </div>
                          <div className="ml-4 text-sm/6">
                            <BodyText htmlFor={gender} className="cursor-pointer" variant="formLabel">{gender}</BodyText>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>

                  {/* Age Group Filter */}
                  <fieldset>
                    <legend className="sr-only">Groupe d'âge</legend>
                    <div className="space-y-3">
                      {['adulte', 'enfant'].map(age => (
                        <div key={age} className="relative flex items-center">
                          <div className="flex h-6 items-center">
                            <input
                              id={age}
                              name={age}
                              type="checkbox"
                              checked={filters.ageGroup.includes(age)}
                              onChange={() => handleMultiSelectChange('ageGroup', age)}
                              className="size-4 rounded border-neutral-300 text-neutral-600 focus:ring-neutral-600 cursor"
                            />
                          </div>
                          <div className="ml-4 text-sm/6">
                            <BodyText htmlFor={age} className="cursor-pointer" variant="formLabel">{age}</BodyText>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>

                  {/* Level Filter */}
                  <fieldset>
                    <legend className="sr-only">Niveau</legend>
                    <div className="space-y-3">
                      {['sparring', 'confirmé'].map(level => (
                        <div key={level} className="relative flex items-center">
                          <div className="flex h-6 items-center">
                            <input
                              id={level}
                              name={level}
                              type="checkbox"
                              checked={filters.level.includes(level)}
                              onChange={() => handleMultiSelectChange('level', level)}
                              className="size-4 rounded border-neutral-300 text-neutral-600 focus:ring-neutral-600 cursor"
                            />
                          </div>
                          <div className="ml-4 text-sm/6">
                            <BodyText htmlFor={level} className="cursor-pointer" variant="formLabel">{level}</BodyText>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Calendar Component */}
        <div className="-mt-12">
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
