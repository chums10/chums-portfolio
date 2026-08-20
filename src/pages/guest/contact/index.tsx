import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export default function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <>
      {/* Contact Header */}
      <Section className="bg-sky-100 border-b-4 border-slate-900 py-16">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-block bg-white border-4 border-slate-900 px-5 py-2 shadow-pixel-sm">
            <span className="font-pixel text-pink-500">
              ★ CONTACT TERMINAL ★
            </span>
          </div>

          <h1 className="mt-8 font-pixel text-5xl md:text-7xl font-bold text-slate-900">
            LET'S{" "}
            <span className="text-pink-500 [text-shadow:4px_4px_0_#0f172a]">
              CONNECT
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto font-mono text-xl text-slate-700">
            Have a question, project idea, or just want to say hello?
            Send me a message!
          </p>

        </div>
      </Section>

      {/* Contact Information */}
      <Section className="bg-pink-100 border-b-4 border-slate-900 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Details */}
          <div className="bg-white border-4 border-slate-900 shadow-pixel p-6 md:p-8">

            <h2 className="font-pixel text-3xl text-slate-900 mb-6">
              CONTACT INFO
            </h2>

            <div className="space-y-5 font-mono text-lg">

              <div className="border-4 border-slate-900 bg-sky-100 p-4">
                <p className="font-pixel text-pink-500">
                  EMAIL
                </p>

                <p className="mt-1 text-slate-700 break-all">
                  sumagangshaymaejane14@gmail.com
                </p>
              </div>

              <div className="border-4 border-slate-900 bg-sky-100 p-4">
                <p className="font-pixel text-pink-500">
                  LOCATION
                </p>

                <p className="mt-1 text-slate-700">
                  Cebu, Philippines
                </p>
              </div>

              <div className="border-4 border-slate-900 bg-sky-100 p-4">
                <p className="font-pixel text-pink-500">
                  STATUS
                </p>

                <p className="mt-1 text-slate-700">
                  ● Currently Learning & Building
                </p>
              </div>

            </div>

          </div>

          {/* Message Form */}
          <div className="bg-white border-4 border-slate-900 shadow-pixel p-6 md:p-8">

            <h2 className="font-pixel text-3xl text-slate-900 mb-6">
              SEND A MESSAGE
            </h2>

            {messageSent ? (
              <div className="border-4 border-slate-900 bg-green-300 p-6 text-center">

                <div className="font-pixel text-2xl text-slate-900">
                  ★ MESSAGE SENT! ★
                </div>

                <p className="font-mono text-lg text-slate-700 mt-3">
                  Thanks for reaching out!
                </p>

                <Button
                  onClick={() => setMessageSent(false)}
                  className="
                    mt-5
                    rounded-none
                    border-4
                    border-slate-900
                    bg-white
                    text-slate-900
                    font-pixel
                    shadow-pixel-sm
                    hover:bg-white
                  "
                >
                  SEND ANOTHER
                </Button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-pixel text-lg text-slate-900 mb-2"
                  >
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    required
                    className="
                      w-full
                      h-12
                      border-4
                      border-slate-900
                      bg-sky-50
                      px-4
                      font-mono
                      text-lg
                      text-slate-900
                      outline-none
                      focus:bg-yellow-100
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-pixel text-lg text-slate-900 mb-2"
                  >
                    YOUR EMAIL
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    required
                    className="
                      w-full
                      h-12
                      border-4
                      border-slate-900
                      bg-sky-50
                      px-4
                      font-mono
                      text-lg
                      text-slate-900
                      outline-none
                      focus:bg-yellow-100
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-pixel text-lg text-slate-900 mb-2"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className="
                      w-full
                      border-4
                      border-slate-900
                      bg-sky-50
                      px-4
                      py-3
                      font-mono
                      text-lg
                      text-slate-900
                      outline-none
                      resize-none
                      focus:bg-yellow-100
                    "
                  />
                </div>

                <Button
                  type="submit"
                  className="
                    w-full
                    h-14
                    rounded-none
                    border-4
                    border-slate-900
                    bg-pink-400
                    text-slate-900
                    font-pixel
                    text-lg
                    shadow-pixel
                    hover:bg-pink-400
                    hover:translate-x-[2px]
                    hover:translate-y-[2px]
                    hover:shadow-pixel-sm
                    active:translate-x-[4px]
                    active:translate-y-[4px]
                    active:shadow-none
                  "
                >
                  ▶ SEND MESSAGE
                </Button>

              </form>
            )}

          </div>

        </div>
      </Section>

      {/* Footer Message */}
      <Section className="bg-sky-100 py-12">
        <div className="text-center">

          <p className="font-pixel text-2xl text-slate-900">
            THANK YOU FOR VISITING!
          </p>

          <p className="mt-3 font-mono text-lg text-slate-600">
            Every connection is another part of the journey.
          </p>

          <NavLink
            to="/"
            className="inline-block mt-6"
          >
            <Button
              className="
                rounded-none
                border-4
                border-slate-900
                bg-white
                text-slate-900
                font-pixel
                px-8
                py-3
                shadow-pixel
                hover:bg-white
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-pixel-sm
                active:translate-x-[4px]
                active:translate-y-[4px]
                active:shadow-none
              "
            >
              ◀ BACK HOME
            </Button>
          </NavLink>

        </div>
      </Section>
    </>
  );
}