import { useState, useEffect } from "react"
import axios from "axios"
import styles from '../styles/components/repositorios.module.css'

export function Repositorios() {
  const [reposFromApi, setReposFromApi] = useState([])
  const baseURL = 'https://api.github.com/users/rayalcides/repos'

  useEffect(() => {
  async function getData() {
    const response = await axios.get(baseURL)
    setReposFromApi(response.data)
    }
   getData()
  }, [])
  
  return(
    <div className={styles.listaCards}>
      {reposFromApi.map(item => (
          <a href={item.html_url} target='_blank' className={styles.cardContainer} kay={item.id}>
            <h2>{item.name}</h2>
            <div className={styles.cardInfor}>
              <p>{item.description}</p>
              <p>{item.language}</p>
            </div>
        </a>
        )
      )}
    </div>
  )
}