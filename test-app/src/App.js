import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'

function App() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('/api/v1/post')
        .then((response) => {
          console.log('response.data.posts',eval(response.data.data.posts))
          setUsers(response.data.data.posts);
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();

  },[]);

  const UserList = (props) => {
    const users = props.users;
    
    const listItems = users.map((user) => 
       <li key={user._id}>{user.title}</li>
    )

    return (
      <ul>{listItems}</ul>
    )
  }

  console.log('USERS =>', users);

  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
