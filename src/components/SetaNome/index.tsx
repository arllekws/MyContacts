import setanome from '../../assets/seta-nome.svg';
import styles from './SetaNome.module.css';


export default function SetaNome() {
  return (
    <div className={styles.setaNome}>
      <h2>Nome</h2>
      <img src={setanome} alt="Seta para Nome" />
    </div>
  )
}
