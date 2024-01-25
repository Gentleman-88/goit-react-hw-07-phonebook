import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { selectContacts, selectFilter } from '../../Redux/selectors';
import { deleteContact } from 'services/api';

const ContactList = () => {

    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    const contacts = useSelector(selectContacts)


    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId))
    };


    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );


    return (
        <ul className={css.contactList}>
            {filteredContacts.map(contact => (
                <li key={contact.id}
                    className={css.contactListItem}>
                    {contact.name}: {contact.number}
                    <button
                        className={css.deleteButton}
                        onClick={() => handleDeleteContact(contact.id)}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
}

export { ContactList };