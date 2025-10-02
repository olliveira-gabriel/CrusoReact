import React from 'react'
import FormEvento from './FormEvento'
function Meuevento() {
    console.log('fui ativado')
}

function Evento() {
  return (
    <div> <p>Clique para disparar um evento </p>
        <button onClick={Meuevento}>Ativar</button>
        <FormEvento/>
    </div>
  )
}

export default Evento