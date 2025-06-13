import styles from './CounterContacts.module.css';

type CounterContactsProps = {
  count: number;
};

export default function CounterContacts({ count }: CounterContactsProps) {
  return (
    <div className={styles.CounterContactsContainer}>
      <span className={styles.CounterContactsNumber}>{count}</span>
      <h2 className={styles.CounterContactsLabel}>contatos</h2>
    </div>
  )
}
