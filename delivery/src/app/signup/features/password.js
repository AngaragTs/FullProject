"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreatePassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const { token } = await res.json();
      if (token) {
        localStorage.setItem("token", token);
        router.push("/");
      } else {
        console.log("gdhgfdg");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-280 flex  justify-center items-center gap-10">
      <div className="w-100 h-94">
        <div className="w-full h-20">
          <p className="font-semibold text-2xl">Create a strong password</p>
          <p className="text-[#71717A]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <div className="w-full h-30 ">
          <input
            placeholder="Password"
            type="Password"
            className="border border-[#E4E4E7] w-full h-9 pl-2 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Confirm"
            type="Password"
            className="border border-[#E4E4E7] w-full h-9 pl-2 mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div className="flex gap-2">
            <input type="checkbox"></input>
            <p className="text-[#71717A]">Show password</p>
          </div>
        </div>

        <button className="w-full h-9 flex justify-center bg-black text-white items-center cursor-pointer">
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
