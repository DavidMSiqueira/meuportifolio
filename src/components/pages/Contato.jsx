import styles from './Contato.module.css'

export default function Contato() {
    return (
        <div>
            <h3>Gostaria de me contatar ?</h3>
            <p>Estas são as formas de entrar em contato comigo</p>
            <ul className={styles.list}>
                <li>E-mail: david.msiqueira20@outlook.com.br</li>
                <li>Telefone: +55 (21) 98013-2490</li>
                <li>GitHub: <a href="https://github.com/DavidMSiqueira" target="_blank" rel="noopener noreferrer">https://github.com/DavidMSiqueira</a></li>
            </ul>
        </div>
    )
}