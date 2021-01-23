import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import orange from "../../assets/orange.svg";
import purple from "../../assets/purple.svg";
import { Link } from "react-router-dom";
import { loginUser } from "../../Api/Api";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string()
      .min(8, "Password is too short!")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters!")
      .required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginUser(values);
    },
    validationSchema,
  });

  return (
    <>
      <div id="signinfrom" className="flex justify-center items-center">
        <img className="orangesvg mt-8" src={orange} />
        <img className="purplesvg mt-8" src={purple} />
        <div className="glasseffect flex justify-center items-center">
          <form
            className="flex flex-col leading-8 m-5"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="text-2xl font-bold flex justify-center my-2 formtext">
              Login
            </h1>
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
              <div class="text-red-100 px-1 rounded relative">
                <span class="inline-block align-middle text-sm">
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
              <div class="text-red-100 px-1 rounded relative">
                <span class="inline-block align-middle text-sm">
                  {formik.errors.password}
                </span>
              </div>
            ) : null}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded my-2 mt-10"
              type="submit"
            >
              Login
            </button>
            <div className="text-sm ml-auto mt-2 text-yellow-50">
              New to Lucky Gems?{" "}
              <Link className="text-purple-500" to="/">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
