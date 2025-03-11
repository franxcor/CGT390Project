import clock from '../assets/clock.png'
import guests from '../assets/guests.png'
import googleMeet from '../assets/google-meet.webp'
import maps from '../assets/maps.png'
import description from '../assets/description.webp'
import calendar from '../assets/calendar.jpg'

import style from '../styles/addEvent.module.css'
import { useContext } from 'react'
import { AddEventContext } from '../contexts/addEventContext'
const AddEvent = () => {
    const {setEventOpen} = useContext(AddEventContext)
    const closeAddEvent = () => {
        setEventOpen(false)
    }
    const createNewEvent = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={() => createNewEvent()}>
            <div className={style["container"]}>
                <div className={style["header"]}>
                    <input type="text" placeholder="Add title" className={style["addEvent"]}/>
                    <button className={style["xButton"]} onClick={() => closeAddEvent()}> X </button>
                </div>
                <p>Event</p>
                <div className={style["bodySection"]}>
                    <img src={clock} className={style["clock"]} />
                    <div className={style["dateInputs"]}>
                        <select className={style["selections"]}>
                            <option>Select...</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                        <select className={style["selections"]}>
                            <option>Select...</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <input type="text" placeholder="day" className={style["textInputs"]}/>
                        | 
                        <input type="text" placeholder="Start Time" className={style["textInputs"]}/>
                        <input type="text" placeholder="End Time" className={style["textInputs"]}/>
                    </div>
                </div>
                <div className={style["bodySection"]}>
                    <img src={guests} className={style["guests"]}/>
                    <p>Add Guests</p>
                </div>
                <div className={style["bodySection"]}>
                    <img src={googleMeet} className={style["meet"]}/>
                    <p>Add Google Meet Video Conferencing</p>
                </div>
                <div className={style["bodySection"]}>
                    <img src={maps} className={style["maps"]}/>
                    <p>Add Location</p>
                </div>
                <div className={style["bodySection"]}>
                    <img src={description} className={style["desc"]}/>
                    <p>Add description or a Google Drive attachment</p>
                </div>
                <div className={style["bodySection"]}>
                    <img src={calendar} className={style["calendar"]} />
                    <p>Francesca Corbishley</p>
                </div>           
                <a><p>More options</p></a>
                <input type="submit" value="Submit"/>

            </div>
        </form>
        
    )
}

export default AddEvent;