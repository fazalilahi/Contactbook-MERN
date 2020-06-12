import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  FILTER_CONTACTS,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  UPDATE_CONTACT,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Arjun',
        email: 'arjunuv@gmail.com',
        phone: 111 - 111 - 1111,
        type: 'professional',
      },
      {
        id: 2,
        name: 'Jeevan',
        email: 'jeevan@gmail.com',
        phone: 222 - 111 - 1111,
        type: 'personal',
      },
      {
        id: 3,
        name: 'Jasir',
        email: 'jasir@gmail.com',
        phone: 111 - 333 - 1111,
        type: 'professional',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact

  //Delete contact

  //Update contact

  //Set current contact

  //Clear current contact

  //Filter contacts

  //Clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
