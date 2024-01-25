import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactReducer";

export const store = configureStore({
    contacts: contactsReducer
})