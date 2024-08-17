import { useEffect, useState } from "react";

// TODO fix this link
import Input from "../../components/Input.jsx";
import useFetch from "../../hooks/useFetch.js";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSuccess = () => {
    setName("");
    setEmail("");
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/create",
    onSuccess
  );

  useEffect(() => {
    return cancelFetch;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // TODO Check this out
      body: JSON.stringify({ user: { name, email } }),
    });
  };

  let statusComponent = null;
  if (error != null) {
    statusComponent = (
      <div>Error while trying to create user: {error.toString()}</div>
    );
  } else if (isLoading) {
    statusComponent = <div>Creating user....</div>;
  }

  // TODO Change this title
  return (
    <div>
      <h1>What should the user be? </h1>
      <form onSubmit={handleSubmit}>
        <Input name="name" value={name} onChange={(value) => setName(value)} />
        <Input
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <button type="submit">Submit</button>
      </form>
      {statusComponent}
    </div>
  );
};

export default CreateUser;
