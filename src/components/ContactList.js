import React from 'react';
import ContactListItem from "./ContactListItem";

const ContactList = ({search, contacts, onDelete, updateUser}) => {
    const filteredSearch = contacts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className=' shadow overflow-y-scroll h-96 '>
            {contacts.length === 0 && <h2 className='p-4'>Список контактов пуст </h2>}

            {
                filteredSearch.map(user => <ContactListItem user={user} updateUser={updateUser} onDelete={onDelete} key={user.id}/>)
            }
        </div>
    );

};
export default ContactList;
