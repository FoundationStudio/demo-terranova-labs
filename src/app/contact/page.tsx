"use client";
import { useState } from "react";

import { Particles } from "../components/effects/Particles";

export default function Contact() {
  const [resultMessage, setResultMessage] = useState("");
  const [resultClass, setResultClass] = useState("text-white");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      object[key] = value as string;
    });
    setResultMessage("Please wait...");
    setResultClass("text-white");

    try {
      const response = await fetch("", {
        method: "POST",
      });
      const jsonResponse = await response.json();
      if (response.status === 200) {
        setResultMessage(jsonResponse.message);
        setResultClass("text-green-500");
      } else {
        console.log(response);
        setResultMessage(jsonResponse.message);
        setResultClass("text-red-500");
      }
    } catch (error) {
      console.log(error);
      setResultMessage("Something went wrong!");
      setResultClass("text-red-500");
    } finally {
      form.reset();
      setTimeout(() => {
        setResultMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center pt-16">
        <div className="rounded-btn mx-auto my-10 w-full max-w-xl p-5">
          <div className="text-center">
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white">
              Contact Us
            </h2>
            <p>
              Fill up the form below to send us a message and we will get back
              to you as soon as possible.
            </p>
          </div>
          <div className="mt-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} id="form">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
              />

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block pl-2 font-sans text-sm font-semibold text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="bg-bg/90 placeholder-text/50 focus-border-white focus:border-text rounded-btn w-full border px-3 py-2 text-white shadow-2xl shadow-black focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block pl-2 font-sans text-sm font-semibold text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="bg-bg/90 placeholder-text/50 focus-border-white focus:border-text rounded-btn w-full border px-3 py-2 text-white shadow-2xl shadow-black focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="mb-2 block pl-2 font-sans text-sm font-semibold text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                  className="bg-bg/90 placeholder-text/50 focus-border-white focus:border-text rounded-btn w-full border px-3 py-2 text-white shadow-2xl shadow-black focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block pl-2 font-sans text-sm font-semibold text-white"
                >
                  Your Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="bg-bg/90 placeholder-text/50 focus-border-white focus:border-text rounded-btn w-full border px-3 py-2 text-white shadow-2xl shadow-black focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary/50 border-primary/80 rounded-btn shadow-primary-600/60 hover:border-primary hover:outline-primary/80 mb-6 h-12 w-full cursor-pointer border-1 px-4 text-center font-sans text-lg font-medium text-white shadow-2xl outline-[1.5px] outline-offset-4 outline-transparent transition-all duration-500"
              >
                Send Message
              </button>

              {resultMessage && (
                <p
                  id="result"
                  className={`text-center text-base ${resultClass}`}
                >
                  {resultMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <Particles
        className="animate-fade-in fixed inset-0 -z-10"
        quantity={100}
      />
    </>
  );
}
