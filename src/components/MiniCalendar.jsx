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
                <span className={styles["dow"]}>S &nbsp;&nbsp; M &nbsp;&nbsp; T &nbsp;&nbsp; W &nbsp;&nbsp; T &nbsp;&nbsp; F &nbsp;&nbsp; S</span>
                <p>23 24 25 26 27 28 1</p>
                <p>2 &nbsp; 3  &nbsp; &nbsp; 4  &nbsp; 5  &nbsp; 6  &nbsp; 7  &nbsp; 8</p>
                <p>9 &nbsp; 10  11 12 13 14 15</p>
                <p> 16 17 18 19 20 21 22</p>
                <p>23 24 25 26 27 28 29</p>
                <p> 30 31 &nbsp;1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5</p>
            </div>

        </div>
    )
}

export default MiniCalendar