import axios from "axios";
import Swal from "sweetalert2";

const header = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

// const server = "http://localhost:5000";

export const registerUser = async (data) => {
  try {
    await axios
      .post("/lucky-api/users", { data })
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
  try {
    await axios.post("/lucky-api/users", { data }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("image", res.data.user.image);
        localStorage.setItem("gems", res.data.user.gems);
        localStorage.setItem("id", res.data.user._id);
        localStorage.setItem("token", res.data.token);
      }
    });
  } catch (error) {}
};
