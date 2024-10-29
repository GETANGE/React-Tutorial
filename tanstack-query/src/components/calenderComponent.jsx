import { useState } from 'react';
import { Calendar } from 'primereact/calendar';

export default function CalendarDisplay() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center bg-red-500">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek style={{width: '458px'}}/>
        </div>
    );
}