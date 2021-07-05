import { useState, Fragment } from "react";
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
    <Fragment>
      <UserInput onAddUser={addUserHandler} />
      <Users users={users} />
    </Fragment>
  );
}

export default App;
