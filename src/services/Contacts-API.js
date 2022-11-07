import axios from 'axios';

axios.defaults.baseURL = 'https://6363c1b38a3337d9a2e6d982.mockapi.io/contacts';

export async function fetchContacts(){
	const { data } = await axios.get(`/contacts`);
	return data;
}

export async function fetchContactsById(contactId){
	const { data } = await axios.get(`/contacts/${contactId}`);
	return data;
}