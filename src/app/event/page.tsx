'use client';

import React from 'react';

const scheduleData = [
  { time: "8:00 AM - 9:00 AM", title: "Check-in, Poster Set-up, and Breakfast!", type: "break", locations: ["Check-in + Poster Set-up: JEANNIE Lobby", "Breakfast Served: Lab", "Breakfast Seating: Patio"] },
  { time: "9:00 AM - 9:45 AM", title: "Opening + Keynote 1", type: "event", locations: ["JEANNIE Auditorium"] },
  { time: "9:45 AM - 10:35 AM", title: "Industry Panel | Academic Workshop", type: "event", locations: ["Industry Panel: JEANNIE Auditorium", "Academic Workshop: Lab"] },
  { time: "10:35 AM - 10:45 AM", title: "Transition", type: "break", locations: ["JEANNIE Auditorium"] },
  { time: "10:45 AM - 12:00 PM", title: "Poster Session and Networking @ Company Booths", type: "event", locations: ["JEANNIE Lobby"] },
  { time: "12:00 PM - 12:40 PM", title: "Lunch | Poster Session (contd.)", type: "break", locations: ["Poster Session: JEANNIE Lobby", "Lunch Served: Patio", "Lunch Seating: Lab"] },
  { time: "12:40 PM - 1:35 PM", title: "Academic Panel | Industry Workshop", type: "event", locations: ["Academic Panel: JEANNIE Auditorium", "Industry Workshop: Lab"] },
  { time: "1:35 PM - 2:00 PM", title: "Coffee Break", type: "break", locations: ["JEANNIE Lobby"] },
  { time: "2:00 PM - 4:15 PM", title: "BCI Competition", type: "event", locations: ["JEANNIE Auditorium"] },
  { time: "4:20 PM - 5:00 PM", title: "Keynote 2", type: "event", locations: ["JEANNIE Auditorium"] },
  { time: "5:00 PM - 5:30 PM", title: "Closing Ceremony and Awards", type: "event", locations: ["Main Stage"] },
];

export default function ConferenceSchedule() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add padding-top to avoid nav overlap */}
      <main className="flex-grow pt-32 pb-24 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Conference Schedule</h1>

        {/* Single-Column Layout */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-5">
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer
                ${item.type === "event" ? "bg-white" : "bg-gray-200 bg-opacity-50"}`}
            >
              <p className="text-sm font-semibold text-gray-500">{item.time}</p>
              <h2 className="text-lg font-bold">{item.title}</h2>
              
              {/* Display locations if available, each on a new line */}
              {item.locations.length > 0 && (
                <div className="text-sm text-gray-600 mt-2 flex flex-col">
                  {item.locations.map((location, i) => (
                    <p key={i}>📍 {location}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
