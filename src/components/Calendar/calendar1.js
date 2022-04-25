import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { pt } from 'date-fns/locale'

function Calendar1() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
            color: "#263238",
            scroll: {
                enabled: true,
                monthHeight: 20,
                longMonthHeight: 20,
                monthWidth: 1,
                calendarWidth: 200,
                calendarHeight: 150
            }
        }
    ])

    function SalvarData(item) {
        localStorage.setItem('data', JSON.stringify(item));
    }

    return (
        <>
            <DateRange
                editableDateInputs={true}
                onChange={state => {
                    SalvarData(state.selection)
                    setState([state.selection])
                }}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={2}
                direction="horizontal"
                locale={pt}

            />
        </>

    )
}

export default Calendar1;
