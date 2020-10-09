import React, { useReducer } from "react";
import axios from 'axios';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  SET_CURRENT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
  FILTER_CONTACTS,
  CONTACT_ERROR,
  GET_CONTACTS,
} from "../types";
import contactContext from "./ContactContext";
import contactReducer from "./ContactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response })
    }
  };

  //Add contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
    }
  };

  //Delete contact
  const deleteContact = async (id) => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`);
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      })
    }
  };

  //update contact
  const updateContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
    }
  };

  //set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //filter contacts
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //clear contact
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
        getContacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
