import styles from './Input.module.css';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange }: InputProps) {
  return (
    <div className={styles.InputContainer}>
      <input
        type="text"
        placeholder="Pesquisar contato..."
        className={styles.InputField}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
