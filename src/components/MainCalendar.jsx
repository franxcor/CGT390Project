import {useContext} from 'react'

import styles from '../styles/mainCalendar.module.css';
import EventBlock from './EventBlock';
import AddEvent from './AddEvent';

import { SelectedContext } from '../contexts/SelectedContext.jsx';
import { MonthContext } from '../contexts/MonthContext.jsx';

const MainCalendar = ({offset}) => {
    const {startDate} = useContext(SelectedContext);
    const {date} = useContext(MonthContext);

    const handleCreateEvent = (startTime, day) => {
        console.log(startTime, day)
    }
    
    return (
        <div className={styles.content}>
            <div className = {styles.header}>
                <div className = {styles.day}  style={{marginLeft: '80px'}}>
                    <h5 className = {styles.weekDay} >SUN</h5>
                    {startDate != date ? <h3 className = {styles.numDay}> {startDate}</h3> :  <h3 className = {styles.numDaySelected}> {startDate}</h3> }
                    
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>MON</h5>
                    {startDate + 1 != date ? <h3 className = {styles.numDay}> {startDate + 1 + offset}</h3> :  <h3 className = {styles.numDaySelected}> {startDate + 1}</h3> }
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>TUE</h5>
                    {startDate + 1 != date ? <h3 className = {styles.numDay}> {startDate + 2 + offset}</h3> :  <h3 className = {styles.numDaySelected}> {startDate + 2}</h3> }
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>WED</h5>
                    {startDate + 1 != date ? <h3 className = {styles.numDay}> {startDate + 3 + offset}</h3> :  <h3 className = {styles.numDaySelected}> {startDate + 3}</h3> }
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>THU</h5>
                    {startDate + 1 != date ? <h3 className = {styles.numDay}> {startDate + 4 + offset}</h3> :  <h3 className = {styles.numDaySelected}> {startDate + 4}</h3> }
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>FRI</h5>
                    {startDate + 1 != date ? <h3 className = {styles.numDay}> {startDate + 5 + offset}</h3> :  <h3 className = {styles.numDaySelected}> {startDate + 5}</h3> }
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>SAT</h5>
                    {startDate + 1 != date ? <h3 className = {styles.numDay}> {startDate + 6 + offset}</h3> :  <h3 className = {styles.numDaySelected}> {startDate + 6}</h3> }
                </div>
            </div>
            <div className={styles.body}>
                <table>
                    <thead>
                        <tr >
                            <td className={styles.timeZone}>GMT-05</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.blockRow}>
                            <td className={styles.times}>1 AM</td>
                            <td className={styles.hourBlock}  ></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}> 2 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>3 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>4 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>5 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>6 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>7 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>8 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>9 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>10 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>11 AM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>12 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>1 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>2 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>3 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>4 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>5 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>6 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>7 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>8 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>9 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>10 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>
                        <tr>
                            <td className={styles.times}>11 PM</td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                            <td className={styles.hourBlock}></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default MainCalendar;