"use client";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  useEffect(() => {
    if (sending == false)
      return;
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    setName("");
    setEmail("");
    setMessage("");
    setSending(false);
  }, [sending]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSending(true);
  };
  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-[30px] sm:px-[70px] pb-[100px]"
      id="contact"
    >
      <h1
        className="text-5xl flex mb-10"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        Let Get in &nbsp; <p className="text-[#ffd700]">Touch</p>
      </h1>
      <div className="flex flex-row justify-center items-center gap-6">
        <a href="https://github.com/navnoorsingh0309" target="_blank">
          <img
            src="/contact/github.jpg"
            className="contact-icon md:w-14 md:h-14 w-8 h-8 rounded-full"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/navnoor-singh-bal-4a7611256/"
          target="_blank"
        >
          <img
            src="/contact/linkedin.png"
            className="contact-icon md:w-14 md:h-14 w-8 h-8 rounded-full"
          />
        </a>
        <a href="mailto:nbbal2003@gmail.com" target="_blank">
          <img
            src="/contact/mail.jpg"
            className="contact-icon md:w-14 md:h-14 w-8 h-8 rounded-full"
          />
        </a>
      </div>

      {/* Sending message */}
      <form
        className="flex flex-col justify-center items-center gap-4 w-full pt-5 contact-form pb-10"
        onSubmit={handleSubmit}
      >
        <input
          className="text-2xl bg-white text-black w-8/12 p-2 rounded-xl contact-form-btn"
          name="name"
          placeholder="Your Name"
          value = {name}
          onChange={(e) => {
            setName((e.target as HTMLInputElement).value);
          }}
          required
        />
        <input
          className="text-2xl bg-white text-black w-8/12 p-2 rounded-xl contact-form-btn"
          name="email"
          type="email"
          placeholder="Your Email"
          value = {email}
          onChange={(e) => {
            setEmail((e.target as HTMLInputElement).value);
          }}
          required
        />
        <textarea
          className="text-2xl bg-white text-black w-8/12 h-[200px] p-2 rounded-xl contact-form-btn"
          name="message"
          placeholder="Message"
          value = {message}
          onChange={(e) => {
            setMessage((e.target as HTMLTextAreaElement).value);
          }}
          required
        />
        <button
          className="bg-pink-600 px-6 py-3 text-xl rounded-xl mt-3"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
