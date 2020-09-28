import React from 'react'
import  {setRunnig} from './App'

const MostraTempo = (props) => {
    let tempo = props.tempo
    let minutos = parseInt(tempo / 60)
    let segundos = tempo % 60
    let minutosStr = minutos < 10 ? '0' + minutos : minutos  
    let segundosStr = segundos < 10 ? '0' + segundos : segundos


    return (
      <p className = 'tempo'>
      <span>{`${minutosStr}:${segundosStr}`}</span> <br/>
      
    </p>
    )
}

export default MostraTempo  