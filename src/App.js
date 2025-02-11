import React, { useState ,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";
import { fetchUserData } from "./features/userSlice";



function App() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div
      style={{ backgroundColor: "red", textAlign: "center", marginTop: "50px" }}
    >
      <h2>Redux To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
      <h1>Get the User Data Thought api Call</h1>
      <div style={{ display: "flex" }}>
      {user && (
        <div>
          {user.map((u) => (
            <div key={u.id}>
              <h2>{u.name}</h2>
              <p>Emails of user {u.email}</p>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;


const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};
