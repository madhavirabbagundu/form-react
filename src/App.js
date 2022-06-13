import React from "react";
import './App.css';

function App() {
  // const [contacts,setContacts] = React.useState = ([]);
  const [formData,setFormData] = React.useState({
    username:"",
    age:"",
    address:"",
    department:"",
    salary:"",
  });
  const [Entry,setEntry] = React.useState([])
const handleChange = (e)=>{
const {name,value} =e.target;
// console.log(name,value)
setFormData({...formData, [name]:value})
};
const handleSubmit=(e)=>{
  e.preventDefault();
  const newEntry = {username:username,age:age,address:address,department:department,salary:salary,maritalStatus:maritalStatus}
  setEntry([...Entry,newEntry]);
  console.log(Entry)
}


  const {username,age,address,department,salary,maritalStatus} = formData;
  return (
    <>
    <div className="App">
     <h3>Sign Up</h3>
     <br/>
     <form onSubmit = {handleSubmit} className="Main">
     <input type = "text"
      placeholder = "enter name"
      name= "username"
      value = {username}
      required
      onChange = {handleChange}/>
        <br/>

     <input type = "number"
      placeholder = "enter age"
      name = "age"  
      value =  {age}
      required
      onChange = {handleChange}/>
      <br/>

     <input type = "text" 
     placeholder = "enter your address" 
     name = "address"
     value = {address}
     required
     onChange = {handleChange}/>
     <br/>

     <select Department onChange = {handleChange} value = {department} name = "department">
      <option>select department</option>
      <option>computer</option>
      <option>science</option>
      <option>english</option>
      <option>telugu</option>
      <option>Hindi</option>
     </select>
     <br/>

     <input type = "number" 
     placeholder = "enter your salary" 
     name = "salary"
     value = {salary}
     required
     onChange = {handleChange}/>
     <br/>

     <input type = "text" 
     placeholder = "maritalstatus"
     required
     onChange = {handleChange}
     name = "maritalStatus"
     value = {maritalStatus}/>
     <br/>
     <input type = "submit"
      // onChange={handleSubmit}
     value = "SUBMIT"/>
  </form>
</div>

    {/* table format */}
    <div>
      <table>
      
        <tbody>
              <tr ><th>Username</th>
              <th >age</th>
              <th >adress</th>
              <th>department</th>
            <th>Salary</th>
            <th>Marital Status</th></tr>

            
      {
      Entry.map((item) => {
        return (
          <div className = "Show">
           
          <tr>
            <td><p>{item.username}</p></td>
           <td><p>{item.age}</p></td>
          <td><p>{item.address}</p></td>
            <td><p>{item.department}</p></td>
            <td><p>{item.salary}</p></td>
            <td><p>{item.maritalStatus}</p></td></tr>
            
              </div>
        )
     })
    }
    </tbody>
    
    </table>
    </div>
    </>

  );
}

export default App;
