import React from "react";

export default function ContactForm() {
  return (
    <form className={"p-6 flex flex-col gap-y-6"}>
      <h1 className={"text-2xl text-rose-bonbon font-bold"}>Send a Message</h1>
      <div className={"flex flex-col sm:flex-row gap-4"}>
        <input
          type="text"
          placeholder="First Name"
          className={"w-full sm:w-1/2 input-contact"}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={"w-full sm:w-1/2 input-contact"}
        />
      </div>
      <div className={"flex flex-col sm:flex-row gap-4"}>
        <input
          type="email"
          placeholder="Email"
          className={"w-full sm:w-1/2 input-contact"}
        />
        <input
          type="tel"
          placeholder="Phone"
          className={"w-full sm:w-1/2 input-contact"}
        />
      </div>
      <textarea
        rows={5}
        placeholder="Write your message here..."
        className={"w-full input-contact"}
      ></textarea>
      <button type="submit" className={'second-btn w-fit'}>Send Message</button>
    </form>
  );
}
