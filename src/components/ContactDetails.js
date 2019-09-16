import React from 'react';

const ContactDetails = ({contact: {name}}) => {
  return (
    <div>{name}</div>
  )
}

export default ContactDetails;