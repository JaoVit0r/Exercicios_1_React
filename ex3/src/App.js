import "./styles.css";
import Vegeta from "./vegeta";
import Goku from "./goku";
import Img from "./img";
import { useState } from "react";

export default function App() {
  const [fotoFinal, setFotoFinal] = useState("");

  const estiloDiv = {
    border: "2px solid black",
    width: "400px",
    margin: "20px"
  };
  const tamanhoFoto = {
    width: "500px",
    height: "300px",
    border: "none"
  };
  return (
    <div className="App">
      <Goku
        estilo={estiloDiv}
        tamanhoFoto={tamanhoFoto}
        setFoto={setFotoFinal}
      />
      <Vegeta
        estilo={estiloDiv}
        tamanhoFoto={tamanhoFoto}
        setFoto={setFotoFinal}
      />
      <Img tamanhoFoto={tamanhoFoto} fotoFinal={fotoFinal} />
    </div>
  );
}
