import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa6'
import style from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={style.socialList}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={style.copyRight}>
                <span>Costs</span>&copy; 2024
            </p>
        </footer>
    )
}

export default Footer