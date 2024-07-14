"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ligaSans } from "@/config/fonts.config";

export default function LoginSection() {
  const router = useRouter();

  const [auth, setAuth] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    isOpen: false,
    message: "",
  });

  const handleAuthChange = (label, value) => {
    setAuth({ ...auth, [label]: value });
  };

  const handleMessage = (message) => {
    setMessage({ isOpen: true, message });

    setTimeout(() => {
      setMessage({ isOpen: false, message });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const loginResponse = await fetch(
      "http://localhost:3000/api/flexion/auth/login",
      {
        method: "POST",
        body: JSON.stringify(auth),
      }
    ).then((res) => res.json());

    handleMessage(
      loginResponse.success
        ? "Login success. Redirecting..."
        : `Error while trying to login: ${loginResponse.message}`
    );
    setIsLoading(false);

    if (loginResponse.success) {
      router.push("/flexion/dashboard");
    }
  };

  return (
    <>
      <h1 className={ligaSans.className + " text-2xl mb-4"}>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <h5 className="mt-2 mb-2">Email</h5>
          <input
            className="border-2 border-primary p-2 rounded-md"
            type="email"
            value={auth.email}
            onChange={(e) => handleAuthChange("email", e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <h5 className="mt-2 mb-2">Password</h5>
          <input
            className="border-2 border-primary p-2 rounded-md"
            type="password"
            value={auth.password}
            onChange={(e) => handleAuthChange("password", e.target.value)}
          />
        </div>

        <button
          className="transition duration-[.3s] ease-in-out mt-4 px-4 py-2 bg-primary text-white rounded-md shadow-sm flex flex-row gap-4 items-center disabled:bg-gray"
          disabled={isLoading}
        >
          {isLoading && <div className="loader bg-white"></div>}
          {isLoading ? "Signing you in..." : "Sign In"}
        </button>
      </form>

      <div
        className={
          "transition duration-[.3s] ease-in-out fixed bottom-2 right-2 p-4 border-[1px] rounded-md bg-white text-gray shadow-xl " +
          (message.isOpen
            ? "opacity-100 translate-0"
            : "opacity-0 translate-y-2")
        }
      >
        {message.message}
      </div>
    </>
  );
}
