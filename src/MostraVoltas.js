import React from 'react'

const MostraVoltas = (props) => { /*Toda vez que escrevo com incial maiuscula, o vs code ja sabe que se trata de um componente, do contrario ele sabe que é um elemento */
    return (
      <p className = 'voltas'>
        <span >{props.voltas}</span><br/>
        Voltas
      </p>
    )
  }

  export default MostraVoltas