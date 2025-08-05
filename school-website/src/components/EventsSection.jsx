export default function EventsSection() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Parent-Teacher Conference',
      date: 'June 15, 2024',
      time: '3:00 PM - 6:00 PM',
      location: 'School Auditorium'
    },
    {
      id: 2,
      title: 'Science Fair',
      date: 'June 20, 2024',
      time: '9:00 AM - 2:00 PM',
      location: 'School Gym'
    },
    {
      id: 3,
      title: 'Graduation Ceremony',
      date: 'June 30, 2024',
      time: '10:00 AM',
      location: 'Main Football Field'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
          <a
            href="/events"
            className="text-blue-600 hover:underline font-medium"
          >
            View All Events →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {event.title}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {event.date}
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {event.time}
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </p>
              </div>
              <button className="mt-4 text-blue-600 hover:underline">
                More Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}