import { useState } from "react";

export default function Goku(props) {
  const [fotoGoku, setFotoGoku] = useState("");

  const handleOnClick0 = () => {
    setFotoGoku(
      "https://www.einerd.com.br/wp-content/uploads/2017/02/goku-890x466.jpg"
    );
    props.setFotoFinal = fotoGoku
  };

  const handleOnClick1 = () => {
    setFotoGoku(
      "https://s.aficionados.com.br/imagens/gokukaio-kenvsvegetanv_cke.jpg"
    );
    props.setFotoFinal = fotoGoku
  };

  const handleOnClick2 = () => {
    setFotoGoku(
      "https://s.aficionados.com.br/imagens/dragon-ball-z-super-saiyan-goku_cke.jpg"
    );
    props.setFotoFinal = fotoGoku
  };

  return (
    <div style={props.estilo}>
      <h1>Goku</h1>
      <h3>Formas</h3>
      <button onClick={handleOnClick0}>Forma 0</button>
      <button onClick={handleOnClick1}>Forma 1</button>
      <button onClick={handleOnClick2}>Forma 2</button>
    </div>
  );
}
