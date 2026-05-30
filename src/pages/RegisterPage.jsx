import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerpageimage from "../assets/images/registerpageimage.avif"
import { Link } from "react-router-dom";

export const RegisterPage = () => {

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      contact: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Username required"),
      email: Yup.string().email("Invalid email").required("Email required"),
      contact: Yup.string().required("Contact number required"),
      password: Yup.string().required("Password required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    },
  });

  return (
    <div className="h-screen w-full flex">

      <ToastContainer />

      {/* LEFT - FORM */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6">

        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-2">Register</h2>
          <p className="text-gray-500 mb-6">Create your FoodDash account</p>

          <input
            name="username"
            placeholder="Username *"
            onChange={formik.handleChange}
            value={formik.values.username}
            className="w-full p-3 border rounded-xl mb-2 focus:border-[#FF6B00]"
          />
          <p className="text-red-500 text-sm mb-3">{formik.errors.username}</p>

          <input
            name="email"
            placeholder="Email *"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full p-3 border rounded-xl mb-2 focus:border-[#FF6B00]"
          />
          <p className="text-red-500 text-sm mb-3">{formik.errors.email}</p>

          <input
            name="contact"
            placeholder="Contact Number *"
            onChange={formik.handleChange}
            value={formik.values.contact}
            className="w-full p-3 border rounded-xl mb-2 focus:border-[#FF6B00]"
          />
          <p className="text-red-500 text-sm mb-3">{formik.errors.contact}</p>

          <input
            type="password"
            name="password"
            placeholder="Password *"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full p-3 border rounded-xl mb-4 focus:border-[#FF6B00]"
          />
          <p className="text-red-500 text-sm mb-3">{formik.errors.password}</p>

          <button
            type="submit"
            className="w-full bg-[#FF6B00] text-white py-3 rounded-xl font-semibold hover:bg-[#e65f00] cursor-pointer"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
  Already have an account?{" "}
  <Link to="/login" className="text-[#FF6B00] font-semibold hover:underline">
    Login
  </Link>
</p>
      </div>

      {/* RIGHT - BANNER */}
     {/* RIGHT - BANNER */}
<div className="hidden md:flex w-1/2 relative items-center justify-center text-white p-10 bg-[#FF6B00]">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{
      backgroundImage:
        `url(${registerpageimage})`,
    }}
  ></div>

  {/* Overlay Content */}
  <div className="relative text-center max-w-md z-10">

    <h2 className="text-3xl font-bold mb-3">Join FoodDash</h2>

    <p className="text-white/90">
      Create your account and start ordering your favorite food with fast delivery.
    </p>

  </div>

</div>

    </div>
  );
};