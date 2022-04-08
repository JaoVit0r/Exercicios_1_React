export default function naoResponderam( props ) {
    return (
      <ul>
        {props.alunosQueNaoResponderam.map((aluno) => (
          <li>{aluno}</li>
        ))}
      </ul>
    );
  }