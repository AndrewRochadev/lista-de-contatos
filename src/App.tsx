import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/GlobalStyle';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact } from './redux/contactsSlice';

const App: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | undefined>(undefined);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <h1>Lista de Contatos</h1>
      <ContactForm
        currentContact={currentContact}
        setEditing={setEditing}
        setCurrentContact={setCurrentContact}
      />
      <ContactList
        setEditing={setEditing}
        setCurrentContact={setCurrentContact}
      />
    </Provider>
  );
};

export default App;
