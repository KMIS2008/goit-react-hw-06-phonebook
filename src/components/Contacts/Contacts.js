import {Contact,
        ButtonDelete} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selects';
import { removeContact } from 'redux/contactSlice';

export const ContactsList = ()=>{
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const removeButton = (contactId)=>dispatch(removeContact(contactId));
//  console.log(contacts)
    
    return (
        <ul>
            {contacts.map((contact)=>{
                return (
                  <Contact key={contact.id}>{contact.name}:  {contact.number}

                  <ButtonDelete type='button' onClick = {()=>removeButton(contact.id)}>Delete</ButtonDelete>
                  </Contact>
                )
            })}
        </ul>
    )
}