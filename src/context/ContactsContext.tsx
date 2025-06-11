import { createContext, useState, type ReactNode, useContext } from 'react'; 

interface Contact {
  nome: string;
  email: string;
  telefone: string;
  categoria: string;
}

interface ContactsContextType {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
}

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export function ContactsProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  function addContact(contact: Contact) {
    setContacts((prev) => [...prev, contact]);
  }

  return (
    <ContactsContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
}