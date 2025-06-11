import styles from './styles.module.css';
import logoVoltar from '../../../assets/ButtonBack.svg';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link to="/" className={styles.BackButton}>
      <img src={logoVoltar} alt="Voltar" />
      <span className={styles.BackButtonText}>Voltar</span>
    </Link>
  );
}
