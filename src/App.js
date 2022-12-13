import './App.css';
import { useEffect, useState } from 'react';

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
      <div>
        <select value={itensPorPagina} onChange={(e) => setItensPorPagina(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>

      <div>
        {Array.from(Array(paginas), (item, index) => {
          return <button value={index} onClick={(e) => setPaginaAtual(Number(e.target.value))}>{index + 1}</button>
        })}
      </div>
      {itensFiltrados.map(item => {
        return <div className='item'><span>{item.id}</span> <span>{item.title}</span> <span>{item.completed}</span></div>
      })}
    </div>
  );
}

export default App;
