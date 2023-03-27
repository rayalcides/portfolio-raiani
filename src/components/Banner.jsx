import perfil from '../assets/img/perfil.png'
import { Link } from 'react-router-dom'
import styles from '../styles/components/banner.module.css'

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
     <div className={styles.bannerInformacoes}>
       <p>
         <strong>OLÁ, sejá bem vindo(a), me chamo</strong>
       </p>
       <h1>RAIANI ALCIDES</h1>
       <p>Sou uma desenvolvedora Frontend, <br /> busco me desenvolver no mercado de trabalho na area tecnologica. Já criei alguns layouts em trabalho em conjunto com outros desenvolvedores, Utilizando HTML, CSS e Bootstrap. Hoje estou a procura de uma oportunidade formal como desenvolvedora Frontend Jr (React). Meu foco é oferecer um trabalho sério, de qualidade, com responsabilidade.</p>
       <Link to='/sobre' className={styles.bannerClick} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        saiba mais
       </Link>
     </div>
     <div>
      <img className={styles.bannerImg} src={perfil} alt="" />
     </div>
    </div>
  )
}



