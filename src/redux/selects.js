export const getContacts=state=>state.contact;
export const getFilterValue = state => state.filter.value;

export const getVisibleContacts = state => {
    const contacts = getContacts(state); // Получает список контактов
    const filter = getFilterValue(state); // Получает текущий фильтр
    const normalizedFilter = filter.toLowerCase(); // Преобразует фильтр в нижний регистр
  
    // Фильтрует контакты, чтобы возвращать только те, чьи имена содержат подстроку фильтра (в нижнем регистре)
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };