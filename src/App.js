import "./App.css";
import Header from "./components/Header";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    if (!name == "" && !email == "") {
      setData([...data, { name, email }])
      setName("")
      setEmail("")

      notify();
    }
  }


  const removeRecord = (index) => {
    let arr = data;
    arr.splice(index, 1)
    setData([...arr])
  }


  // notify popup
  const notify = () => {
    toast.success("Record added successfully!")
  }


  return (
    <div className="App">
      <Header />
      <div className="form">
        <form action="">
          <div className="input-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyUp={(e) => { if (e.key == 'Enter') { addData() } }}
            />
          </div>
          <button onClick={addData} className='add'>
            <AddIcon />
          </button>
          <ToastContainer position="bottom-left" autoClose={3000} />
        </form>
      </div>
      <div className="records-container">
        <div className="records">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Delete</h3>
        </div>
        {
          data.map((elem, index) => {
            return (
              <div key={index} className="records">
                <p>{elem.name}</p>
                <p>{elem.email}</p>
                <button className="deleteBtn" onClick={() => removeRecord(index)}>
                  <DeleteIcon />
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
