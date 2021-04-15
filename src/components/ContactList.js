import React from 'react';
import ContactListItem from "./ContactListItem";

const ContactList = ({search, contacts, onDelete}) => {
    const filteredSearch = contacts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className=' shadow overflow-y-scroll h-96 '>
            {
                filteredSearch.map(user => <ContactListItem user={user} onDelete={onDelete} key={user.id}/>)
            }
        </div>
    );

};
export default ContactList;