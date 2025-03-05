import googleKeep from '../assets/google-keep-logo.png'
import googleTasks from '../assets/google-tasks.png'
import googleContacts from '../assets/google-contacts.webp'
import googleMaps from '../assets/google-maps.png'
import styles from '../styles/rightDiv.module.css'
const RightDiv = () => {
    return (
        <div className={styles["container"]}>
            <img src={googleKeep} className={styles["keep"]} />
            <img src={googleTasks} className={styles["tasks"]} />
            <img src={googleContacts} className={styles["contacts"]} />
            <img src={googleMaps} className={styles["maps"]} />
        </div>
    )
}

export default RightDiv;