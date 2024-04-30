import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Components from "./styledComponents";
import axios from "axios";
import Swal from "sweetalert2";

const Signin = () => {
  const [signIn, toggle] = React.useState(true);

  const [data, setData] = React.useState({
    passengerEmail: "",
    passengerPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const [isPassVisible, setIsPassVisible] = useState(false);

  const SignInhandleSubmit = async (e) => {
    e.preventDefault();
    //dispatch(loginProgress());
    axios
      .post("http://localhost:4451/api/passenger/login", data)
      .then((res) => {
        if (res.data.message === "Success") {
          // const user = res.data.user;
          // //   dispatch(login(user));
          // localStorage.setItem("token", res.data.token);
          // localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
          //   dispatch(loginSuccess());
        }
        // else if (res.data.role === "admin") {
        //   const user = res.data.user;
        //   //   dispatch(login(user));
        //   localStorage.setItem("token", res.data.token);
        //   localStorage.setItem("user", JSON.stringify(user));
        //   navigate("/admin-dashboard");
        //   //   dispatch(loginSuccess());
        // } else if (res.data.role === "employee") {
        //   //   dispatch(loginFailure());
        //   Swal.fire({
        //     title: "Invalid Role!",
        //     icon: "error",
        //     confirmButtonText: "Ok",
        //     text: "Login Through Your Respective Page!",
        //   });
        // }
        else {
          //   dispatch(loginFailure());
          Swal.fire({
            title: "Invalid Access!",
            icon: "error",
            confirmButtonText: "Ok",
            text: "You are not authorized to access this page!",
          });
        }
      })
      .catch((err) => {
        // dispatch(loginFailure());
        Swal.fire({
          title: "Invalid Credentials!",
          icon: "error",
          confirmButtonText: "Ok",
          text: "Please Check Your Credentials and Try Again!",
        });
      });
  };

  const SignUphandleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4451/api/passenger/register", data)
      .then((res) => {
        if (res.data.message === "Success") {
          navigate("/");
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: err,
          button: "Ok",
        });
      });
  };

  const handleVisible = () => {
    setIsPassVisible(!isPassVisible);
  };

  return (
    <>
      <div className="flex justify-center box-border">
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>
              <Components.Input type="text" placeholder="Name" />
              <Components.Input
                onChange={(e) =>
                  setData({ ...data, passengerEmail: e.target.value })
                }
                type="email"
                placeholder="Email"
              />
              <Components.Input
                onChange={(e) =>
                  setData({ ...data, passengerPassword: e.target.value })
                }
                type="password"
                placeholder="Password"
              />
              <Components.Button onClick={SignUphandleSubmit}>
                Sign Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                onChange={(e) =>
                  setData({ ...data, passengerEmail: e.target.value })
                }
                type="email"
                placeholder="Email"
              />
              <Components.Input
                onChange={(e) =>
                  setData({ ...data, passengerPassword: e.target.value })
                }
                type="password"
                placeholder="Password"
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button onClick={SignInhandleSubmit}>
                Sign In
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.Button onClick={() => toggle(true)}>
                  Sign In
                </Components.Button>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter Your personal details and start your travel journey with
                  us
                </Components.Paragraph>
                <Components.Button onClick={() => toggle(false)}>
                  Sign Up
                </Components.Button>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </>
  );
};

export default Signin;
