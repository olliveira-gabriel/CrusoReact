import React from 'react'
import Itens from './Itens'

function Lista({marca, lancamento}) {
  return (
    <>
        <h1>Minha Lista</h1>
        <ul>
            <Itens marca='Ferrari' lancamento={1980}/>
            <Itens marca='Ferrari' lancamento={1980}/>
            <Itens marca={1980} lancamento={1980}/>
            <Itens />
        </ul>
    </>
  )
}

export default Lista