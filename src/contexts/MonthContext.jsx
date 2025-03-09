import {createContext, useState, useEffect} from 'react';

import Datetime from 'react-datetime'; 
    
export const MonthContext = createContext();

export const MonthProvider = ({children}) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const [date, setDate] = useState(0);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState(0);
    const [dayNum, setDayNum] = useState(0);
    const [day, setDay] = useState("");

    useEffect(() => {
        let newDate = new Date();
        setDate(newDate.getDate());
        setMonth(monthNames[newDate.getMonth()]);
        setYear(newDate.getFullYear());
        setDayNum(newDate.getDay());
        setDay(weekNames[newDate.getDay() - 1]);
    }, []);


    return (
        <MonthContext.Provider value={{date, month, year, dayNum, day}}>
            {children}
        </MonthContext.Provider>
    )
}