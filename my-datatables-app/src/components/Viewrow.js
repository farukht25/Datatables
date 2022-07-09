import React from 'react'

export default function ({contact,deleteContact,editContact}) {

    

  return (
    
    <tr>
        
   
        <td>{contact.first_name}</td>
        <td>{contact.last_name}</td>
        <td>{contact.email}</td>
        <td>{contact.gender}</td>
        <td>{contact.ip_address}</td>
        <td>
            <div className='d-flex justify-content-around'>
                <button className="btn btn-info" onClick={(event)=>editContact(event,contact)}>Edit</button>
                <button className="btn btn-danger" onClick={(event)=>deleteContact(event,contact)}>delete</button>
            </div>
        </td>
      </tr>
  )
}
