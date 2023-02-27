import perfil from '../assets/img/perfil.png'

import styles from '../styles/components/banner.module.css'

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
     <div className={styles.bannerInformacoes}>
       <p>
         <strong>OLÁ, sejá bem vindo(a), me chamo</strong>
       </p>
       <h1>RAIANI ALCIDES</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto sint, rerum labore provident, dolorum, praesentium eius natus quasi quae pariatur esse aspernatur tempora laborum beatae ea recusandae minus reiciendis.</p>
       <button className={styles.bannerClick}>Meus jobs</button>
     </div>
     <div>
      <img className={styles.bannerImg} src={perfil} alt="" />
     </div>
    </div>
  )
}