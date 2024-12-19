import axios from "axios";
import React, { useState } from "react";

interface ProductModalProps {
  onClose: () => void;
  toast: () => void;
}

const SellProduct: React.FC<ProductModalProps> = ({ onClose, toast }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    condition: "",
    color: "",
    image: null,
    contactNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData)
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target?.files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FormData object to handle multipart/form-data
    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('color', formData.color);
    form.append('contactNumber', formData.contactNumber);
    form.append('condition', formData.condition);

    // Append the image file if it exists
    if (formData.image) {
      form.append('productPhoto', formData.image);
    }

    // Send the data to the backend
    try {
      const response = await axios.post('http://localhost:3000/create-product', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Product Added successfully')
      onClose(); // Close the modal after submission
    } catch (error) {
      toast.error(error.response.data.error || "Error uploading data:")
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="condition"
            placeholder="Condition"
            value={formData.condition}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellProduct;
