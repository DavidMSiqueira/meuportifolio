import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

import logo from '../../img/logoNav.png'
import Container from './Container'

export default function Navbar() {

    return (
        <nav className={ styles.navbar }>
            <Container>
                <Link to="/"><img className={styles.logo} src={logo} alt='DavidLogo' /></Link>
                <ul className={ styles.list }>
                    <li className={ styles.item }><Link to="/">Home</Link></li>
                    <li className={ styles.item }><Link to="/projetos">Projetos</Link></li>
                    <li className={ styles.item }><Link to="/contato">Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}