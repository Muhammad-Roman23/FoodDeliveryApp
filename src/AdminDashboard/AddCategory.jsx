import { useState } from "react";
import { Upload, X } from "lucide-react";

export const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    longDescription: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, image);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Add New Category
        </h1>
        <p className="text-gray-500 mt-1">
          Create and manage food categories
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-sm p-8"
        >

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT - IMAGE */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Category Image
              </h3>

              <div className="border-2 border-dashed border-gray-300 rounded-3xl h-[320px] flex items-center justify-center relative overflow-hidden hover:border-[#FF6B00] transition-all">

                {preview ? (
                  <>
                    <img
                      src={preview}
                      className="w-full h-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-4 right-4 bg-white p-2 rounded-xl shadow text-red-500"
                    >
                      <X size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-center">
                      <Upload size={40} className="mx-auto text-gray-400 mb-3" />
                      <p className="text-gray-500 font-medium">
                        Upload Image
                      </p>
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </>
                )}

              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="space-y-6">

              {/* CATEGORY NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Category Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Fast Food"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:border-[#FF6B00] outline-none"
                />
              </div>

            

              {/* LONG DESCRIPTION */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Description
                </label>

                <textarea
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Detailed description..."
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#FF6B00] outline-none resize-none"
                />
              </div>

            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-[#FF6B00] hover:bg-[#ff8533] text-white cursor-pointer px-10 py-4 rounded-2xl font-semibold shadow-md"
            >
              Add Category
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};