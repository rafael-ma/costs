import style from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home() {
    return (
        <section className={style.homeContainer}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton text='Criar projeto' to='/newproject' />
            <img src={savings} alt="Costs" />
        </section>
        )
}

export default Home