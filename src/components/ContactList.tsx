import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeContact, Contact } from "../redux/contactsSlice";
import styled from "styled-components";
import ContactItem from "./ContactItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

interface Props {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentContact: React.Dispatch<React.SetStateAction<Contact | undefined>>;
}

const ContactList: React.FC<Props> = ({ setEditing, setCurrentContact }) => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const handleEdit = (contact: Contact) => {
    setEditing(true);
    setCurrentContact(contact);
  };

  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onEdit={handleEdit}
          onDelete={() => dispatch(removeContact(contact.id))}
        />
      ))}
    </List>
  );
};

export default ContactList;
