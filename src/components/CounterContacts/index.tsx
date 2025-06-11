import styles from './CounterContacts.module.css';

export default function CounterContacts() {
  return (
    <div className={styles.CounterContactsContainer}>
      <span className={styles.CounterContactsNumber}>0</span>
      <h2 className={styles.CounterContactsLabel}>contatos</h2>
    </div>
  )
}
