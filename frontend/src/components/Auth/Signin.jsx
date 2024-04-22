import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Components from "./styledComponents";

const Signin = () => {
  const [signIn, toggle] = React.useState(true);

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginProgress());
    axios
      .post("https://hmsmern.onrender.com/auth/login", data)
      .then((res) => {
        if (res.data.role === "patient") {
          const user = res.data.user;
          //   dispatch(login(user));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/user-profile");
          //   dispatch(loginSuccess());
        } else if (res.data.role === "admin") {
          const user = res.data.user;
          //   dispatch(login(user));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/admin-dashboard");
          //   dispatch(loginSuccess());
        } else if (res.data.role === "doctor" || res.data.role === "nurse") {
          //   dispatch(loginFailure());
          Swal.fire({
            title: "Invalid Role!",
            icon: "error",
            confirmButtonText: "Ok",
            text: "Login Through Your Respective Page!",
          });
        } else {
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
              <Components.Input type="email" placeholder="Email" />
              <Components.Input type="password" placeholder="Password" />
              <Components.Button>Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input type="email" placeholder="Email" />
              <Components.Input type="password" placeholder="Password" />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button>Sign In</Components.Button>
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
