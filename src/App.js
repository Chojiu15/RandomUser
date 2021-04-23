import React, {useState, useEffect} from "react";
import usersData from "./users.json";
import "./App.css";
import User from "./User";
import Axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [gender, setGender] = useState('')
  
  useEffect(() => {
    fetchData()
  }, [gender]   )


  const fetchData = async () => { 
    await Axios.get(`https://randomuser.me/api/?results=50&gender=${gender}`)
    .then(response  => setData(response.data.results))
  }
 
  console.log(data)
  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <button onClick={() => setGender('male')}>
        Male 
      </button>
      <button onClick={() => setGender('female')}>
        Female
      </button>
      <button onClick={() => setGender('')}>
        Both
      </button>
    {data.map((user, index) => {
      return <User key={index} {...user}  />
    })}

  
    {/* <User usersInfos={usersData} /> */}
    </div>
  );
};

export default App;
