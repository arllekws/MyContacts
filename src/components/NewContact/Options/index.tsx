import styles from './Option.module.css';

export default function Options() {
  return (
    <div className={styles.OptionsContainer}>
        <select className={styles.OptionsSelect}>
            <option value="Linkedin">Linkedin</option>
            <option value="GitHub">GitHub</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Telegram">Telegram</option>
            <option value="Email">Email</option>
            <option value="Website">Website</option>
            <option value="Other">Outro</option>
        </select>
    </div>
  )
}
