import { useState } from "react"

function FormEvento() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  function Cadastrar(e) {
    e.preventDefault()
    console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
  }

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={Cadastrar}>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input 
            type='text'
            placeholder='digite seu nome'
            id='name'
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Senha:</label>
          <input 
            type='password' 
            placeholder='digite sua senha'
            id='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type='submit' value='cadastrar'/>
        </div>
      </form>
    </div>
  )
}

export default FormEvento
