import AuthContext from "../context/AuthContext"
import { useContext } from "react";

const Login = () => {
  const { currentUser, setCurrentUser, newUser, setNewUser } =
    useContext(AuthContext);

  const handleAccountSubmit = (e) => {
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setCurrentUser({
      username: "test",
      firstName: "isaac",
      lastName: "summers",
    });

    // if !newUser, do login fetch request and setCurrentUser to the user's credentials

    // else, submit a users post request and make a toast upon completion prompting a login
  };

  const handleSignUp = () => {
    setNewUser(!newUser);
  };

  return newUser ? (
    <div className="flex flex-col items-center">
      <h2 className="mb-4">Please enter the following information:</h2>
      <form onSubmit={handleAccountSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input type="text" className="border border-gray-300 p-1 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" className="border border-gray-300 p-1 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">First Name</label>
          <input type="text" className="border border-gray-300 p-1 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Last Name</label>
          <input type="text" className="border border-gray-300 p-1 w-full" />
        </div>
        <input
          type="submit"
          className="bg-gray-200 p-2 cursor-pointer"
          value="Submit"
        />
        <button onClick={handleSignUp} className="bg-gray-200 p-2 cursor-pointer ml-24">Back to Login</button>
      </form>
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <h1>Log Into LitLobby</h1>
      <button onClick={handleSignUp}>Don't have an account? Sign up!</button>
      <form onSubmit={handleLoginSubmit} className="w-full max-w-xs mt-12">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input type="text" className="border border-gray-300 p-1 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="border border-gray-300 p-1 w-full"
          />
        </div>
        <input
          type="submit"
          className="bg-gray-200 p-2 cursor-pointer"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Login;