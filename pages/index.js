import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <>
      <div>{contador}</div>
      <button type="button" onClick={() => adicionarContador()}>Adicionar</button>
    </>
  )

}

function Home() {
  return (
    <>
      <div>
        Home
      </div>
      <Contador />
    </>
  )
}


export default Home;