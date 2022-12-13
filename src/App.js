import './App.css';
import { useEffect, useState } from 'react';
import Paginacao from './components/Paginacao';
import PaginacaoSelector from './components/PaginacaoSelector';

function App() {

  const [itens, setItens] = useState([]);
  const [itensPorPagina, setItensPorPagina] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const paginas = Math.ceil(itens.length / itensPorPagina);
  const inicioIndice = paginaAtual * itensPorPagina;
  const fimIndice = inicioIndice + itensPorPagina;

  const itensFiltrados = itens.slice(inicioIndice, fimIndice);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
      setItens(result)
    }
    fetchData();
  }, [])

  useEffect(() => {
    setPaginaAtual(0);
  }, [itensPorPagina])


  return (
    <div className="App">
      <PaginacaoSelector itensPorPagina={itensPorPagina} setItensPorPagina={setItensPorPagina} />
          
      {itensFiltrados.map(item => {
        return <div className='item' key={item.id}><span>{item.id}</span> <span>{item.title}</span> <span>{item.completed}</span></div>
      })}

      <Paginacao paginas={paginas} paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
    </div>
  );
}

export default App;
