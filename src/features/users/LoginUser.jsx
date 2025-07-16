import "./LoginUser.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { useContext } from "react";
import { ProductContext } from "../../hooks/ProductContext";

const LoginUser = () => {
  const { user, setUsers } = useContext(ProductContext);
  console.log(user);
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
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <Link
                    to="/"
                    type="button"
                    name="button"
                    className="btn login_btn"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account?
                <Link to="/signup" className="ml-2">
                  Sign Up
                </Link>
              </div>
              <div className="d-flex justify-content-center links">
                <Link to="/contactus">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
