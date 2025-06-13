import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-container">
        <h1>Ocorreu um erro ao obter os seus contatos</h1>
        <button><Link to="/">Tente novamente</Link></button>
    </div>
  )
}
