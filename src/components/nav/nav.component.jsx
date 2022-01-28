import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import "./nav.style.css";

// function LoginApi() {
//   (async () => {
//     const rawResponse = await fetch("https://vilakrib.herokuapp.com", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: "test@email.com",
//         password: "0704",
//       }),
//     });
//     const content = await rawResponse.json();

//     console.log(content);
//   })();
// }

const NavComponent = () => {
  // LoginApi();
  // loading state
  const [loadingState, setLoadingState] = useState(false);
  // error message
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    errorMessage: "errorMessage state",
  });
  // success message
  const [successMessage, setSuccessMessage] = useState({
    status: false,
    successMessage: "successMessage state",
  });
  // login form input state
  const [loginInputState, SetLoginInputState] = useState({
    email: "",
    password: "",
  });

  // // register form input state
  // const [regesterInputState, SetRegesterInputState] = useState({
  //   email: "",
  //   password: "",
  // });
  const sendLoginDetailsToServer = async (FormData) => {
    console.log("send to API-->", FormData);
    const rawResponse = await fetch(
      "https://vilakrib.herokuapp.com/gateway/login/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      }
    );

    const content = await rawResponse.json();
    setLoadingState(false);
    console.log(content);
    console.log(rawResponse.ok);
    if (rawResponse.ok === true) {
      // setErrorMessage()
      setErrorMessage({ status: false, errorMessage: "" });
      setSuccessMessage({ status: true, successMessage: "Loged in" });
    } else {
      setSuccessMessage({ status: false, successMessage: "" });
      setErrorMessage({ status: true, errorMessage: "Error Loging in" });
    }
  };

  const handleLoginSubmitClick = (e) => {
    e.preventDefault();
    setLoadingState(true);
    sendLoginDetailsToServer(loginInputState);
    SetLoginInputState({
      email: "",
      password: "",
    });
    setErrorMessage({ status: false, errorMessage: "" });
    setSuccessMessage({ status: false, successMessage: "" });
  };

  const handleLoginInputChange = (e) => {
    const { id, value } = e.target;
    SetLoginInputState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <>
      {/* <!-- The Modal --> */}

      <div
        class="modal fade"
        style={{ zIndex: " 0 !important" }}
        id="loginModal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal body --> */}
            <div class="modal-body py-5">
              {/* <!-- Nav pills --> */}
              <ul class="nav nav-pills">
                <li class="nav-item">
                  {/* <!-- Button to change through pages in moduel the Modal --> */}
                  <a
                    class=" modal-top-button active"
                    data-bs-toggle="pill"
                    href="#Login"
                  >
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class=" modal-top-button"
                    data-bs-toggle="pill"
                    href="#registar"
                  >
                    Regester
                  </a>
                </li>
                <li class="nav-item">
                  <span
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                  ></span>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}

              <div class="tab-content">
                {/* Login Tab */}
                <div class="tab-pane container active" id="Login">
                  {/* Login form */}
                  <div className="form-div">
                    <div className="icon-div text-center">
                      <i class="bi bi-person-circle"></i>
                    </div>
                    <form action="" onSubmit={handleLoginSubmitClick}>
                      {errorMessage.status ? (
                        <div className="alert alert-danger">
                          {errorMessage.errorMessage}
                        </div>
                      ) : (
                        ""
                      )}
                      {successMessage.status ? (
                        <div className="alert alert-success">
                          {successMessage.successMessage}
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="input-div">
                        <span>Email:</span>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          value={loginInputState.email}
                          id="email"
                          onChange={handleLoginInputChange}
                        />
                      </div>
                      <div className="input-div">
                        <span>Password:</span>
                        <input
                          type="password"
                          placeholder="**********"
                          value={loginInputState.password}
                          id="password"
                          onChange={handleLoginInputChange}
                        />
                      </div>
                      <div className="input-div">
                        <div className="d-flex justify-content-between m-3">
                          <div>
                            <input type="checkbox" id="rememberMe" />{" "}
                            <label htmlFor="rememberMe">Remember Me</label>
                          </div>
                          <Link to="">Forgot Password</Link>
                        </div>
                      </div>
                      <div className="input-div">
                        {loadingState ? (
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled
                          >
                            "Proccessing Login"
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                      <div className="or-diver d-flex justify-content-around mt-3">
                        <hr />
                        <span className="my-auto ">OR</span>
                        <hr />
                      </div>
                      <div className="input-div login-social-icon">
                        <div className="btn">
                          <i class="bi bi-google"></i>
                        </div>
                        <div className="btn">
                          <i class="bi bi-facebook"></i>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Regester Tab */}
                <div class="tab-pane container fade" id="registar">
                  {/* Regester form */}
                  <div className="form-div">
                    <div className="icon-div text-center">
                      <i class="bi bi-person-circle"></i>
                    </div>

                    <div className="input-div login-social-icon">
                      <div className="btn">
                        <i class="bi bi-google"></i>
                      </div>
                      <div className="btn">
                        <i class="bi bi-facebook"></i>
                      </div>
                    </div>
                    <div className="or-diver d-flex justify-content-around mt-3">
                      <hr />
                      <span className="my-auto ">OR</span>
                      <hr />
                    </div>
                    <form action="">
                      <div className="input-div">
                        <span>Fullname:</span>
                        <input type="text" placeholder="you@email.com" />
                      </div>
                      <div className="input-div">
                        <span>Email:</span>
                        <input type="email" placeholder="you@email.com" />
                      </div>
                      <div className="input-div">
                        <span>Number:</span>
                        <input type="number" placeholder="000-000-000" />
                      </div>
                      <div className="input-div">
                        <span>Password:</span>
                        <input type="password" placeholder="**********" />
                      </div>
                      <div className="input-div">
                        <span>Confirm password:</span>
                        <input type="password" placeholder="**********" />
                      </div>
                      <div className="input-div">
                        <div className="d-flex justify-content-between m-3">
                          <div>
                            <input type="checkbox" id="rememberMe" />{" "}
                            <label htmlFor="rememberMe">Remember Me</label>
                          </div>
                          <Link to="">Forgot Password</Link>
                        </div>
                      </div>
                      <div className="input-div">
                        <input type="button" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <input type="checkbox" name="" id="menu-toggle" />
      <div id="nav">
        <div className="logo-div">
          <img src={logoImg} alt="" />
        </div>
        <label htmlFor="menu-toggle" className="menu-icon-div">
          <div className="bar"></div>
        </label>
        <div className="link-div">
          <ul>
            <li>
              <Link to="">Home</Link>{" "}
            </li>
            <li>
              <Link to="">Properties</Link>
              <div className="subMenuOne">
                <ul>
                  <li>
                    <Link to="">Image Library</Link>
                  </li>
                  <li>
                    <Link to="">Add Listings</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="">Aid</Link>
              <div className="subMenuOne">
                <ul>
                  <li>
                    <Link to="">Blog</Link>
                  </li>
                  <li>
                    <Link to="">Cost Calculator</Link>
                  </li>
                  <li>
                    <Link to="">Scheduling</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="">Guide</Link>
              <div className="subMenuOne">
                <ul>
                  <li>
                    <Link to="">Update Profile</Link>
                  </li>
                  <li className="hoverOne">
                    <Link to="">Find Agents</Link>
                    <div className="subMenuTwo">
                      <ul>
                        <li className="hoverTwo">
                          <Link to="">Contact</Link>
                          <div className="subMenuThree">
                            <ul>
                              <li>
                                <Link to="">Call</Link>
                              </li>
                              <li>
                                <Link to="">Chat</Link>
                              </li>
                              <li>
                                <Link to="">Push Notification</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="">Find Sellers</Link>
                  </li>
                  <li>
                    <Link to="">Find Buyers</Link>
                  </li>
                  <li>
                    <Link to="">Find Investors</Link>
                  </li>
                  <li>
                    <Link to="">Advisory</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="">About Us</Link>
              <div className="subMenuOne">
                <ul>
                  <li>
                    <Link to="">Team</Link>
                  </li>
                  <li>
                    <Link to="">Career</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to=""
                // type="button"
                // class="login-button"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login/Resgister <i class="bi bi-person-circle"></i>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavComponent;
