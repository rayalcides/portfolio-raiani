import img from '../assets/img/perfil2.jpg'
import foto from '../assets/img/certificado-reprograma.png'
import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return(
    <div>
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
       <p>tenho 26 anos de idade,casada, sem filhos, <br /> resido atualmente na cidade de Salvador BA. Sou capoerista, poetisa, roterista e mãe de pets. <br />Migrei para a area tecnologica pois vi diversas oportunidades de crescimeto profissional, <br /> coisa que já almejava há um tempo. Trabalhei no mercado formal com telecomunicação e <br />atendimento ao publico. Hoje busco uma oportunidade na area da tecnologia. </p> 
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
   <section>
      <div className={styles.certificadoContainer}>
        <img className={styles.certificadoImg} src={foto} alt="" />
      </div>
    </section>
  </div>
   

  )
}