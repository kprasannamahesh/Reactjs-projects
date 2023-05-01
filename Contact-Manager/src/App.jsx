import { useState,useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import AddContactPage from './components/AddContactPage';
import ContactList from './components/ContactList'
const App=() =>{
  const LOCAL_STORAGE_KEY = 'Contacts_Details';
  const [contactDetails,setContactDetails] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  
  const addContactDetails = (contact) =>{
    console.log(contact);
    setContactDetails([...contactDetails,{ id: uuid(), ...contact}]);
  }

  const removeContactDetails = (id) =>{
    const newContactDetails = contactDetails.filter((x) =>{
      return x.id !==id;
    });
    setContactDetails(newContactDetails);
  }

  useEffect (()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contactDetails));
  },[contactDetails]);

  return (
    <>
    <AddContactPage addContactHandler={addContactDetails}/>
    <ContactList contacts={contactDetails} getContactId={removeContactDetails}/>
    </>
  );
}

export default App
