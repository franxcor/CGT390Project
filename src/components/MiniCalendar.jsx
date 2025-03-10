import {useEffect, useState, useContext} from 'react';

import styles from '../styles/miniCalendar.module.css'
import leftArrow from '../assets/chevron-left-arrow.svg'
import rightArrow from '../assets/chevron-right-arrow.svg'

import { MonthContext } from '../contexts/MonthContext';
import { SelectedContext } from '../contexts/SelectedContext';

import AddEvent from '../components/AddEvent.jsx';
import { OffSetContext } from '../contexts/OffSetContext.jsx';

const MiniCalendar = () => {
    const [eventVisible, setEventVisible] = useState(false);
    const {startDate} = useContext(SelectedContext);
    const {date, month, year, monthStart, offset, miniMonth} = useContext(MonthContext);
    const {setMiniOffSet, miniOffSet} = useContext(OffSetContext);

    const miniMove = (direction) => {
        if (direction === 'r') {
            setMiniOffSet(miniOffSet + 1)
        } else if (direction === 'l') {
            setMiniOffSet(miniOffSet - 1)
        }
    }
    
     return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <h3 className={styles["month"]}>{miniMonth} {year}</h3>
                <img src={leftArrow} className={styles["left"]} onClick={() => miniMove("l")}/>
                <img src={rightArrow} className={styles["right"]} onClick={() => miniMove("r")}/>
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
                            {monthStart === 2 ? <td>1</td> : <td> </td>}
                            {monthStart === 3 ? <td>1</td> : <td> </td>}
                            {monthStart === 4 ? <td>1</td> : <td> </td>}
                            {monthStart === 5 ? <td>1</td> : <td> </td>}
                            {monthStart === 6 ? <td>1</td> : <td> </td>}
                        </tr>
                        <tr>
                            {monthStart === 0 ? <td>1</td> : <td>{2 + offset}</td>}
                            <td> {3 + offset + monthStart} </td>
                            <td> {4 + offset + monthStart} </td>
                            <td> {5 + offset + monthStart} </td>
                            <td> {6 + offset + monthStart} </td>
                            <td> {7 + offset + monthStart} </td>
                            <td> {8 + offset + monthStart} </td>
                        </tr>
                        <tr>
                            <td> {9 + offset + monthStart} </td>
                            <td> {10 + offset + monthStart} </td>
                            <td> {11 + offset + monthStart} </td>
                            <td> {12 + offset + monthStart} </td>
                            <td> {13 + offset + monthStart} </td>
                            <td> {14 + offset + monthStart} </td>
                            <td> {15 + offset + monthStart} </td>
                        </tr>
                        <tr>
                            <td> {16 + offset + monthStart} </td>
                            <td> {17 + offset + monthStart} </td>
                            <td> {18 + offset + monthStart} </td>
                            <td> {19 + offset + monthStart} </td>
                            <td> {20 + offset + monthStart} </td>
                            <td> {21 + offset + monthStart} </td>
                            <td> {22 + offset + monthStart} </td>
                        </tr>
                        <tr>
                            <td> {23 + offset + monthStart} </td>
                            <td> {24 + offset + monthStart} </td>
                            <td> {25 + offset + monthStart} </td>
                            <td> {26 + offset + monthStart} </td>
                            <td> {27 + offset + monthStart} </td>
                            {(miniMonth === "February" && offset === 7) ? <td></td> : <td>{28 + offset}</td>}
                            {(miniMonth != "February") ? <td>{29 + offset}</td> : <td></td>}
                        </tr>
                        <tr>
                            
                            {(miniMonth != "February") ? <td>{30 + offset}</td> : <td></td>}
                            {(miniMonth != "February" && miniMonth != "September" && miniMonth != "April" && month != "June" && month != "November") ? <td>{31 + offset}</td> : <td></td>}
                            {(miniMonth != "February" && miniMonth != "September" && miniMonth != "April" && month != "June" && month != "November" && offset === 1) ? <td>{31 + offset}</td> : <td></td>}
                            {(miniMonth != "February" && miniMonth != "September" && miniMonth != "April" && month != "June" && month != "November" && offset === 2) ? <td>{31 + offset}</td> : <td></td>}
                            {(miniMonth != "February" && miniMonth != "September" && miniMonth != "April" && month != "June" && month != "November" && offset === 3) ? <td>{31 + offset}</td> : <td></td>}
                            {(miniMonth != "February" && miniMonth != "September" && miniMonth != "April" && month != "June" && month != "November" && offset === 4) ? <td>{31 + offset}</td> : <td></td>}
                            {(miniMonth != "February" && miniMonth != "September" && miniMonth != "April" && month != "June" && month != "November" && offset === 5) ? <td>{31 + offset}</td> : <td></td>}
                            {(miniMonth != "February" && miniMonth != "September" && miniMonth != "April" && month != "June" && month != "November" && offset == 6) ? <td>{31 + offset}</td> : <td></td>}
                        </tr>
                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default MiniCalendar