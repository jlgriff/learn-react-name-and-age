import { useState } from "react";
import "./App.css";
import UserInput from "./components/Users/UserInput";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((previousUsers) => {
      return [...previousUsers, user];
    });
  };

  return (
    <div className="App">
      <UserInput onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
