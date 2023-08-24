import React, { useContext, useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context/StoreProvider";
import { USER_SIGNIN } from "../../Reducers/Actions";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async () => {
    try {
      const { data } = await axios.post("/users/signin", {
        email,
        password,
      });
      console.log(data);
      await ctxDispatch({ type: USER_SIGNIN, payload: data });
      // navigate("/");
    } catch (error) {
      toast.error("Invalid Credentials", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [state]);

  return (
    <>
      <div className="absolute h-full w-full bg-no-repeat bg-[url('/src/assets/hero.jpg')] bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="Logo"
              className="h-12 cursor-pointer"
            />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                Sign in
              </h2>
              <div className="flex flex-col gap-4">
                <Input
                  label="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  value={email}
                />
                <Input
                  label="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              <button
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                onClick={submitHandler}
              >
                Sign In
              </button>
              <p className="text-neutral-500 mt-12">
                First time using netflix?
                <span
                  onClick={() => navigate("/register")}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
