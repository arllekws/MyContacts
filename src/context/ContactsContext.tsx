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
  removeContact: (contact: Contact) => void; // Optional for now
  updateContact: (contact: Contact) => void; // Optional for now
}

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export function ContactsProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  function addContact(contact: Contact) {
    setContacts((prev) => [...prev, contact]);
  }
  function removeContact(contactToRemove: Contact) {
    setContacts((prev) =>
      prev.filter(
        (c) =>
          c.nome !== contactToRemove.nome ||
          c.email !== contactToRemove.email ||
          c.telefone !== contactToRemove.telefone
      )
    );
  }

  function updateContact(updatedContact: Contact) {
    setContacts((prev) =>
      prev.map((c) =>
        c.email === updatedContact.email ? updatedContact : c
      )
    );
  }

  return (
    <ContactsContext.Provider value={{ contacts, addContact, removeContact, updateContact }}>
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