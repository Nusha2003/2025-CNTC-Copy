'use client';

import React from 'react';

const scheduleData = [
  { time: "8:00 AM - 9:00 AM", title: "Check-in, Poster Set-up, and Breakfast!", type: "break" },
  { time: "9:00 AM - 9:45 AM", title: "Opening + Keynote 1", type: "event" },
  { time: "9:45 AM - 10:35 AM", title: "Industry Panel | Academic Workshop", type: "event" },
  { time: "10:35 AM - 10:45 AM", title: "Transition", type: "break" },
  { time: "10:45 AM - 12:00 PM", title: "Poster Session and Networking @ Company Booths", type: "event" },
  { time: "12:00 PM - 12:40 PM", title: "Lunch | Poster Session (contd.)", type: "break" },
  { time: "12:40 PM - 1:35 PM", title: "Academic Panel | Industry Workshop", type: "event" },
  { time: "1:35 PM - 2:00 PM", title: "Coffee Break", type: "break" },
  { time: "2:00 PM - 4:15 PM", title: "BCI Competition", type: "event" },
  { time: "4:20 PM - 5:00 PM", title: "Keynote 2", type: "event" },
  { time: "5:00 PM - 5:30 PM", title: "Closing Ceremony and Awards", type: "event" },
];

export default function ConferenceSchedule() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add padding-top to avoid nav overlap */}
      <main className="flex-grow pt-32 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Conference Schedule</h1>

        {/* 3-column grid layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg ${item.type === "event" ? "bg-white" : "bg-gray-200 bg-opacity-50"} `}
            >
              <p className="text-sm font-semibold">{item.time}</p>
              <h2 className="text-lg font-bold">{item.title}</h2>
            </div>
          ))}
        </div>
      </main>


    </div>
  );
}
