import React from 'react';
import ContactsList from './ContactsList';

function App() {
  return (
    <div className='ui container'>
      <ContactsList contacts={splashData}/>
    </div>
  );
}

export default App;

const splashData = [{
  "name": "Luke Peterson",
  "job": "Photographer \u0026 Videographer",
  "company_name": "Clear Shoot Photography",
  "phone": "123.456.7890",
  "email": "photo@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Sophia Garcia",
  "job": "Hair Stylist, Makeup Artist",
  "company_name": "Belle By Sophia",
  "phone": "123.456.7890",
  "email": "hair@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Shira Mendez",
  "job": "Event Planner",
  "company_name": "Shira Mendez Design",
  "phone": "123.456.7890",
  "email": "plannerqa@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Stephanie Parker",
  "job": "Wedding Planner",
  "company_name": "Amor Events",
  "phone": "415 409 9876",
  "email": "planner@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "HoneyBook",
  "job": "",
  "company_name": "HoneyBook",
  "phone": "123.456.7890",
  "email": "shadiah@honeybook.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Claire Fairbank",
  "job": "Florist",
  "company_name": "The Flower Unique Designs",
  "phone": "123.456.7890",
  "email": "florist@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Blake Solomon",
  "job": "Graphic Designer",
  "company_name": "Paperie By Blake",
  "phone": "123.456.7890",
  "email": "paperie@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Stephanie Parker",
  "job": "Event Planner",
  "company_name": "Amor Events",
  "phone": "123.456.7890",
  "email": "test@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Jennifer Bowie",
  "job": "Florist",
  "company_name": "Jennifer Bowie Flowers",
  "phone": "123.456.7890",
  "email": "floristqa@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "John Kramer",
  "job": "Event Planner",
  "company_name": "John Kramer Events Inc. ",
  "phone": "123.456.7890",
  "email": "demo@honeybook.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Alexis Jenkins",
  "job": "Event Planner",
  "company_name": "Account Building",
  "phone": "",
  "email": "accountbuilding@honeybook.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Leslie",
  "job": "Event Planner",
  "company_name": "Planning ABC ",
  "phone": "925 818 1267",
  "email": "plannerleslie@email.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "yona levine",
  "job": "Rentals Manager",
  "company_name": "yona's company",
  "phone": "",
  "email": "asdf@vendor.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "dff",
  "job": "Event Planner",
  "company_name": "dfdfdf",
  "phone": "",
  "email": "shaybloch@dsd.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Leslie Wong",
  "job": "Event Planner",
  "company_name": "Leslie Planning 123 ",
  "phone": "",
  "email": "leslie@planner123.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}, {
  "name": "Naama Alon",
  "job": "Event Planner",
  "company_name": "Naama Alon - Event Planner",
  "phone": "123.456.789",
  "email": "naama76@gmail.com",
  "profile_image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "icon": "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}]