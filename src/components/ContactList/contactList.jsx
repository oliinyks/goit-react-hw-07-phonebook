import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/Contact/ContactSlice';
import { getStatusFilter } from 'redux/selectors';
import { ContactOperations } from 'redux/Contact';

import Notiflix from 'notiflix';
import css from './contactList.module.css';

export default function ContactList() {
  const filter = useSelector(getStatusFilter);

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactOperations.fetchContacts());
  }, [dispatch]);

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = contactId => {
    deleteContact(contactId);
    Notiflix.Notify.success('You have just deleted a contact');
  };

  return (
    <>
      {isFetching && <p>Loading...</p>}
      <ul className={css.items}>
        {contactsList().map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.button}
              type="button"
              onClick={() => deleteContacts(id)}
            >
             {isDeleting ? 'Deleting...' : 'Delete'} 
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
