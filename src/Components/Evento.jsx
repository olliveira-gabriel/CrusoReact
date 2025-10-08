import React from 'react'
import FormEvento from './FormEvento'
import Button from './Button'

function Evento() {
  function PrimeiroEvento() {
      console.log('primeiro evento ativado')
  }
  function SegundoEvento(){
      console.log('Segundo evento ativado')

  }
  return (
    <div> <p>Clique para disparar um evento </p>
        <Button event={PrimeiroEvento} text='Primeiro Evento'/>
        <Button event={SegundoEvento} text='Segundo Evento'/>
        {/* <FormEvento/> */}
    </div>
  )
}

export default Evento