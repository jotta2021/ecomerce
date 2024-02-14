import React from "react"
import Back from '../../assets/back.jpg'
import * as C from './styles.tsx'
import Header from "../../components/header/header.jsx";
import Slider from "../../components/slider/index.jsx";
export default function Home(){
    return(
        <C.Container>
            <Header/>
            <Slider/>
           
        </C.Container>
    )
}