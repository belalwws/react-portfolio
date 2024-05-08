import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/Animation - 1715125294400.json";
import emailAnimation from "../../../public/animation/email.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkndylrl");

  return (
    <section className="Contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"></span>
        contact us
      </h1>
      <p className="subtitle">
        contact us for more information and get notified when i publish somthing
        new .
      </p>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">email address</label>
            <input type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div style={{ marginTop: "26px" }} className="flex">
            <label htmlFor="message">your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            submit
          </button>
          {state.succeeded && (
            <p className="flex">
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent👌
            </p>
          )}
        </form>
        <div className="animation ">
          <Lottie
            className="conactanimation"
            // loop={false}
            style={{ height: 500 }}
            animationData={emailAnimation}
          />
        </div>
      </div>
    </section>
  );
}
