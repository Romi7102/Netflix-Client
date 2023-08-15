import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Input from "../../Components/Input/Input";
import { MdArrowForwardIos } from "react-icons/md";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("email");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step == "email") {
      if (!error && email != "") {
        setStep("password");
      }
    } else if (step == "password") {
      if (password != "") {
        console.log("post!!!");
      }
    }
  };

  const validEmailHandler = (e) => {
    setEmail(e.target.value);
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="absolute h-full w-full bg-no-repeat bg-[url('/src/assets/hero.jpg')] bg-center bg-fixed bg-cover">
      <div className="bg-black bg-gradient-to-t from-black via-transparent to-black w-full h-full bg-opacity-40">
        <nav className="px-8 py-5 flex flex-row relative z-50">
          <div>
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="Logo"
              className="h-12 cursor-pointer"
            />
          </div>
          <div className="flex flex-row ml-auto gap-7 items-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-red-600 p-3 text-white font-bold rounded-md hover:bg-red-700 transition flex flex-row justify-center items-center"
            >
              Sign in
            </button>
          </div>
        </nav>

        <div className="absolute top-0 flex flex-col flex-shrink flex-grow justify-center items-center w-auto h-full m-auto text-white space-y-5 inset-0">
          <div className="flex flex-col inset-0 justify-center items-center text-center space-y-5 m-5 ">
            <h1 className="lg:text-5xl font-bold md:text-3xl drop-shadow-lg">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="lg:text-3xl md:text-2xl font-semibold drop-shadow-2xl">
              Watch anywhere. Cancel anytime.
            </p>
            <h3 className="lg:text-2xl md:text-1xl drop-shadow-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>

          <div className="flex flex-row justify-center items-center space-x-2 w-full p-5">
            {step == "email" && (
              <>
                <Input
                  label="Email"
                  onChange={(e) => {
                    validEmailHandler(e);
                  }}
                  id="email"
                  type="email"
                  value={email}
                  error={error}
                />
              </>
            )}
            {step == "password" && (
              <>
                <Input
                  label="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  type="password"
                  value={password}
                  error={error}
                />
              </>
            )}

            <button
              onClick={nextStep}
              className="bg-red-600 p-3 text-2xl text-white rounded-md hover:bg-red-700 transition flex flex-row justify-center items-center"
            >
              <span>{step == "email" ? "Next" : "Get Started"}</span>
              <MdArrowForwardIos></MdArrowForwardIos>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
