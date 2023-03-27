import git from '../assets/img/github.png'
import linkedin from '../assets/img/linkedin.png'
import email from '../assets/img/email.png'
import what from '../assets/img/whatssap.png'
import style from '../styles/pages/contato.module.css'
import { Link } from 'react-router-dom'

export function Contato() {
  return(
  <div className={style.contatoContainer}>
    <div>
     <a target='_blank' href="https://github.com/rayalcides">
     <img src={git} alt=""/>
     </a>
    </div>
    <div>
      <a target='_blank' href="https://www.linkedin.com/in/raiani-alcides-744984176/">
       <img src={linkedin} alt="" />
      </a>
    </div>
    <div>
      <a target='_blank' href="https://outlook.live.com/mail/railayli2@hotmail.com">
       <img src={email} alt="" />
      </a>
    </div>
    <div>
      <a target='_blank' href="https://api.whatsapp.com/send?phone=5571983251430">
        <img src={what} alt="" />
      </a>
    </div>
  </div> 
  )
}