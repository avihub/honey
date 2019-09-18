import React from 'react';
// import css from './ContactDetails.css';
import './ContactDetails.css';

const ContactDetails = ({contact: {name, profile_image, icon, job, company_name, phone, email}}) => {
  return (
    <div className="ui card">
      <div className='images-block'>
          <img className='profile-image' alt={name} src={profile_image}/>
          <img className='company-icon' alt={`${company_name} icon`} src={icon}/>
      </div>
      <div className="content">
        <div className="main">
          <div className="header">{name}</div>
          <div className="">
            <span className="">{job} | @{company_name}</span>
          </div>
        </div>
        <div className="extra-card-data">
          <div>Phone Number {phone}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  )
  /*return (
    <div className="ui card">
      <div className='images'>
        <div className="image">
          <img alt={name} src={profile_image}/>
        </div>
        <div className="company-icon">
          <img alt={`${company_name} icon`} src={icon}/>
        </div>
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="">
          <span className="">{job} | @{company_name}</span>
        </div>
        <div className="extra-card-data">
          Phone Number {phone}
        </div>
        <div className="extra-card-data">
          {email}
        </div>
      </div>
      {/!*<div className="extra content">*!/}
        {/!*<div>*!/}
          {/!*<i className="user icon"></i>*!/}
          {/!*22 Friends*!/}
        {/!*</div>*!/}
      {/!*</div>*!/}
    </div>
  )*/
}

export default ContactDetails;