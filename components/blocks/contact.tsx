"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

interface Props {
  loaded: boolean;
  serviceId: string;
  templateId: string;
  userId: string;
}

const Contact: React.FC<Props> = ({ loaded, serviceId, templateId, userId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);


    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  if (!loaded) return null;

  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center w-full p-4 px-[30px] sm:px-[70px] pb-[100px]"
      id="contact"
    >
      <h1
        className="text-4xl lg:text-7xl flex mb-10 animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        Let Get in &nbsp; <p className="text-[#ffd700]">Touch</p>
      </h1>

      <form
        className="flex flex-col justify-center items-center gap-4 w-full pt-5 contact-form pb-10"
        onSubmit={handleSubmit}
      >
        <input
          className="text-2xl bg-white text-black w-11/12 md:w-8/12 p-2 rounded-xl contact-form-btn"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ fontFamily: "Stylish, sans-serif" }}
          required
        />
        <input
          className="text-2xl bg-white text-black w-11/12 md:w-8/12 p-2 rounded-xl contact-form-btn"
          name="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ fontFamily: "Stylish, sans-serif" }}
          required
        />
        <textarea
          className="text-2xl bg-white text-black w-11/12 md:w-8/12 h-[200px] p-2 rounded-xl contact-form-btn"
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ fontFamily: "Stylish, sans-serif" }}
          required
        />
        <button
          className="bg-pink-600 px-6 py-3 text-xl rounded-xl mt-3"
          type="submit"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
