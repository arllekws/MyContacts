import ButtonNewContact from "../../components/ButtonNewContact";
import Header from "../../components/Header";
import caixa from "../../assets/empty-box.svg";
import styles from "./SemContatos.module.css";

export default function index() {
  return (
    <div>
        <Header />
        <div className={styles.buttonContainer}>
            <ButtonNewContact  />
        </div>
        <div className={styles.semContatosContainer}>
        <img src={caixa} alt="Caixa vazia" />
        <p>Você ainda não tem nenhum contato cadastrado!
            <br />
             Clique no botão 
            <span> ”Novo contato” </span>
             à cima para 
             <br />
             cadastrar o seu primeiro!</p>
        </div>
    </div>
  )
}
