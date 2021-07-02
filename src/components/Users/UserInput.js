import { useState } from "react";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    const username = event.target.value.trim();
    if (username.length === 0) {
      return;
    }
    setEnteredUsername(username);
  };

  const ageChangeHandler = (event) => {
    const age = event.target.value.trim();
    if (isNaN(age)) {
      return;
    }
    setEnteredAge(age);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.length > 0 && enteredAge > 0) {
      const user = {
        username: enteredUsername,
        age: enteredAge,
        id: Math.random().toString(),
      };
      props.onAddUser(user);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className={`${styles["form-control"]}`}>
      <div className={`${styles["form-input"]}`}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
      </div>
      <div className={`${styles["form-input"]}`}>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
