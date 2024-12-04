import React from "react";
import styled from "styled-components";
import { Contact } from "../redux/contactsSlice";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  color: white;

  &.edit {
    background-color: #27ae60;
    margin-right: 0.5rem;

    &:hover {
      background-color: #219150;
    }
  }

  &.delete {
    background-color: #e74c3c;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

interface Props {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: () => void;
}

const ContactItem: React.FC<Props> = ({ contact, onEdit, onDelete }) => (
  <Item>
    <div>
      <strong>{contact.name}</strong> - {contact.email} - {contact.phone}
    </div>
    <div>
      <Button className="edit" onClick={() => onEdit(contact)}>
        Editar
      </Button>
      <Button className="delete" onClick={onDelete}>
        Remover
      </Button>
    </div>
  </Item>
);

export default ContactItem;
