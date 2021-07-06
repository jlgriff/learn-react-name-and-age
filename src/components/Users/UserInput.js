import { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [error, setError] = useState();
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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
    } else {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
    }
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorChangeHandler = (event) => {
    setError(null);
  };

  return (
    <Fragment>
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
            <input id="username" type="text" ref={usernameInputRef}></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef}></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserInput;
