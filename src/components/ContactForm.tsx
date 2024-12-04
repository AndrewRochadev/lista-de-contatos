import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact, Contact } from '../redux/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 400px;
  margin: 0 auto 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

interface Props {
  currentContact?: Contact;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentContact: React.Dispatch<React.SetStateAction<Contact | undefined>>;
}

const ContactForm: React.FC<Props> = ({ currentContact, setEditing, setCurrentContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [currentContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const contact: Contact = {
      id: currentContact?.id || Date.now(),
      name,
      email,
      phone,
    };

    if (currentContact) {
      dispatch(editContact(contact));
      setEditing(false);
      setCurrentContact(undefined); // Limpar após editar
    } else {
      dispatch(addContact(contact));
    }

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">
        {currentContact ? 'Editar Contato' : 'Adicionar Contato'}
      </Button>
    </Form>
  );
};

export default ContactForm;