import {useEffect, useState} from 'react';

import styles from '../styles/miniCalendar.module.css'
import leftArrow from '../assets/chevron-left-arrow.svg'
import rightArrow from '../assets/chevron-right-arrow.svg'

import Datetime from 'react-datetime'; 

const MiniCalendar = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [date, setDate] = useState(0);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState(0)
    useEffect(() => {
        let newDate = new Date();
        setDate(newDate.getDate());
        setMonth(monthNames[newDate.getMonth()]);
        setYear(newDate.getFullYear());
    }, [])
    
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <h3 className={styles["month"]}>{month} {year}</h3>
                <img src={leftArrow} className={styles["left"]}/>
                <img src={rightArrow} className={styles["right"]}/>
            </div>
            {/* temporary numbers */}
            <div className={styles["days"]}>
                <table className = {styles["calendarContent"]}>
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
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default MiniCalendar