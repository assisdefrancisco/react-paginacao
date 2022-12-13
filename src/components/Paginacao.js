import React from "react";
import '../App.css';

const Paginacao = ({paginas, paginaAtual, setPaginaAtual}) => {

    return (
        <div>
            {Array.from(Array(paginas), (item, index) => {
                return <button
                    style={index === paginaAtual ? { backgroundColor: 'gray'}: null}
                    className='paginacaoButton' 
                    value={index} 
                    onClick={(e) => setPaginaAtual(Number(e.target.value))}>
                        {index + 1}
                    </button>
            })}
        </div>
    )

}

export default Paginacao;