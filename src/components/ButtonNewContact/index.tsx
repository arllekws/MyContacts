import styles from './BtnNewCtc.module.css';
import {Link} from 'react-router-dom';

export default function ButtonNewContact() {
  return (
    <div>
        <Link to="/NewContact">
          <button type="submit" className={styles.BtnNewCtc}>Novo Contato</button>
        </Link>
    </div>
  )
}
