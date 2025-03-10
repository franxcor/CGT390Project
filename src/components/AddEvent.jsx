import clock from '../assets/clock.png'
import guests from '../assets/guests.png'
import googleMeet from '../assets/google-meet.webp'
import maps from '../assets/maps.png'
import description from '../assets/description.webp'
import calendar from '../assets/calendar.jpg'

import style from '../styles/addEvent.module.css'
const AddEvent = () => {
    return (
        <div className={style["container"]}>
            <div className={style["header"]}>
                <input type="text" placeholder="Add title" className={style["addEvent"]}/>
                <p>x</p>
            </div>
            <p>Event</p>
            <div className={style["bodySection"]}>
                <img src={clock} className={style["clock"]} />
                <p>Day of the Week, Month Day &nbsp; Time Start - Time End </p>
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
            <button>Save</button>

        </div>
    )
}

export default AddEvent;