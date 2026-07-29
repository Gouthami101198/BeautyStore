import "./Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === formData.email &&
      user.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", true);

      alert("Login Successful");

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <section className="login">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to continue shopping</p>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <FaLock />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <span
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Login;