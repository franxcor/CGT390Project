import {useEffect, useState, useContext} from 'react';

import styles from '../styles/miniCalendar.module.css'
import leftArrow from '../assets/chevron-left-arrow.svg'
import rightArrow from '../assets/chevron-right-arrow.svg'

import { MonthContext } from '../contexts/MonthContext';
import { SelectedContext } from '../contexts/SelectedContext';

import AddEvent from '../components/AddEvent.jsx';

const MiniCalendar = () => {
    const [eventVisible, setEventVisible] = useState(false);
    const {startDate} = useContext(SelectedContext);
    const {date, month, year, monthStart, offset} = useContext(MonthContext);
    
    /*
    useEffect (() => {
        if (monthStart != 0) {
            if 
        }
    })
        */

     return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <h3 className={styles["month"]}>{month} {year}</h3>
                <img src={leftArrow} className={styles["left"]}/>
                <img src={rightArrow} className={styles["right"]}/>
            </div>
            {/* temporary numbers */}
            <div className={styles["days"]}>
                {/*eventVisible && <AddEvent></AddEvent>*/}
                <table className = {styles["calendarContent"]} >
                    <thead className={styles["calendarDayNames"]}>
                        <tr>
                            <td className={styles["dow"]}>S</td>
                            <td className={styles["dow"]}>M</td>
                            <td className={styles["dow"]}>T</td>
                            <td className={styles["dow"]}>W</td>
                            <td className={styles["dow"]}>T</td>
                            <td className={styles["dow"]}>F</td>
                            <td className={styles["dow"]}>S</td>
                            
                        </tr>
                        
                    </thead>
                    <tbody className={styles["calendarDayNums"]}>
                        <tr>
                            <td></td>
                            {monthStart === 1 ? <td >1</td> : <td> </td>}
                            <td>{monthStart === 2 ? <td>1</td> : <td> </td>}</td>
                            <td>{monthStart === 3 ? <td>1</td> : <td> </td>}</td>
                            <td>{monthStart === 4 ? <td>1</td> : <td> </td>}</td>
                            <td>{monthStart === 5 ? <td>1</td> : <td> </td>}</td>
                            {monthStart === 6 ? <td>1</td> : <td>hello</td>}
                        </tr>
                        <tr>
                            <td>{monthStart === 0 ? <td>1</td> : <td>{2 + offset}</td>}</td>
                            <td> {3 + offset} </td>
                            <td> {4 + offset} </td>
                            <td> {5 + offset} </td>
                            <td> {6 + offset} </td>
                            <td> {7 + offset} </td>
                            <td> {8 + offset} </td>
                        </tr>
                        <tr>
                            <td> {9 + offset} </td>
                            <td> {10 + offset} </td>
                            <td> {11 + offset} </td>
                            <td> {12 + offset} </td>
                            <td> {13 + offset} </td>
                            <td> {14 + offset} </td>
                            <td> {15 + offset} </td>
                        </tr>
                        <tr>
                            <td> {16 + offset} </td>
                            <td> {17 + offset} </td>
                            <td> {18 + offset} </td>
                            <td> {19 + offset} </td>
                            <td> {20 + offset} </td>
                            <td> {21 + offset} </td>
                            <td> {22 + offset} </td>
                        </tr>
                        <tr>
                            <td> {23 + offset} </td>
                            <td> {24 + offset} </td>
                            <td> {25 + offset} </td>
                            <td> {26 + offset} </td>
                            <td> {27 + offset} </td>
                            {(month === "February" && offset === 7) ? <td></td> : <td>{28 + offset}</td>}
                            {(month != "February") ? <td>{29 + offset}</td> : <td></td>}
                        </tr>
                        <tr>
                            
                            {(month != "February") ? <td>{30 + offset}</td> : <td></td>}
                            {(month != "February" && month != "September" && month != "April" && month != "June" && month != "November") ? <td>{31 + offset}</td> : <td></td>}
                            {(month != "February" && month != "September" && month != "April" && month != "June" && month != "November" && offset === 1) ? <td>{31 + offset}</td> : <td></td>}
                            {(month != "February" && month != "September" && month != "April" && month != "June" && month != "November" && offset === 2) ? <td>{31 + offset}</td> : <td></td>}
                            {(month != "February" && month != "September" && month != "April" && month != "June" && month != "November" && offset === 3) ? <td>{31 + offset}</td> : <td></td>}
                            {(month != "February" && month != "September" && month != "April" && month != "June" && month != "November" && offset === 4) ? <td>{31 + offset}</td> : <td></td>}
                            {(month != "February" && month != "September" && month != "April" && month != "June" && month != "November" && offset === 5) ? <td>{31 + offset}</td> : <td></td>}
                            {(month != "February" && month != "September" && month != "April" && month != "June" && month != "November" && offset == 6) ? <td>{31 + offset}</td> : <td></td>}
                        </tr>
                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default MiniCalendar