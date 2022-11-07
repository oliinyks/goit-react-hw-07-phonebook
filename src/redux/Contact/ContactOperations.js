// import * as contactsAPI from '../../services/Contacts-API';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectedWithValue }) => {
//     try {
//       const response = await contactsAPI.fetchContacts();
//       return response;
//     } catch (error) {
//       return rejectedWithValue(error);
//     }
//   }
// );

// export const fetchContactsById = createAsyncThunk(
//   'contacts/fetchContactsById',
//   async (contactId, { rejectedWithValue }) => {
//     try {
//       const response = await contactsAPI.fetchContactsById(contactId);
//       return response;
//     } catch (error) {
//       return rejectedWithValue(error);
//     }
//   }
// );
