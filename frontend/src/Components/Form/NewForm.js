import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import orange from "../../assets/orange.svg";
import purple from "../../assets/purple.svg";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../../Api/Api";

const NewForm = () => {
  const history = useHistory();
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
    },
    onSubmit: (values) => {
      registerUser(values);
    },
    validationSchema,
  });

  return (
    <div id="signinfrom" className="flex justify-center items-center">
      <img className="orangesvg" src={orange} />
      <img className="purplesvg" src={purple} />
      <div className="glasseffect flex justify-center items-center">
        <form
          className="flex flex-col leading-8 m-5"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="text-2xl flex font-bold justify-center my-2 formtext">
            Register
          </h1>
          <label className="text-yellow-50" htmlFor="name">
            Name
          </label>
          <input
            className="w-80 rounded-lg shadow-md pl-2"
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>

          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-100 px-1 rounded relative">
              <span className="inline-block align-middle text-sm">
                {formik.errors.name}
              </span>
            </div>
          ) : null}

          <label className="text-yellow-50 mt-5" htmlFor="email">
            Email
          </label>
          <input
            className="w-80 rounded-lg shadow-md pl-2"
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-100 px-1 rounded relative">
              <span className="inline-block align-middle text-sm">
                {formik.errors.email}
              </span>
            </div>
          ) : null}
          <label className="text-yellow-50 mt-5" htmlFor="password">
            Password
          </label>
          <input
            className="w-80 rounded-lg shadow-md pl-2"
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-100 px-1 rounded relative">
              <span className="inline-block align-middle text-sm">
                {formik.errors.password}
              </span>
            </div>
          ) : null}
          {/* <label className="text-white mt-5" htmlFor="currentJob">
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
          ></textarea> */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded my-2 mt-10"
            type="submit"
          >
            Submit
          </button>
          <div className="text-sm ml-auto mt-2 text-yellow-50">
            Have an Account?{" "}
            <Link className="text-purple-500" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
