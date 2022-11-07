import React from 'react';
import { getStatusFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import {useFetchContactsQuery} from 'redux/Contact/ContactSlice';
import { nanoid } from 'nanoid';
import css from './filter.module.css';

export default function Filter() {
  const filter = useSelector(getStatusFilter);
const {data: getContact} = useFetchContactsQuery();
  const nameFilterId = nanoid();

  const changeFilter = e => {
    const event = e.currentTarget.value;
	getContact(event);
  };

  return (
    <>
      <label className={css.label} htmlFor={nameFilterId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        id={nameFilterId}
        onChange={changeFilter}
      />
    </>
  );
}
