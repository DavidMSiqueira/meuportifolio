import styles from './Home.module.css'
import avatar from '../../img/imagemLogo.jpg'

export default function Home() {
    return (

        <div className={styles.card}>
            <img src={avatar} alt="Avatar" />
            <div className={styles.container_card}>
                <p>Olá, me chamo <span>David Machado Siqueira</span> e quero mostrar a você um pouco do meu trabalho como desenvolvedor.</p>
                <p>O objetivo deste site é te mostrar meus conhecimentos e projetos e te mostrar um pouco de quem eu sou.</p>
            </div>
        </div>

    )
}