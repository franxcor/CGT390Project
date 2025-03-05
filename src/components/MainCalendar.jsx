import styles from '../styles/mainCalendar.module.css';


import EventBlock from './EventBlock';

const MainCalendar = () => {
    return (
        <div className={styles.content}>
            <div className = {styles.header}>
                <div className = {styles.day}  style={{marginLeft: '80px'}}>
                    <h5 className = {styles.weekDay} >SUN</h5>
                    <h3 className = {styles.numDay}> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>MON</h5>
                    <h3 className = {styles.numDay}> 2 </h3>
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>TUE</h5>
                    <h3 className = {styles.numDay}> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>WED</h5>
                    <h3 className = {styles.numDay}> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>THU</h5>
                    <h3 className = {styles.numDay}> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>FRI</h5>
                    <h3 className = {styles.numDay}> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5 className = {styles.weekDay}>SAT</h5>
                    <h3 className = {styles.numDay}> 1 </h3>
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
                            <td className={styles.hourBlock}></td>
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