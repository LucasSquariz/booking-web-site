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
            color: "#263238"            
        }
    ])    

    

    useEffect(() => {

    })

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
                minDate={new Date()}   
                maxDate={addDays(new Date(), 180)}  
                disabledDates= {[
                   
                    new Date(2022, 5, 5)
                    ]}       

            />
        </>

    )
}

export default Calendar1;
