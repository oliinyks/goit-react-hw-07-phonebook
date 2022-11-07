import { useFetchContactsQuery } from 'redux/Contact/ContactSlice';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './App.module.css';

export default function App() {
   const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <section className={css.phonebook}>
      <h1 className={css.title}>Your amazing phonebook</h1>
      <Form />
      <h2 className={css.subtitle}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
		   {isFetching && <p>Loading...</p>}
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.text}>You have no contacts</p>
      )}
    </section>
  );
}
