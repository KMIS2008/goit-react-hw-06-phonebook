import {Contact,
        ButtonDelete} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selects';
import { removeContact } from 'redux/contactSlice';

export const ContactsList = ()=>{
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
 console.log(contacts)

    
    return (
        <ul>
            {contacts.map((contact)=>{
                return (
                  <Contact key={contact.id}>{contact.name}:  {contact.number}

                  <ButtonDelete type='button' onClick = {()=>{dispatch(removeContact())}}>Delete</ButtonDelete>
                  </Contact>
                )
            })}
        </ul>
    )
}