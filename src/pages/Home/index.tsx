import ButtonNewContact from '../../components/ButtonNewContact';
import CounterContacts from '../../components/CounterContacts';
import Header from '../../components/Header';
import Input from '../../components/Input';
import styles from './Home.module.css';
import { useContacts } from '../../context/ContactsContext';
import SetaNome from '../../components/SetaNome';

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

      

      <SetaNome />

      <div className={styles.contactsList}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactName}>{contact.nome}</h3>
              <p className={styles.contactCategory}>{contact.categoria}</p>
            </div>
            <p className={styles.contactEmail}>{contact.email}</p>
            <p className={styles.contactTelefone}>{contact.telefone}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
