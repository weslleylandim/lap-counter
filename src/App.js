import React, { useState, useEffect } from 'react'
import './style.css'
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'

function App() {

  const [numVoltas, setNumVolta] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  
  const increment = () => {
    setNumVolta(numVoltas+1)
  }

  const decrement = () => {
    if (numVoltas > 0) {
      setNumVolta(numVoltas-1)
    }
  }

  useEffect (() => {
    let timer = null

    if(running) {
      timer = setInterval(() => {
      (setTempo(old => old +  1))
      }, 100)
    } 

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }

  }, [running])

  const toggleRunnig = () => {
    setRunning(!running)
  }

  const reset = () => {
    setNumVolta(0)
    setTempo(0)
    setRunning(false)
  
  }


  return (
    <div className = 'App'>
      
    <MostraVoltas voltas = {numVoltas}/>

    {/*Esse Button não é mais button, então o onClick não tem mais a mesma função, basicamente ele se tornou um props */}
    <Button className = 'bigger' text = '+' onClick = {increment}/> 
    <Button className = 'bigger' text = '-' onClick = {decrement}/>
    
    
      
    <MostraTempo tempo = {running ? tempo : (numVoltas === 0 ? tempo : (parseInt(tempo/numVoltas)))}/>
          
    <p>{(running ? 'Tempo percorrido' : (tempo === 0 && numVoltas === 0 ? 'Pronto para iniciar':'Tempo médio percorrido'))}</p>

    <Button onClick = {toggleRunnig } text = { running ? 'Pausar' : 'Iniciar'}/>  
    <Button onClick = {reset} text = 'Reiniciar'/> <br/>

    <a href = 'https://api.whatsapp.com/send?phone=5541996111543&text=Quer%20falar%20comigo%3F%20N%C3%A3o%20se%20acanhe!'>
      contact me
    </a><span>💬</span>    

    </div>
  )
}

export default App
