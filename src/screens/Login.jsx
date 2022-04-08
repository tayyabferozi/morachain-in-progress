import React from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
  return (
    <MainLayout title="LOGIN">
      <div className="section auth">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row gx-lg-5">
              <div className="col-lg-6">
                <img
                  className="w-100"
                  src="./assets/imgs/auth.png"
                  alt="auth"
                />
              </div>
              <div className="col-lg-6">
                <div className="auth-form-container">
                  <form className="auth-form" action="">
                    <Input
                      icon="./assets/imgs/input-icon-account.png"
                      label="Email Address*"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <Input
                      icon="./assets/imgs/input-icon-pwd.png"
                      label="Password*"
                      id="password"
                      placeholder="Enter Your Password"
                    />

                    <button className="btn btn-gradient">Submit</button>

                    <div className="options">
                      <p>
                        Forgot Password? <a href="#0">Click Here</a>
                      </p>
                      <p>
                        Create a new account?{" "}
                        <Link to="/signup">Signup Now!</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
