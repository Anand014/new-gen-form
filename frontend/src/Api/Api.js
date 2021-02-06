import axios from "axios";

import Swal from "sweetalert2";

const header = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

// const server = "http://localhost:5000";

export const registerUser = async (data) => {
  try {
    await axios
      .post("/lucky-api/users/register", { data })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "info",
          title: "something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  } catch (error) {}
};

export const loginUser = async (data) => {
  let login = false;
  try {
    await axios
      .post("/lucky-api/users", { data })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("image", res.data.user.image);
          localStorage.setItem("gems", res.data.user.gems);
          localStorage.setItem("id", res.data.user._id);
          localStorage.setItem("token", res.data.token);
          login = true;
        } else {
          login = false;
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "info",
          title: "Invalid Credentials!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Server Error, Please try again later!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return login;
};

export const gambleGems = async (id, addGems, multiplier, winRate) => {
  let response;

  try {
    await axios
      .post(
        "/lucky-api/users/gamblegems",
        {
          id,
          addGems,
          multiplier,
          winRate,
        },
        header
      )
      .then((res) => {
        response = res;
      })
      .catch((err) => {
        response = err;
      });
  } catch (error) {
    response = error;
  }
  return response;
};
