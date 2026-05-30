import { X, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const CartDrawer = ({ isOpen, onClose, initialCart }) => {

  const navigate = useNavigate();

  const [cart, setCart] = useState(initialCart);
  const [total, setTotal] = useState(0);

  // calculate total
  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(sum);
  }, [cart]);

  // increase qty
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // decrease qty OR remove
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 "
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-[360px] bg-white z-50 shadow-2xl flex flex-col"
      >

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            Your Cart
          </h2>
          <button onClick={onClose} className="cursor-pointer hover:scale-110 transition"  >
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm"
            >

              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1606755962773-d324e0a13086"
                className="w-16 h-16 rounded-xl object-cover"
              />

              {/* Info */}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-[#FF6B00] font-bold">
                  Rs. {item.price}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 border border-red-500 rounded-full px-3 py-1">

                {/* DELETE OR MINUS (CONDITIONAL) */}
                {item.qty === 1 ? (
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="text-red-500 hover:scale-110 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="text-gray-700 text-lg font-bold px-1"
                  >
                    -
                  </button>
                )}

                {/* Qty */}
                <span className="text-sm font-semibold w-5 text-center">
                  {item.qty}
                </span>

                {/* Plus */}
                <button
                  onClick={() => increaseQty(item.id)}
                  className="text-gray-700 text-lg font-bold px-1"
                >
                  +
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="p-5 border-t">

          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Total</span>
            <span className="font-bold text-gray-900">
              Rs. {total}
            </span>
          </div>

<button
  onClick={() => navigate("/checkout", { state: { cart } })}
  className="w-full bg-[#FF6B00] hover:bg-[#e65f00] text-white py-3 rounded-2xl font-semibold cursor-pointer transition"
>
  Checkout
</button>

        </div>

      </motion.div>
    </>
  );
};