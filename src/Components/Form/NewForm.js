import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      currentJob: "",
      description: "",
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formik.values);
  };

  return (
    <div id="signinfrom" className="flex justify-center items-center">
      <div className="glasseffect flex justify-center items-center">
        <form className="flex flex-col leading-8 m-5" onSubmit={submitHandler}>
          <h1 className="text-2xl flex justify-center my-2  text-white">
            Register
          </h1>
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            className="w-80 rounded-lg shadow-md"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            className="w-80 rounded-lg shadow-md"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <input
            className="w-80 rounded-lg shadow-md"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          <label className="text-white" htmlFor="currentJob">
            Current Job
          </label>
          <input
            className="w-80 rounded-lg shadow-md"
            type="text"
            name="currentJob"
            onChange={formik.handleChange}
            value={formik.values.currentJob}
          ></input>
          <label className="text-white" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-80 rounded-lg shadow-md"
            type="text"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
