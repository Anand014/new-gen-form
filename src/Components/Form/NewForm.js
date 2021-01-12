import React from "react";
import "./Form.css";
import { Form, Field, useFormik } from "formik";
import * as Yup from "yup";

const NewForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      currentJob: "",
      image: "",
      description: "",
    },
  });

  return (
    <div id="signinfrom" className="flex justify-center items-center">
      <div className="glasseffect">
        <form className="flex flex-col leading-8 m-5">
          <h1 className="text-4xl my-2">Register</h1>
          <label className="mx-5" htmlFor="name">
            Name
          </label>
          <input
            className="w-60 rounded-full shadow-md"
            type="text"
            name="name"
          ></input>
          <label className="mx-5" htmlFor="email">
            Email
          </label>
          <input
            className="w-60 rounded-full shadow-md"
            type="email"
            name="email"
          ></input>
          <label className="mx-5" htmlFor="password">
            Password
          </label>
          <input
            className="w-60 rounded-full shadow-md"
            type="password"
            name="password"
          ></input>
          <label className="mx-5" htmlFor="currentJob">
            Current Job
          </label>
          <input
            className="w-60 rounded-full shadow-md"
            type="text"
            name="currentJob"
          ></input>
          <label className="mx-5" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-60 rounded-lg shadow-md"
            type="text"
            name="description"
            rows="4"
            cols="50"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
