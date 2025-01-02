import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate  } from "react-router-dom";

import { motion } from "motion/react";

import "./LoginCard.css";

export default function LoginCard() {
  const dispatch = useDispatch();
  const navigate  = useNavigate ();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(login(credentials));


    if (!loading && !error) {
      navigate.push("/questions");
    }
  };

  return (
    <div className="login-page">
      <motion.div
        initial={{ boxShadow: "0px 0px #000" }}
        animate={{ boxShadow: "10px 10px #000" }}
        className="login-card"
      >
        <div className="login-card2">
          <form className="login-form" onSubmit={handleSubmit}>
            <p id="heading">Login</p>
            <div className="field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Email"
              />
            </div>
            <div className="field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Password"
                required
              />
            </div>
            <div className="login-btn">
              <button type="submit" className="button1" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
