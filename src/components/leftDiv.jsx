import DownArrow from '../assets/triangleDown.webp'
import plus from '../assets/plus.webp'

import styles from '../styles/leftDiv.module.css'

import MiniCalendar from './MiniCalendar'
import { AddEventContext } from '../contexts/addEventContext'
import { useContext } from 'react'
const LeftDiv = () => {
    const {setEventOpen} = useContext(AddEventContext);

    const handleCreateEvent = () => {
        setEventOpen(true);
    }
    return (
        <div className={styles["container"]}>
            <button className={styles["createButton"]} onClick={handleCreateEvent}>
                <img className={styles["createButtonPlus"]} src={plus}/>Create
                <img src={DownArrow} className={styles["createButtonDown"]}/>
            </button>
            <MiniCalendar></MiniCalendar>
        </div>
    )
}
export default LeftDiv;