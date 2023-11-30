import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactBook = {
    items:[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]}

  const contactSlice = createSlice({
    name:'contact',
    initialState: contactBook,
   
    reducers: {
        addContact: {
            reducer(state, action){
                state.items.push(action.payload);
                },
            prepare(newContact) {
               return {
                 payload: { id: nanoid(), ...newContact },
               };      
            },
        },  

        removeContact: (state, action)=>{
            state.items = state.items.filter(item => item.id !== action.payload);
        } 
    }
}
  )


  export const { addContact, removeContact} = contactSlice.actions;

  const contactReduser = contactSlice.reducer;

  const persistConfig = {
    key: 'contact',
    storage,
  }

  export const prestirReduserContact = persistReducer (persistConfig, contactReduser );

  