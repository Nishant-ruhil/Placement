import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
import './Form.css';
import { Button ,Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Header } from '../common/Header';

export const Form1 = () => {
    let [formData,setFormData] = useState(
        {
            uName:'',
            uEmail:'',
            uPhone: '',
            uMessage: '',
            index : ''      
        }
        )
        let changeValue = (e)=>{
            let oldData = {...formData};
            let inputName = e.target.name;
            let inputValue = e.target.value;
            oldData[inputName] = inputValue;
            setFormData(oldData);
        }


        
    let [userData,setUserData] = useState([])

    function handleData(e){
        let currentUserData = {
            uName: formData.uName,
            uEmail:formData.uEmail,
            uPhone: formData.uPhone,
            uMessage: formData.uMessage
        }

        if(formData.index === ""){
          let checkFilter = userData.filter((v)=>v.uEmail == formData.uEmail || v.uPhone == formData.uPhone)
  
          if(checkFilter.length === 1){
              toast.error("Email or phone number is already exists")
          }else{
              let oldUserData = [...userData,currentUserData];
              setUserData(oldUserData);
              setFormData({
                  uName:'',
                  uEmail:'',
                  uPhone: '',
                  uMessage: '',
                  index : ''      
              })
              toast.success('Data added Succesfully')
          }
         }
         else{
          let editIndex = formData.index;
          let oldData = userData;
          let checkFilter = userData.filter((v,i)=>(v.uEmail == formData.uEmail || v.uPhone == formData.uPhone) && i != editIndex);
          if(checkFilter.length == 0){
            oldData[editIndex]['uName'] = formData.uName;
            oldData[editIndex]['uEmail'] = formData.uEmail;
            oldData[editIndex]['uPhone'] = formData.uPhone;
            oldData[editIndex]['uMessage'] = formData.uMessage;
            setUserData(oldData)
            toast.success("Data was update succesfully")
            setFormData({
              uName:'',
              uEmail:'',
              uPhone: '',
              uMessage: '',
              index : ''      
          })
          }else{
            toast.error("Email or phone number is already exists")
          }
        }




        e.preventDefault();
    }

    let deleteItem =(i)=>{
      let filterData = userData.filter((v,index)=>index !== i)
      toast.success('The table is deleted succesfully')
      setUserData(filterData)
    }

    let editRow = (index)=>{
     let editData =  userData.filter((v,i)=>i===index)[0]
     console.log(editData)
      editData['index'] = index;
      setFormData(editData)
    }

  return (
    <>
   <Header/>
  <div className="container">
    <ToastContainer/>
    <div className='inner-container'>
    <div className='heading'>
        <h1>Form For Query</h1>
    </div>
    {userData.length}
    <div className='container-mid'>
        <div>
        <form className='form-field' onSubmit={handleData}>
        <label>Name</label>
        <input type='text' onChange={changeValue} name='uName' value={formData.uName} required/>
        <label>Email</label>
        <input type='text' onChange={changeValue} name='uEmail' value={formData.uEmail} required/>
        <label>Phone</label>
        <input type='text' onChange={changeValue} name='uPhone' value={formData.uPhone} required/>
        <label>Message</label>
        <input type='text' onChange={changeValue} name='uMessage' value={formData.uMessage} required/>
        <button>{formData.index !== "" ? 'Update' : 'Save'}</button>
        </form>
        </div>
        <div className='table-container'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {userData.length >= 1 ? 
       userData.map((v,i)=>{
        return(
        <tr key={i}>
        <td>{i+1}</td>
        <td>{v.uName}</td>
        <td>{v.uEmail}</td>
        <td>{v.uPhone}</td>
        <td>{v.uMessage}</td>
        <td>
          <button onClick={()=>{editRow(i)}}>Edit</button>
          <button onClick={()=>{deleteItem(i)}}>Delete</button>
        </td>
      </tr>
        )
       })
      :
      <td colSpan={6}>No data found</td>
      }
      </tbody>
    </Table>
        </div>
    </div>
    </div>
  </div>
   
  </>
  )
}
