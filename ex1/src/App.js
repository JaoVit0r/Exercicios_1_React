import "./styles.css";
import { useState } from "react";
import NaoResponderam from "./alunos-que-nao-responderam"
import Responderam from "./alunos-que-responderam"

const alunosQueNaoResponderam = ["Pedro", "Ana", "Maria"];
const alunosQueResponderam = [];
export default function App() {
  const styleFlex = {
    width: "200px",
    height: "300px",
    border: "2px solid black"
  };

  const [alunoNRespondeu, setAlunoNRespondeu] = useState(alunosQueNaoResponderam);
  const [alunoRespondeu, setAlunoRespondeu] = useState(alunosQueResponderam);

  function sortear(min, max) {
    min = 0;
    max = alunoNRespondeu.length -1;
    const indexSorteado = Math.floor(Math.random() * (max - min + 1) + min);
    if(alunoNRespondeu.length !== 0) {
      setAlunoRespondeu([...alunoRespondeu, alunoNRespondeu.at(indexSorteado)])
      setAlunoNRespondeu(
      alunoNRespondeu.filter(
        (aluno,idx) => idx !== indexSorteado))
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Sorteador</h1>
        <p>App para auxiliar o professor a escolher quem vai responder</p>
        <button onClick={sortear}>Sortear</button>
        {
          alunoNRespondeu.length === 0 && <p style={{color:"red"}}>Não há mais números para sortear</p>
        }
        <br />
        <br />
      </div>
      <div className="flexMain">
        <div style={styleFlex}>
            <NaoResponderam alunosQueNaoResponderam={alunoNRespondeu}/>
        </div>
        <div style={styleFlex}>
          <Responderam alunosQueResponderam={alunoRespondeu}/>
        </div> 
      </div>  
    </div>
  );
}

