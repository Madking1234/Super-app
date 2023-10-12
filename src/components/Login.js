import React, { useEffect, useState } from "react";
import "./Login.css";
import SelectCategory from "./selectCategory";

function Login() {
  const [name, setName] = useState(() => {
    const savedItem = localStorage.getItem("name");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [username, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("username");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [email, setEmail] = useState(() => {
    const savedItem = localStorage.getItem("email");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [number, setNumber] = useState(() => {
    const savedItem = localStorage.getItem("number");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("number", JSON.stringify(number));
  }, [name, username, email, number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };
  if (confirm) {
    return (
      <SelectCategory
        to={{
          pathname: "/selectCategory",
        }}
      />
    );
  }

  return (
    <div className="sign-Up">
      <div className="signUp-page-image">
        <p>Discover new things on Superapp</p>
      </div>
      <div className="SignUp-form">
        <h1>Super app</h1>
        <p>Create your new account</p>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            className="input-box"
            type="text"
            placeholder="Name"
            required
            aria-label="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-box"
            type="text"
            placeholder="UserName"
            required
            aria-label="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="input-box"
            type="text"
            placeholder="Email"
            required
            aria-label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-box"
            type="text"
            placeholder="Mobile"
            required
            aria-label="mobile"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label className="checkbox-text">
            <input className="checkBox" required type="checkbox" />
            Share my registration data with Superapp
          </label>
          <button className="submit-button" value="submit" type="submit">
            SIGN UP
          </button>
        </form>
        <div className="terms-conditions">
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="policies">Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="policies">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
