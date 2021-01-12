import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string()
      .min(8, "Password is too short!")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters!")
      .required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      currentJob: "",
      description: "",
    },
    validationSchema,
  });

  const submitHandler = (e) => {
    // register user
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>

          {formik.touched.name && formik.errors.name ? (
            <div class="text-red-600 px-1 rounded relative">
              <span class="inline-block align-middle">
                {formik.errors.name}
              </span>
            </div>
          ) : null}

          <label className="text-white mt-5" htmlFor="email">
            Email
          </label>
          <input
            className="w-80 rounded-lg shadow-md"
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div class="text-red-600 px-1 rounded relative">
              <span class="inline-block align-middle">
                {formik.errors.email}
              </span>
            </div>
          ) : null}
          <label className="text-white mt-5" htmlFor="password">
            Password
          </label>
          <input
            className="w-80 rounded-lg shadow-md"
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div class="text-red-600 px-1 rounded relative">
              <span class="inline-block align-middle">
                {formik.errors.password}
              </span>
            </div>
          ) : null}
          <label className="text-white mt-5" htmlFor="currentJob">
            Current Job
          </label>
          <input
            className="w-80 rounded-lg shadow-md"
            type="text"
            name="currentJob"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.currentJob}
          ></input>
          <label className="text-white mt-5" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-80 rounded-lg shadow-md"
            type="text"
            name="description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 mt-5"
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
