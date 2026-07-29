import "./Signup.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    alert("Account Created Successfully");

    navigate("/login");
  };

  return (
    <section className="signup">

      <div className="signup-box">

        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
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

          <div className="input-box">
            <FaLock />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>

          <button>Create Account</button>

        </form>

        <p>
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Signup;