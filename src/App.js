import "./App.css";
import Header from "./components/Header";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    if (!name == "" && !email == "") {
      setData([...data, { name, email }])
      setName("")
      setEmail("")
    }
  }


  const removeRecord = (index) => {
    let arr = data;
    arr.splice(index, 1)
    setData([...arr])
  }


  return (
    <div className="App">
      <Header />
      <div className="form">
        <form action="">
          <div class="input-field">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="input-field">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={addData} className='add'>
            <AddIcon/>
          </button>
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
