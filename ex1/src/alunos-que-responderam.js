export default function Responderam( props ) {
    return (
      <ul>
        {props.alunosQueResponderam.map((aluno) => (
          <li>{aluno}</li>
        ))}
      </ul>
    );
  }