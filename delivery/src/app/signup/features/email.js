"use client";

import { SideArrowIcon } from "@/app/admin/icons/sidearrowicon";
import Link from "next/link";

import { useState } from "react";

export const Signup = ({}) => {
  const [email, setEmail] = useState("");

  const [errorState, setErrorstate] = useState({});
  const shouldDisableButton = () => {
    return email.length === 0;
  };

  const validateEmail = (string) => {
    return /[!#$%^&*()_+?><{}":"]/.test(string);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const { token } = await res.json();
      if (token) {
        localStorage.setItem("token", token);

        router.push("/");
      }
      if (!res.ok) {
        console.log("Server error:", res.status);
        return;
      } else {
        console.log("aaaaa");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const HandleContinueButton = () => {
    if (!validateEmail(email)) {
      setErrorstate({ Email: "Please provide a valid email." });
      return;
    }
    setErrorstate({});
    handleSubmit();
  };

  return (
    <div className="w-full h-280 flex  justify-center items-center gap-10">
      <div className="w-100 h-94">
        <Link href={"/"}>
          <div className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#E4E4E7] cursor-pointer">
            <SideArrowIcon />
          </div>
        </Link>
        <div className="w-full h-20">
          <p className="font-semibold text-2xl">Create your account</p>
          <p className="text-[#71717A]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <div className="w-full h-15">
          <input
            placeholder="Enter your email address"
            className="border border-[#E4E4E7] w-full h-9 pl-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button
          onClick={HandleContinueButton}
          disabled={shouldDisableButton()}
          className="w-full h-9 flex justify-center bg-black text-white items-center cursor-pointer"
        >
          Let's Go
        </button>
        <div className="w-full h-9 flex">
          <p className="text-[#71717A]">Already have an account?</p>
          <Link href={"/login"} className="text-[#2563EB] cursor-pointer">
            Log in
          </Link>
        </div>
      </div>

      <div className="flex items-center w-260 h-300 justify-center">
        <img className="w-300 h-full rounded-2xl" src="loginpicture.jpg"></img>
      </div>
    </div>
  );
};
