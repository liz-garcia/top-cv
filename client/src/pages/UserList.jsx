import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const UserList = () => {
  const [users, setUsers] = useState(null);
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/users",
    (response) => {
      setUsers(response.result);
    }
  );

  useEffect(() => {
    performFetch();

    return cancelFetch;

    // performFetch and cancelFetch are stable functions provided by useFetch hook. They will not change, so no dependencies are needed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error: {error.toString()}</div>;
  } else if (users && users.length > 0) {
    content = (
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    );
  } else if (users && users.length === 0) {
    content = <div>No users found.</div>;
  } else {
    // Adding this condition due to React.StrictMode. For scenarios where double rendering of Effects make take place. We show the user we are attempting to load the data.
    content = <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="my-8 text-2xl font-bold">These are the users:</h1>
      <div className="m-10">{content}</div>
      <Link to="/user/create">
        <button className="rounded-lg bg-indigo-500 px-4 py-3 hover:bg-indigo-800">
          Create new user
        </button>
      </Link>
    </>
  );
};

export default UserList;
