import ButtonNewContact from '../../components/ButtonNewContact';
import CounterContacts from '../../components/CounterContacts';
import Header from '../../components/Header';
import Input from '../../components/Input';
import styles from './Home.module.css';
import { useContacts } from '../../context/ContactsContext';
import SetaNome from '../../components/SetaNome';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Index() {
  const { contacts, removeContact, updateContact } = useContacts();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (contacts.length === 0) {
      navigate('/SemContatos');
    }
  }, [contacts, navigate]);

  return (
    <div>
      <Header />
      <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      
      <div className={styles.buttonContainer}>
        <CounterContacts count={contacts.length} />
        <ButtonNewContact />
      </div>

      
      <div className={styles.setaNomeContainer}>
        <SetaNome />
      </div>
      <div>
        <div className={styles.contactsList}>
          {[...contacts]
          .filter(contact =>
            contact.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.telefone.includes(searchTerm)
          )
          .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }))
          .map((contact, index) => (
            <div key={index} className={styles.contactCard}>
              <div className={styles.contactLeft}>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactName}>{contact.nome}</h3>
                  <p className={styles.contactCategory}>{contact.categoria}</p>
                </div>
                <p className={styles.contactEmail}>{contact.email}</p>
                <p className={styles.contactTelefone}>{contact.telefone}</p>
              </div>
              <div className={styles.contactActions}>
                <button

                  className={styles.editButton}
                  onClick={() => updateContact(contact)}
                >
                  <FaEdit className={styles.editIcon} />
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => removeContact(contact)}
                >
                  <FaTrash className={styles.deleteIcon} />
                </button>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}
