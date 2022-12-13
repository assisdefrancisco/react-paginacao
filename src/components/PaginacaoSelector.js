import React from "react";

const PaginacaoSelector = ({ itensPorPagina, setItensPorPagina }) => {

    return (
        <div><span>Itens Por Página: </span>
            <select value={itensPorPagina} onChange={(e) => setItensPorPagina(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
            </select>
        </div>
    )

}

export default PaginacaoSelector;