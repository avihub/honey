import React from 'react';
import ContactDetails from './ContactDetails';
import styles from './ContactsList.module.scss';

const ContactsList = ({contacts}) => {

  return (
    <div className={styles.cards}>
      {contacts.map((contact) => {
        return <ContactDetails key={contact.email} contact={contact}/>
      })}
    </div>
  )
}

export default ContactsList;