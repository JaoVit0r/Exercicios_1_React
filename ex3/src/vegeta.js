import { useState } from "react";

export default function Vegeta(props) {
  const [fotoVegeta, setFotoVegeta] = useState("");

  const handleOnClick0 = () => {
    setFotoVegeta(
      "https://criticalhits.com.br/wp-content/uploads/2020/05/vegeta-base.jpg"
    );
    props.setFoto = fotoVegeta;
  };

  const handleOnClick1 = () => {
    setFotoVegeta(
      "https://i1.sndcdn.com/artworks-y1WcOJwtzfhThB5i-kDG3rg-t500x500.jpg"
    );
    props.setFoto = fotoVegeta;
  };

  const handleOnClick2 = () => {
    setFotoVegeta(
      "https://i.pinimg.com/originals/33/37/b0/3337b04a4873c6e2c49b3a1dd97fea93.jpg"
    );
    props.setFoto = fotoVegeta;
  };

  return (
    <div style={props.estilo}>
      <h1>Vegeta</h1>
      <h3>Formas</h3>
      <button onClick={handleOnClick0}>Forma 0</button>
      <button onClick={handleOnClick1}>Forma 1</button>
      <button onClick={handleOnClick2}>Forma 2</button>
    </div>
  );
}
