import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";

const Login = () => {
  const {
    currentUser,
    setCurrentUser,
    newUser,
    setNewUser,
    showToast,
    renderUrl,
  } = useContext(AuthContext);

  const [confirmPass, setConfirmPass] = useState("");
  const changeConfirm = (e) => {
    setConfirmPass(e.currentTarget.value);
  };

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const [userCreated, setUserCreated] = useState({
    isNew: false,
    rejected: false,
  });

  const isPasswordValid = userInfo.password.length >= 8;

  const clearForm = () => {
    setUserInfo({
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleAccountSubmit = async (e) => {
    // post request to make a new user
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };

    try {
      await fetch(`${renderUrl}/register`, options);
      clearForm();
      handleSignUp();
      setUserCreated({ ...userCreated, isNew: true, rejected: false });
      showToast("Account created! Please log in.");
    } catch (err) {
      console.error("Couldn't sign up");
      setUserCreated({ ...userCreated, isNew: false, rejected: true });
    }
  };

  const handleSignUp = () => {
    clearForm();
    setNewUser(!newUser);
  };

  const handleLoginSubmit = async (e) => {
    // post request to authenticate returning user
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };

    try {
      const response = await fetch(`${renderUrl}/login`, options);

      if (response.ok) {
        const user = await response.json();
        const safeUser = Object.fromEntries(
          Object.entries(user).filter(([key]) => key !== "hashed_password")
        );
        localStorage.setItem("user", JSON.stringify(safeUser));
        setCurrentUser(user);
        showToast(`Welcome to LitLobby!`);
      } else {
        throw new Error("Login response not ok");
      }
    } catch (err) {
      console.error("Couldn't log in");
    }
  };

  return newUser ? (
    <div className="flex flex-col items-center w-[25dvh]">
      <h2 className="mb-4 mt-20">Please enter the following information:</h2>
      <div className="w-full flex justify-center">
        <form onSubmit={handleAccountSubmit} className="w-full flex flex-col ">
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              className="border border-gray-300 p-1 w-full"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="border border-gray-300 p-1 w-full"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              required
            />
            {isPasswordValid ? (
              <span></span>
            ) : (
              <span className="w-1/2">Should contain at least 8 characters</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-1 w-full"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              className="border border-gray-300 p-1 w-full"
              name="first_name"
              value={userInfo.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              className="border border-gray-300 p-1 w-full"
              name="last_name"
              value={userInfo.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex justify-between">
          {isPasswordValid ? (
            <input
              type="submit"
              className="bg-gray-200 p-2 cursor-pointer"
              value="Submit"
              onSubmit={handleAccountSubmit}
            />
          ) : (
            <button className="bg-blue-200 p-2 cursor-pointer w-20">Submit</button>
          )}
          <button
            onClick={handleSignUp}
            className="bg-gray-200 p-2 cursor-pointer"
          >
            Back to Login
          </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center mt-20">
      <h1>Log Into Lit-Lobby</h1>
      <button onClick={handleSignUp}>Don't have an account? Sign up!</button>
      <form onSubmit={handleLoginSubmit} className="w-full max-w-xs mt-12">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            className="border border-gray-300 p-1 w-full"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="border border-gray-300 p-1 w-full"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
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
