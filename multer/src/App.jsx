import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';
function App() {
  var [file, setFile] = useState();
  const uploadFile = ()=>{
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);
    axios.post("http://localhost:5000/api/file/upload", formData)
    .then((response)=>{
      console.log(response)
      alert(response.data.message)
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="">
      <h1>File Uploader</h1>
      <input type="file" onChange={(e)=>{ setFile(e.target.files[0]); console.log(e.target.files[0]) }} />
      <button onClick={()=>uploadFile()}>Upload File</button>
    </div>
  );
}
export default App;
