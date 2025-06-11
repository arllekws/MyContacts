import logo from '../../assets/header.svg'; 
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.Header}>
      <img src={logo} alt="logo" />
    </div>
  )
}
