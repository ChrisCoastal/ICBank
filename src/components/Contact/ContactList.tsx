import React from 'react';
import Contact from '@/components/Contact/Contact';
import useAppContext from '@/hooks/useAppContext';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const { state, dispatch } = useAppContext();
  const { contacts, selectedSplitContacts } = state;

  function handleSelect(name: string) {
    dispatch({ type: 'TOGGLE_SPLIT_CONTACT', payload: name });
  }

  return (
    <ul className="flex flex-col gap-2">
      {contacts.map((contact) => {
        return (
          <li key={nanoid()}>
            <Contact
              contact={contact}
              selected={selectedSplitContacts.includes(contact.name)}
              onSelect={handleSelect}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
