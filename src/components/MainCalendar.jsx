import styles from '../styles/mainCalendar.module.css'

const MainCalendar = () => {
    return (
        <div className={styles.content}>
            <div className = {styles.header}>
                <div className = {styles.day}>
                    <h5>SUN</h5>
                    <h3> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5>MON</h5>
                    <h3> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5>TUE</h5>
                    <h3> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5>WED</h5>
                    <h3> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5>THU</h5>
                    <h3> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5>FRI</h5>
                    <h3> 1 </h3>
                </div>
                <div className = {styles.day}>
                    <h5>SAT</h5>
                    <h3> 1 </h3>
                </div>
                {/*
                <p className={styles.days}> SUN <span className={styles.daySpace}> &nbsp; </span> 
                MON <span className={styles.daySpace}> &nbsp; </span> 
                TUE <span className={styles.daySpace}> &nbsp; </span> 
                WED <span className={styles.daySpace}> &nbsp; </span> 
                THU <span className={styles.daySpace}> &nbsp; </span> 
                FRI <span className={styles.daySpace}> &nbsp; </span>
                SAT</p>
                <p className = {styles.numberDays }>2 <span className={styles.daySpace}> &nbsp; </span>
                3 <span className={styles.daySpace}> &nbsp; </span>
                4 <span className={styles.daySpace}> &nbsp; </span>
                5 <span className={styles.daySpace}> &nbsp; </span>
                6 <span className={styles.daySpace}> &nbsp; </span>
                7 <span className={styles.daySpace}> &nbsp; </span>
                8</p>
                */}
            </div>
            <div className = {styles.body}>

            </div>
        </div>
    )
}
export default MainCalendar;