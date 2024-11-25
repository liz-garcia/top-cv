import { useEffect, useState } from "react";
import Input from "../components/Input.jsx";
import useFetch from "../hooks/useFetch.js";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSuccess = () => {
    setName("");
    setLastName("");
    setPassword("");
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
      body: JSON.stringify({ user: { name, lastName, password, email } }),
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

  return (
    <div>
      <h1 className="my-8 text-2xl font-bold">What should the user be?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
        <Input name="name" value={name} onChange={(value) => setName(value)} />
        <Input
          name="lastName"
          value={lastName}
          onChange={(value) => setLastName(value)}
        />
        <Input
          name="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <Input
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <button
          type="submit"
          className="mx-auto w-fit rounded-lg bg-indigo-500 px-4 py-3 hover:bg-indigo-800"
        >
          Submit
        </button>
      </form>
      {statusComponent}
    </div>
  );
};

export default CreateUser;
