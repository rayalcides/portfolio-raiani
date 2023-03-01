import img from '../assets/img/perfil2.jpg'
import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return(
   <div className={styles.sobreContainer}>
    <div>
     <div className={styles.inforInicial}>
       <img className={styles.imgSobre} src={img} alt="" />
       <div>
         <h1>Raiani Alcides</h1>
         <h2>Developer Frontend</h2>
       </div>
     </div>
     <div>
         <h3>bio:</h3>
        <p>Sou uma desenvolvedora Frontend, <br /> busco me desenvolver no mercado de trabalho na area tecnologica. <br /> Meu foco é oferecer um trabalho sério, de qualidade, com responsabilidade.</p>
     </div>
    </div>
    <div className={styles.sobreDados}>
        <h3>Formação:</h3>
        <ul>
          <li>2 grau completo</li>
          <li>Curso de programação <br />Frontend - Reprograma</li>
        </ul>
      <h3>Experiências:</h3>
      <ul>
        <li>Freelancer de programação</li>
        <li>Experiência em construção <br />de site com HTML, CSS, JavaScript e Bootstrep</li>
        <li>Experiência com voluntariado <br />de processos celetivos para cursos - Reprograma</li>
      </ul>
    </div>
   </div>

  )
}