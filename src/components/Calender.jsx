import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const CalendarCard = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="chart-card">
            <h2>Calendar</h2>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className="selected-date">
                Selected: <strong>{date.toDateString()}</strong>
            </p>
        </div>
    );
};

export default CalendarCard;
