import styles from './INC.module.css';

interface InputProps {
  placeholder: string;   // Texto que aparece dentro
  name: string;          // Nome do campo (ex: "email")
  value: string;         // Valor atual (ligado ao estado)
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função para atualizar o estado
  type?: string;         // Tipo do input (texto, email, etc), opcional
}

export default function InputNewContact({ placeholder, name, value, onChange, type = "text" }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.inputNewContact}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    
    </div>
    
  );
}
