import "./LoginUser.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { ProductContext } from "../../hooks/ProductContext";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  //username and pass: user :"emilys", "michaelw" pass: "emilyspass", "michaelwpass"
  const navigate = useNavigate();

  const { user, setCurrentUser } = useContext(ProductContext);
  console.log(user);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [invaliduser, setInvaliduser] = useState();

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = user.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      console.log("✅ Login successful!", foundUser);
      setCurrentUser(foundUser);
      navigate("/");
    } else {
      setInvaliduser("❌ Invalid username or password");
    }
    console.log("hi", username, password);
  };
  return (
    <>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    onChange={handleUserName}
                    value={username}
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    onChange={handlePassword}
                    value={password}
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <Link
                    type="submit"
                    name="button"
                    className="btn login_btn"
                    onClick={handleSubmit}
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?
                <Link to="/signup" className="ml-2" style={{ color: "yellow" }}>
                  Sign Up
                </Link>
              </div>
              <div className="d-flex justify-content-center links">
                <Link to="/contactus" style={{ color: "#fff" }}>
                  Forgot your password?
                </Link>
              </div>
              <div className="d-flex justify-content-center links">
                <p style={{ color: "red" }}>{invaliduser}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
