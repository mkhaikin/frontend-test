import {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")

  const submit = async event =>{
    event.preventDefault()
    //const data = new FormData()
    const data = 'Hello!'
    data.append('image', file)
    data.append('description', description)
    await axios.post('https://expressbackend-test.herokuapp.com/posts', data).then(response=>{
      console.log(response)
    }).catch(error => {
        console.log(error.response.data.error)
      })
    
  }

  return (
    <div className="App">
      <header>
        <h1> App Front Base</h1>
        <form onSubmit={submit}>
          <input
            filename={file} 
            onChange={e => setFile(e.target.files[0])} 
            type="file" 
            accept="image/*"
          ></input>
          <input
            onChange={e => setDescription(e.target.value)} 
            type="text"
            placeholder="description"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
