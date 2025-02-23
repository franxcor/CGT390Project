
import styles from '../styles/header.module.css';

//import images
import threeLines from '../assets/threeLinesBlack.svg';
import Logo from '../assets/googleLogo.png';
import LeftArrow from '../assets/chevron-left-arrow.svg';
import RightArrow from '../assets/chevron-right-arrow.svg';

const Header = () => {
    return (
        <div className={styles["container"]}>
            <img src={threeLines} className={styles["threeLines"]} />
            <img src={Logo} className={styles["logo"]} />
            <h3> Calendar </h3>
            <button className={styles["button"]}> Today </button>
            <img src={LeftArrow}  className={styles["leftArrow"]}/>
            <img src={RightArrow} className={styles["rightArrow"]}/>
            <button> February 2025 </button> {/* need to make this an imported value */}
        </div>
    )
}
export default Header;