import { useState } from "react";
import { ArrowLeft, Upload, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const AddFoods = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    estimatedTime: "",
    quantity: "",
    rating: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const categories = ["Fast Food", "Pizza", "Burger", "Snacks", "Dessert", "Beverages", "Shawarma", "Biryani"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (cat) => {
    setFormData({ ...formData, category: cat });
    setShowCategoryDropdown(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Foods Data:", formData, "Image:", image);
    // API call here
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        {/* <Link
          to="/admin/products"
          className="p-3 hover:bg-white rounded-2xl transition-all"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </Link> */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Add New Foods</h1>
          <p className="text-gray-500">Create a new food item for your menu</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm p-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT: Image Upload */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Foods Image</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-3xl h-96 flex flex-col items-center justify-center relative overflow-hidden hover:border-[#FF6B00] transition-all">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-4 right-4 bg-white p-2 rounded-xl shadow hover:bg-red-50 text-red-500"
                    >
                      <X size={20} />
                    </button>
                  </>
                ) : (
                  <div className="text-center">
                    <Upload size={48} className="mx-auto text-gray-400 mb-3" />
                    <p className="text-gray-500 font-medium">Click or Drag Image Here</p>
                    <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Foods Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#FF6B00] outline-none"
                  placeholder="e.g. Zinger Burger"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Price (Rs)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#FF6B00] outline-none"
                    placeholder="450"
                    required
                  />
                </div>

                {/* Custom Category Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Category</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                      className="w-full px-5 py-3 rounded-2xl border border-gray-200 flex items-center justify-between bg-white hover:border-[#FF6B00] transition-all"
                    >
                      <span className={formData.category ? "text-gray-800" : "text-gray-400"}>
                        {formData.category || "Select Category"}
                      </span>
                      <ChevronDown size={20} className={`transition-transform ${showCategoryDropdown ? "rotate-180" : ""}`} />
                    </button>

                    {showCategoryDropdown && (
                      <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-lg z-10 max-h-60 overflow-auto">
                        {categories.map((cat) => (
                          <div
                            key={cat}
                            onClick={() => handleCategorySelect(cat)}
                            className="px-5 py-3 hover:bg-orange-50 cursor-pointer transition-all"
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Est. Time (min)</label>
                  <input
                    type="number"
                    name="estimatedTime"
                    value={formData.estimatedTime}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#FF6B00] outline-none"
                    placeholder="30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#FF6B00] outline-none"
                    placeholder="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Rating</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    step="0.1"
                    min="1"
                    max="5"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#FF6B00] outline-none"
                    placeholder="4.8"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Simple Description Textarea - Full Width */}
          <div className="mt-12">
            <label className="block text-sm font-medium text-gray-600 mb-3">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={10}
              className="w-full px-6 py-5 border border-gray-200 rounded-3xl focus:border-[#FF6B00] outline-none resize-y min-h-[220px]"
              placeholder="Write a detailed description of the foods here..."
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-[#FF6B00] hover:bg-[#ff8533] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all shadow-md cursor-pointer"
            >
              Add Foods
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};