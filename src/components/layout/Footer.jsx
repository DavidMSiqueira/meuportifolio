import {FaWhatsapp, FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href="https://wa.me/5521980132490?text=Ol%C3%A1+David%2C+vim+pelo+seu+portfolio+e+gostaria+de+conhecer+voc%C3%AA+um+pouco+mais%21" target='_blank' rel="noopener noreferrer"><FaWhatsapp /></a></li>
                <li><a href="https://github.com/DavidMSiqueira" target='_blank' rel="noopener noreferrer"><FaGithub /></a></li>
                <li><a href="http://www.linkedin.com/in/davidmsiqueira/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a></li>
            </ul>
            <p className={styles.copy_right}><span>David Siqueira</span> &copy; 2023</p>
        </footer>
    )
}