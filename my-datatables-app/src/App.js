import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import mockData from './MOCK_DATA.json'
import Datatable from './components/Viewrow';
import Viewrow from './components/Viewrow';
import Editrow from './components/Editrow';
// let importedData = require('./MOCK_DATA.json');


function App() {



  const [contacts, setContacts] = useState(mockData)
  const [formData, setformData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: ""
  })
  const [editRow, setEditRow] = useState(-1);
  const [editFormData, setEditFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: ""
  })

  const deleteContact = (event, contact) => {
    event.preventDefault()
    const newConstacts = contacts.filter(({ id }) => id !== contact.id)
    setContacts(newConstacts);
  }

  const handleFormChange = (event) => {
    event.preventDefault()
    const attr = event.target.getAttribute('name')
    const val = event.target.value
    const newFormData = { ...formData }
    newFormData[attr] = val
    setformData(newFormData)
  }

  const handleEditFormChange = (event, contact) => {
    event.preventDefault();
    const attr = event.target.getAttribute('name')
    const val = event.target.value
    const newEditFormData = { ...editFormData }
    newEditFormData[attr] = val
    setEditFormData(newEditFormData)


  }

  const addContact = (event) => {
    event.preventDefault()
    formData.id = nanoid()
    setContacts([...contacts, formData])
    setformData({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: ""
    })
    event.target.reset();
  }
  const editContact = (event, contact) => {
    event.preventDefault()
    setEditRow(contact.id)
    const prePopulateData = {
      id: contact.id,
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      gender: contact.gender,
      ip_address: contact.ip_address
    }
    setEditFormData(prePopulateData)
  }

  const cancelEditConstact = (event) => {
    event.preventDefault()
    setEditRow(-1);
  }

  const submitEditFormData = (event) => {
    event.preventDefault();
    const allContacts=[...contacts]
    const index=allContacts.findIndex(contact=>contact.id===editRow)
    console.log("idex"+index+"edit row"+editRow)
     allContacts[index]={
      id: editFormData.id,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      email: editFormData.email,
      gender: editFormData.gender,
      ip_address: editFormData.ip_address
     }
     allContacts.forEach(c=>console.log(c))
     setContacts(allContacts)
     setEditRow(-1)

  }




  return (
    <div className="App">
      <>
        <form onSubmit={(event) => submitEditFormData(event)}>
          <table className="table table-dark">
            <thead>
              <tr>

                <th scope="col">first_name</th>
                <th scope="col">last_name</th>
                <th scope="col">email</th>
                <th scope="col">gender</th>
                <th scope="col">ip_address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => {
                return (
                  <>
                    {editRow === contact.id ? <Editrow key={contact.id} cancelEditConstact={cancelEditConstact}
                      handleEditFormChange={handleEditFormChange} editFormData={editFormData} /> :
                      <Viewrow key={contact.id} contact={contact} deleteContact={deleteContact} editContact={editContact} />}


                  </>
                )
              })}
            </tbody>
          </table>
        </form>
        {/*  */}
        <form onSubmit={(event) => addContact(event)}>
          <div className=" container">
            <div className="row ">
              <div className="col-md-4">
                <input required type="text" className="form-control" placeholder="first_name" name="first_name" onChange={(event) => handleFormChange(event)} />
              </div>
              <div className="col-md-4">
                <input required type="text" className="form-control" placeholder="last_name" name="last_name" onChange={(event) => handleFormChange(event)} />
              </div>
              <div className="col-md-4">
                <input required type="text" className="form-control" placeholder="email" name="email" onChange={(event) => handleFormChange(event)} />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-4">
                <input required type="text" className="form-control" placeholder="gender" name="gender" onChange={(event) => handleFormChange(event)} />
              </div>
              <div className="col-md-4">
                <input required type="text" className="form-control" placeholder="ip_address" name="ip_address" onChange={(event) => handleFormChange(event)} />
              </div>
              <div className="col-md-4">
                <button required className="btn btn-success" >Add</button>
              </div>
            </div>



          </div>
        </form>
      </>
    </div>
  );
}

export default App;
