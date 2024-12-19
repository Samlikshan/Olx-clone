import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginModal from "../components/Login";
import SignUpModal from "../components/SignUp";
import SellProduct from "../components/SellProduct";
import { Toaster, toast } from "sonner";
import { useAuth } from "../context/AuthContext";


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

function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to open Login modal
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); //
  const [isProductModalOpen, setIsProductModalOpen] = useState(false); // State to open Product modal

  const { isAuthenticated } = useAuth(); // Access isAuthenticated from context

  const openLoginModal = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  // Function to open Signup Modal
  const openSignUpModal = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  // Function to close both modals
  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsProductModalOpen(false)
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = () => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to sell items.");
      return;
    }
    setIsProductModalOpen(true)
  }
  const getProducts = async () => {
    const products = await axios.get("http://localhost:3000/get-products");
    setProducts(products.data.products);
  };

  return (
    <>
      <Toaster position="top-center" />
      {isLoginOpen && (
        <LoginModal
          onClose={closeModals}
          onOpenSignUp={openSignUpModal} // Function to switch to Signup Modal
          toast={toast}
        />

      )}

      {/* Render Signup Modal */}
      {isSignUpOpen && (
        <SignUpModal
          onClose={closeModals}
          onOpenLogin={openLoginModal} // Function to switch to Login Modal
          toast={toast}
        />
      )}
      {/* Render Product Modal */}
      {isProductModalOpen && (
        <SellProduct toast={toast} onClose={closeModals} />
      )}

      <Navbar onOpen={{ setIsLoginOpen, handleClick }} />
      {/* Heading Section */}
      <div className="mt-20 px-20 pt-6">
        <h1 className="text-2xl font-bold text-gray-800">Fresh Recommendations</h1>
      </div>

      {/* Card Grid */}
      <div className="grid grid-flow-row grid-cols-4 flex-wrap pt-5 px-20 py-20">
        {products.map((item, index) => (
          <Card
            key={index}
            id={item._id}
            imageUrl={`/Images/${item.image}`}
            price={`₹ ${item.price}`}
            title={item.name}
            description={item.description}
            condition={item.condition}
            contactNumber={item.contactNumber}
            isFeatured={true}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
