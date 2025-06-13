import styles from './BtnNewCtc.module.css';
import {Link} from 'react-router-dom';

export default function ButtonNewContact() {
  return (
    <div className={styles.BtnNewCtcContainer}>
        <Link to="/NewContact" className={styles.BtnNewCtcLink}>
          <button type="submit" className={styles.BtnNewCtc}>Novo Contato</button>
        </Link>
    </div>
  )
}
