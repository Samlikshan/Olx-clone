import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: string;
  condition: string;
  color: string;
  image?: string;
  contactNumber: number;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType>({})
  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:3000/product/${id}`)
    setProduct(response.data.product)
    console.log(response)
  }
  return (
    <>
      <div className="m-20 flex flex-col md:flex-row">
        <div className="max-w-[500px]md:w-2/3">
          <img
            src={`/Images/${product.image}`}
            alt="Bajaj Pulsar 220 F"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className=" m-2 bg-white rounded-lg shadow-md p-4 min-w-[500px]">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 text-sm">Price</p>
          <p className="text-4xl font-bold mb-4">{"$ " + product.price}</p>

          <p className="text-gray-500 text-sm">Condition</p>
          <p className="text-xl font-normal mb-4">{product.condition}</p>

          <p className="text-gray-500 text-sm">Description</p>
          <p className="text-gray-600 mb-4">
            {product.description}
          </p>
          <div className="flex items-center mb-4">
            <div>
              <p className="text-gray-500 text-sm">Contact</p>
              <p className="font-medium">{product.contactNumber}</p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded w-full">
            Make offer
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

