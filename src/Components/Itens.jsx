import React from 'react'
import PropTypes from 'prop-types'

function Itens({marca, lancamento}) {
  return (
    <>
        <li>
            {marca} - {lancamento}
        </li>
    </>
  )
}

Itens.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}
Itens.defaultProps ={
  marca: 'faltou a marca',
  lancamento: 0
}
export default Itens