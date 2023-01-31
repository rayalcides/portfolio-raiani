import perfil from '../assets/img/perfil.png'

export function Banner() {
  return (
    <div>
     <div>
       <p>
         <strong>OLÁ, sejá bem vindo(a), me chamo</strong>
       </p>
       <h1>RAIANI ALCIDES</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto sint, rerum labore provident, dolorum, praesentium eius natus quasi quae pariatur esse aspernatur tempora laborum beatae ea recusandae minus reiciendis.</p>
       <button>Meus jobs</button>
     </div>
     <div>
      <img src={perfil} alt="" />
     </div>
    </div>
  )
}