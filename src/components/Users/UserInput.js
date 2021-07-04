import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length > 0 &&
      enteredAge.trim().length > 0 &&
      +enteredAge > 0
    ) {
      const user = {
        username: enteredUsername,
        age: enteredAge,
        id: Math.random().toString(),
      };
      props.onAddUser(user);
      setEnteredUsername("");
      setEnteredAge("");
    } else {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
    }
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorChangeHandler = (event) => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorChangeHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
