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

    const [monthStart, setMonthStart] = useState(-1);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let newDate = new Date();
        setDate(newDate.getDate());
        setMonth(monthNames[newDate.getMonth()]);
        setYear(newDate.getFullYear());
        setDayNum(newDate.getDay());
        setDay(weekNames[newDate.getDay() - 1]);
    }, []);

    useEffect(() => {
        if (month != "" && year != 0) {
            let curMonth = new Date(month + "1, " + year.toString())
            setMonthStart(curMonth.getDay());
        }
    })

    useEffect(() => {
        if (monthStart != -1) {
            if (monthStart == 6) {
                setOffset(0)
            }
            if (monthStart == 5) {
                setOffset(1)
            }
            if (monthStart == 4) {
                setOffset(2)
            }
            if (monthStart == 3) {
                setOffset(3)
            }
            if (monthStart == 2) {
                setOffset(4)
            }
            if (monthStart == 1) {
                setOffset(5)
            }
            if (monthStart == 0) {
                setOffset(6)
            }
        }
    })


    return (
        <MonthContext.Provider value={{date, month, year, dayNum, day, monthStart, offset}}>
            {children}
        </MonthContext.Provider>
    )
}