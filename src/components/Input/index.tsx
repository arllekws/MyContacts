import styles from './Input.module.css';

export default function Input() {
  return (
    <div className={styles.InputContainer}>
        <input type="text" placeholder="Pesquisar contato..." className={styles.InputField}/>
    </div>
  )
}
