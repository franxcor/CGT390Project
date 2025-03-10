import {createContext, useState, useContext, useEffect } from 'react';
import { MonthContext } from './MonthContext';
export const SelectedContext = createContext();

export const SelectedProvider = ({children}) => {
    const [startDate, setStartDate] = useState(0);

    const {dayNum, date, month} = useContext(MonthContext);

    useEffect(() => {
        if (dayNum !== undefined && date !== undefined) {
            setStartDate(date - dayNum);
            console.log(date, dayNum);
            

        }
    }, [date, dayNum]);

    

    return (
        <SelectedContext.Provider value={{startDate}}>
            {children}
        </SelectedContext.Provider>
    )
}