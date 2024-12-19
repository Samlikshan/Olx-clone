import SellButton from '../assets/SellButton';
import SellButtonPlus from '../assets/SellButtonPlus';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import Arrow from '../assets/Arrow'; // Assuming you have this component
import OlxLogo from '../assets/OlxLogo'; // Assuming you have this component
import Search from '../assets/Search';
import { useNavigate } from 'react-router-dom';

function Navbar({ onOpen }) {
  const { email, isAuthenticated, logout } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  return (
    <div className="top-0 p-3 bg-gray-100 fixed w-full z-50">
      {/* Parent Container */}
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center" onClick={handleClick}>
          <OlxLogo />
        </div>

        {/* Place Search */}
        <div className="flex items-center w-64 h-12 px-2 border-2 border-teal-900 rounded-s bg-white">
          <Search />
          <input
            type="text"
            placeholder="Location"
            className="w-full focus:outline-none text-gray-700 px-2"
          />
          <Arrow />
        </div>

        {/* Product Search */}
        <div className="flex items-center w-[50em] h-12 border-2 border-teal-900 rounded-s rounded-r-sm bg-white">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Find car, mobile phone and more..."
              className="w-full px-2 focus:outline-none text-gray-700"
            />
          </div>
          <div className="flex items-center justify-center bg-teal-900 w-12 h-12 rounded-r-sm cursor-pointer">
            <Search color="#ffffff" />
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center text-gray-800 font-bold text-sm">
          <span>ENGLISH</span>
          <Arrow />
        </div>

        <div className="flex underline items-center space-x-1 text-gray-800 font-medium">
          {isAuthenticated ? (
            <div className="relative cursor-pointer" onClick={toggleDropdown}>
              <span className="font-medium text-sm">{email}</span>
              {/* Dropdown visibility controlled by Tailwind classes */}
              <div
                className={`absolute right-0 mt-1 w-32 bg-white border rounded-md shadow-lg ${dropdownVisible ? 'block' : 'hidden'
                  }`}
              >
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-teal-900 font-semibold hover:bg-teal-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => onOpen.setIsLoginOpen(true)} className="text-sm">
              Login
            </button>
          )}
        </div>

        {/* Sell Menu */}
        <div onClick={() => onOpen.handleClick()} className="relative cursor-pointer flex items-center">
          <SellButton />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center font-bold text-sm text-teal-900">
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;

