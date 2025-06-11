import ButtonNewContact from '../../components/ButtonNewContact';
import CounterContacts from '../../components/CounterContacts';
import Header from '../../components/Header';
import Input from '../../components/Input';
import styles from './Home.module.css';

export default function index() {
  return (
    <div>
        <Header/>
        <Input />
        <div className={styles.buttonContainer}>
          <CounterContacts />
          <ButtonNewContact />
        </div>
    </div>
  )
}
