import React from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import MainLayout from "../layouts/MainLayout";

const SignUp = () => {
  return (
    <MainLayout title="SIGNUP">
      <div className="section auth">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row gx-lg-5">
              <div className="col-lg-6 d-flex align-items-center">
                <img
                  className="w-100"
                  src="./assets/imgs/auth.png"
                  alt="auth"
                />
              </div>
              <div className="col-lg-6">
                <div className="auth-form-container">
                  <form className="auth-form" action="">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-account.png"
                            label="First Name*"
                            id="firstName"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-account.png"
                            label="Last Name*"
                            id="lastName"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-email.png"
                            label="Email Address*"
                            id="email"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-phone.png"
                            label="Phone Number*"
                            id="password"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-location.png"
                            label="Address line 1*"
                            id="email"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-location.png"
                            label="Address line 2*"
                            id="password"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-pwd.png"
                            label="Password*"
                            id="email"
                            placeholder="Create Password*"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            icon="./assets/imgs/input-icon-pwd.png"
                            label="Password*"
                            id="password"
                            placeholder="Re-enter Password"
                          />
                        </div>
                      </div>

                      <button className="btn btn-gradient">Sign-up</button>

                      <div className="options">
                        <p className="text-center w-100">
                          Already Have An Existing Account?{" "}
                          <Link to="/login">Signin Now!</Link>
                        </p>
                      </div>
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

export default SignUp;
