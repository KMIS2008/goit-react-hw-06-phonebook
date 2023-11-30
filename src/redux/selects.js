export const getContacts=state=>state.contact.items;
export const getFilterValue = state => state.filter;

export const getVisibleContacts = state => {
    const contacts = getContacts(state); 
    const filter = getFilterValue(state); 

    if (!filter) {
        return contacts;
      }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


//   const visibleContact = contacts.filter(contact=>{
    //     const hasContact = contact.name.toLowerCase().includes(filter.toLowerCase());
    //     return hasContact;
    //   })