import "./styles.css";
import { useState } from "react"

export default function App() {
  const [nomePersonagem,setNomePersonagem] = useState("")
  const handleOnChange = (e => {
    setNomePersonagem(e.target.value)
  })
  

  const estiloImagem = {
    width: "500px",
    height: "300px"
  }

  return (
    <div className="App">
      <input 
      placeholder="nome do personagem"
      value= {nomePersonagem}
      onChange={handleOnChange}
      />
      {
        nomePersonagem==="goku" && <img style={estiloImagem} src={"https://www.einerd.com.br/wp-content/uploads/2017/02/goku-890x466.jpg"} />
      }
      {
        nomePersonagem==="vegeta" && <img style={estiloImagem} src={"https://criticalhits.com.br/wp-content/uploads/2020/05/vegeta-base.jpg"} />
      }
      {
        (nomePersonagem !== "goku" && nomePersonagem !== "vegeta") && <h1>personagem aqui</h1>
      }
    </div>
  );
}

