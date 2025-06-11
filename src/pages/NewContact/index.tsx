import Header from '../../components/Header';
import InputNewContact from '../../components/NewContact/InputNewContact';
import BackButton from '../../components/NewContact/BackButton'
import styles from './NewContact.module.css'
import Options from '../../components/NewContact/Options';
import Cadastrar from '../../components/NewContact/Cadastrar';
import { useState } from 'react';

const NewContact = () =>{
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefone] = useState('');

  return (
    <>
      <div>
        <Header/>
      </div>
      <form>
        <BackButton/>
        <h2 className={styles.new}>Novo Contato</h2>
        <InputNewContact
        placeholder="Digite o nome"
        name="name"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <InputNewContact
        placeholder="Digite o email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <InputNewContact
        placeholder="Digite o telefone"
        name="phone"
        value={phone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <Options/>
      <Cadastrar/>
      
      </form>
    </>
  )
}

export default NewContact;
