import { useState } from "react";
import "./PaletaLista.css";
import { paletas } from "mocks/paletas";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";

console.log("paletas", paletas);

function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  // Adicionar item
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  // Remover item
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={index => adicionarItem(index)}
          onRemove={index => removerItem(index)}
        />
      ))}
    </div>
  );
}

export default PaletaLista;
