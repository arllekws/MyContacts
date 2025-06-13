import styles from './NewContact.module.css';
import { useState } from 'react';
import { useContacts } from '../../context/ContactsContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import BackButton from '../../components/NewContact/BackButton';

const NewContact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [categoria, setCategoria] = useState('');
  const { addContact } = useContacts();
  const navigate = useNavigate();

   const isFormValid =
  nome.trim() !== '' &&
  email.trim() !== '' &&
  telefone.length === 15 &&
  categoria !== '' &&
  categoria !== 'idk';


  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  if (!isFormValid) return;

  addContact({ nome, email, telefone, categoria });
  navigate('/');
}


  function formatarTelefone(valor: string) {
  const numeros = valor.replace(/\D/g, '');

  if (numeros.length <= 10) {
    return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else {
    return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }
}

  return (
    <>
    <Header />
    <BackButton />
    <h1 className={styles.title}>Novo Contato</h1>
    
    <form onSubmit={handleSubmit} className={styles.form}>
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className={styles.inputNewContact} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={styles.inputNewContact} />
      <input value={telefone} onChange={(e) => setTelefone(formatarTelefone(e.target.value))} placeholder="Telefone" className={styles.inputNewContact} />

      <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className={styles.OPTIONNewContact}>
      <option value="idk" disabled>Selecione uma categoria</option>
        <option value="WhatsApp">WhatsApp</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Twitter">Twitter</option>
        <option value="Email">Email</option>
        <option value="Telefone">Telefone</option>
        <option value="Outras">Outras</option>
        
      </select>

      <button type="submit" className={isFormValid ? styles.buttonActive : styles.buttonInactive} disabled={!isFormValid}>Cadastrar</button>
    </form></>
  );
};

export default NewContact;
