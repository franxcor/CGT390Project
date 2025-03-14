
import styles from '../styles/header.module.css';

//import images
import threeLines from '../assets/threeLinesBlack.svg';
import Logo from '../assets/googleLogo.png';
import LeftArrow from '../assets/chevron-left-arrow.svg';
import RightArrow from '../assets/chevron-right-arrow.svg';
import downArrow from '../assets/triangleDown.webp';
import magGlass from '../assets/magnifying.png';
import settings from '../assets/settings.png';
import question from '../assets/question.png';
import calendar from '../assets/calendar.jpg';
import tasks from '../assets/tasks.svg';
import dots from '../assets/dots.webp';
import profile from '../assets/profile.png';

import { MonthContext } from '../contexts/MonthContext';
import { useContext, useState } from 'react';
import { OffSetContext } from '../contexts/OffSetContext';
const Header = () => {

    const {month} = useContext(MonthContext);
    const {year} = useContext(MonthContext);
    const {offSet, setOffSet} = useContext(OffSetContext);

    const calcOffSet = (direction) => {
        console.log("pressed")
        if (direction === "prev") {
            setOffSet(offSet -7)
        } else if (direction === "next") {
            setOffSet(offSet + 7)
        }
    }
    const resetDate = () => {
        setOffSet(0);
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["leftSection"]}>
                <img src={threeLines} className={styles["threeLines"]} />
                <img src={Logo} className={styles["logo"]} />
                <h3 className={styles["calText"]}> Calendar </h3>
                <button className={styles["todayButton"]} onClick = {() => resetDate()}> Today </button>
                <button onClick={() => calcOffSet("prev")} className={styles["arrowButtons"]}><img src={LeftArrow}  className={styles["leftArrow"]} /></button>
                <button onClick={() => calcOffSet("next")} className={styles["arrowButtons"]}> <img src={RightArrow} className={styles["rightArrow"]} /> </button>
                <button className={styles["monthButton"]}> {month} {year} <img src={downArrow} className={styles["downArrow"]} /> </button> {/* need to make this an imported value */}
            </div>
            <div className={styles["break"]}>

            </div>
            <div className={styles["rightSection"]}>
                <img src={magGlass} className={styles["magGlass"]} />
                <img src={question} className={styles["question"]} />
                <img src={settings} className={styles["settings"]} />
                <button className={styles["weekButton"]}> Week <img src={downArrow} className={styles["downArrow2"]} /> </button>
                <button className={styles["calVersion"]}><img src={calendar} className={styles["calendar"]} /></button>
                <button className={styles["taskVersion"]}><img src={tasks} className={styles["tasks"]} /></button>
                <button className={styles["dots"]}><img src={dots} className={styles["dotsImg"]} /></button>
                <button className={styles["profile"]}><img src={profile} className={styles["profileImg"]} /></button>  
            </div>
        </div>
    )
}
export default Header;
