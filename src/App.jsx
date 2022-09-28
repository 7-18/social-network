import { useEffect, useState } from 'react'
import './App.css'
import { getUser, getUsers } from './services/api';

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsers().then(users => setUsers(users.data))
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <button
            key={user.id}
            onClick={() => getUser(user.id).then((user) => setUser(user))}
          >
            {user.firstName} {user.lastName}
          </button>
        ))}
      </ul>
      {user && (
        <h1>
          {user.firstName} {user.lastName}
        </h1>
      )}
    </div>
  );
}

export default App
