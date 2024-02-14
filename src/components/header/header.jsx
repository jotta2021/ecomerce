import React from "react"
import * as C from './styles.tsx'
import { CiSearch } from "react-icons/ci";
import { Button } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
export default function Header(){
    return(
    <C.Header>




<C.Env>
    <FaLocationDot size={24} color="white"/>
    <h3>Enviar para Penedo AL</h3>
</C.Env>

<C.containerInput>


      <input
       placeholder="Buscar produtos..."
       />

     
      
        <Button
        startIcon={     <CiSearch size={27} color={'white'}/>}
        />
      
  
</C.containerInput>
<C.Nav>
    <li>Categorias</li>
    <li>Ofertas</li>
    <li>Automação</li>
    <li>Eletronicos</li>
</C.Nav>

<C.Car>
<MdOutlineShoppingCart size={24} color="white"/>
<h3>Carrinho</h3>
</C.Car>

    </C.Header>
    )
}