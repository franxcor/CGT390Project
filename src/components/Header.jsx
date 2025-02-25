
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

const Header = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["leftSection"]}>
                <img src={threeLines} className={styles["threeLines"]} />
                <img src={Logo} className={styles["logo"]} />
                <h3 className={styles["calText"]}> Calendar </h3>
                <button className={styles["todayButton"]}> Today </button>
                <img src={LeftArrow}  className={styles["leftArrow"]}/>
                <img src={RightArrow} className={styles["rightArrow"]}/>
                <button className={styles["monthButton"]}> February 2025 <img src={downArrow} className={styles["downArrow"]} /> </button> {/* need to make this an imported value */}
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