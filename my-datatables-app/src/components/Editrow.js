import React from 'react'

export default function Editrow({editFormData,cancelEditConstact,handleEditFormChange}) {
  return (
    <tr className="table-active">
        
   
        <td><input required type="text" name="first_name" value={editFormData.first_name}  
         onChange={(event)=>handleEditFormChange(event)}/></td>
        <td><input required type="text" name="last_name" value={editFormData.last_name}  onChange={(event)=>handleEditFormChange(event)}/></td>
        <td><input required type="email" name="email" value={editFormData.email}  onChange={(event)=>handleEditFormChange(event)}/></td>
        <td><input required type="text" name="gender" value={editFormData.gender}  onChange={(event)=>handleEditFormChange(event)}/></td>
        <td><input required type="text" name="ip_address" value={editFormData.ip_address} onChange={(event)=>handleEditFormChange(event)}/></td>
        <td>
            <div className='d-flex justify-content-around'>
                <button className="btn btn-info" type='submit'>Submit</button>
                <button className="btn btn-danger" onClick={(event)=>cancelEditConstact(event)}>Cancel</button>
            </div>
        </td>
        
      </tr>
  )
}
