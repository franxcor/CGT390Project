import styles from '../styles/eventBlock.module.css'

const EventBlock = ({length, title, startTime, endTime}) => {
    return (
        <div>
            <div className={`${styles["container"]}`} style={{height: `${length}`}}>
                <p className={styles["title"]}>{title ? title : "New Event"}</p>
                <p className={styles["times"]}>{startTime} - {endTime}</p>
            </div>
        </div>
        
    )
    
}
export default EventBlock;