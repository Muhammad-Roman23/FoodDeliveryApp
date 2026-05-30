import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CheckoutPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(location.state?.cart || []);
  }, [location.state]);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ================= FORMIK =================
  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobile: "",
      altMobile: "",
      address: "",
      landmark: "",
      email: "",
      instructions: "",
      paymentMethod: "Cash on Delivery",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      mobile: Yup.string().required("Mobile Number is required"),
      address: Yup.string().required("Address is required"),
      email: Yup.string().email("Invalid email format"),
    }),

    onSubmit: (values) => {

      const orderData = {
        customer: values,
        cart,
        total,
      };

      console.log("===== ORDER DATA =====");
      console.log(orderData);

      toast.success("Your order has been placed successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* TOAST */}
      <ToastContainer />
      <Link to="/">
       <div className="flex justify-center items-center gap-2 mb-10">
            <div className="w-20 h-20 bg-[#FF6B00] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              🍔
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Food<span className="text-[#FF6B00]">Dash</span>
            </h1>
          </div>
      </Link>

          

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* ================= LEFT - FORM ================= */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-2xl shadow p-6"
        >

          <h2 className="text-2xl font-bold mb-6">
            Delivery Details
          </h2>

          <div className="space-y-5">

            {/* FULL NAME */}
            <div>
            
              <input
                name="fullName"
                value={formik.values.fullName}
                placeholder="Full Name *"
                onChange={formik.handleChange}
                className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20"
              />
              <p className="text-red-500 text-sm">
                {formik.errors.fullName}
              </p>
            </div>

            {/* MOBILE */}
            <div className="grid grid-cols-2 gap-4">

              <div>
              
                <input
                  name="mobile"
                    placeholder="Mobile Number *"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20"
                />
                <p className="text-red-500 text-sm">
                  {formik.errors.mobile}
                </p>
              </div>

              <div>
                
                <input
                  name="altMobile"
                  value={formik.values.altMobile}
                  placeholder="Alternate Mobile Number"
                  onChange={formik.handleChange}
                  className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20"
                />
              </div>

            </div>

            {/* ADDRESS */}
            <div>
          
              <input
                name="address"
                value={formik.values.address}
                placeholder="Delivery Address *"
                onChange={formik.handleChange}
                className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20"
              />
              <p className="text-red-500 text-sm">
                {formik.errors.address}
              </p>
            </div>

            {/* LANDMARK */}
            <div className="grid grid-cols-2 gap-4">

              <div>
              
                <input
                  name="landmark"
                  value={formik.values.landmark}
                    placeholder="Nearest Landmark"
                  onChange={formik.handleChange}
                 className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20"
                />
              </div>

              <div>
                
                <input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                    placeholder="Email Address *"
                className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20"
                />
                <p className="text-red-500 text-sm">
                  {formik.errors.email}
                </p>
              </div>

            </div>

            {/* INSTRUCTIONS */}
            <div>
              
              <textarea
                name="instructions"
                value={formik.values.instructions}
                placeholder="Additional Instructions (e.g. Call on arrival)"
                onChange={formik.handleChange}
               className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20"
              />
            </div>

            {/* PAYMENT */}
            <div>
              <label className="font-semibold">Payment Method</label>

              <div className="grid grid-cols-2 gap-4 mt-2">

                {["Cash on Delivery", "Online Payment"].map((method) => (
                  <div
                    key={method}
                    onClick={() =>
                      formik.setFieldValue("paymentMethod", method)
                    }
                    className={`w-full mt-1 p-3 rounded-xl cursor-pointer transition-all border
                    ${
                      formik.values.paymentMethod === method
                        ? "border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00] font-semibold"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {method}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </form>

        {/* ================= RIGHT ================= */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Billing Summary
          </h2>

          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between pb-2">
                <span>{item.name} x {item.qty}</span>
                <span className="text-[#FF6B00] font-bold">
                  Rs. {item.price * item.qty}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-[#FF6B00]">
              Rs. {total}
            </span>
          </div>

          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="w-full mt-6 bg-[#FF6B00] hover:bg-[#e65f00] text-white py-3 rounded-xl font-semibold cursor-pointer transition-all cursor-pointer"
          >
            Place Order
          </button>

          <button
            onClick={() => navigate("/products")}
            className="w-full mt-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 cursor-pointer transition-all"
          >
            Add More Items
          </button>

        </div>

      </div>
    </div>
  );
};