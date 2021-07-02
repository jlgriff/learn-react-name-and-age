import styles from "./Users.module.css";
import User from "./User";

const Users = (props) => {
  return (
    <ul>
      {props.users.map((user) => {
        return <User key={user.id} username={user.username} age={user.age} />;
      })}
    </ul>
  );
};

export default Users;
