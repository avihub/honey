import React from 'react';
import styles from './ContactDetails.module.scss';

const ContactDetails = ({contact: {name, profile_image, icon, job, company_name, phone, email}}) => {
  return (
    <div className={styles['contact-card']}>
      <div className={styles['images-block']}>
        <div className={styles['images-block-overflow']}>
          <img className={styles['profile-image']} alt={name} src={profile_image}/>
          <img className={styles['company-icon']} alt={`${company_name} icon`} src={icon}/>
        </div>
      </div>
      <div className={styles["content-block"]}>
        <div className={styles["main"]}>
          <div className={styles["header"]}>{name}</div>
          <div className={styles["company-name"]}>{job} | @{company_name}</div>
        </div>
        <div className={styles["extra-content"]}>
          <div>Phone Number {phone}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails;