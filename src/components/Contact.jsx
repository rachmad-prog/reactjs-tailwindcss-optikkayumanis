import React from "react";
import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className=" text-center bg-emerald-900 text-white py-20 px-4">
        <h2 className="text-3xl font-bold text-white">Contact Us</h2>
        <p className=" text-white text-sm">Let's connect with me</p>
        <div>
          <form
            action="https://formsubmit.co/rachmadmap@gmail.com"
            method="POST"
            className=" bg-emerald-900 p-10 sm:w-fit w-full mx-auto rounded-md">
            <div className=" flex flex-col gap-6">
              <div className=" flex flex-col gap-2">
                <label className=" text-white text-left font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Enter Name.."
                  required
                  className=" text-white border border-zinc-100 p-2 rounded-md"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label className=" text-white text-left font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email.."
                  required
                  className=" text-white border border-zinc-100 p-2 rounded-md"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="pesan"
                  className=" text-white text-left font-semibold">
                  Message
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="60"
                  rows="10"
                  placeholder="Message.."
                  required
                  className=" text-white border border-zinc-100 p-2 rounded-md"></textarea>
              </div>
              <div className=" text-center">
                <button
                  className=" bg-emerald-600 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-emerald-700"
                  type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
