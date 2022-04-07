import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { pt } from 'date-fns/locale'
import './style.scss';

function Calendar2() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
            color: "#263238"
        }
    ])

    return (
        <DateRange            
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={1}
            direction="horizontal"
            locale={pt}
        />
    )
}

export default Calendar2;
