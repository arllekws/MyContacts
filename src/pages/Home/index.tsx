import ButtonNewContact from '../../components/ButtonNewContact';
import CounterContacts from '../../components/CounterContacts';
import Header from '../../components/Header';
import Input from '../../components/Input';
import styles from './Home.module.css';
import { useContacts } from '../../context/ContactsContext';

export default function Index() {
  const { contacts } = useContacts();

  return (
    <div>
      <Header />
      <Input />
      <div className={styles.buttonContainer}>
        <CounterContacts />
        <ButtonNewContact />
      </div>

      <div className={styles.contactsList}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            <h3>{contact.nome}</h3>
            <p>{contact.email}</p>
            <p>{contact.telefone}</p>
            <p>{contact.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
