import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//use axios library to req n res
import axios from 'axios'
//import 'bootstrap'

function App() {
  const[employee,setemployee] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/gesemployee')
.then(employee => setemployee(employee.data))
.catch(err => console.log(err))
},[])

return(
<div className="w-100 vh-100 d-flex justify-content-center align-items-center" >
<div className="w-50">
<table className="table">
  <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Age
      </th>
      <th>
        email
      </th>
      <th>
        City
      </th>
    </tr>
  </thead>
  <tbody>
  {
    employee.map(employee=>{
      return<tr>
        <td>{employee.name}</td>
        <td>{employee.age}</td>
        <td>{employee.email}</td>
        <td>{employee.city}</td>

      </tr>
    })
  } 
  </tbody>
</table>
</div>
</div>
  );
}

export default App
