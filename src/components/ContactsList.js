import React from 'react';
import ContactDetails from './ContactDetails';

const ContactsList = ({contacts}) => {

  return (
    <div className="ui four stackable cards">
      {contacts.map((contact) => {
        return <ContactDetails key={contact.email} contact={contact}/>
      })}
    </div>
  )
}

export default ContactsList;