import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu} from './components/Menu'
import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Portifolio } from './pages/Portifolio'
import { Contato } from './pages/Contato'




export function AplicationRouter (){
   return(
     <BrowserRouter>
     <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/Portifólio" element={<Portifolio/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
     </BrowserRouter>
   )
}