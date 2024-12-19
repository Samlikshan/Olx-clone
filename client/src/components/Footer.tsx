import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return (
    <footer className="bg-gray-100">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Popular Locations */}
        <div>
          <h3 className="font-bold text-gray-700 mb-4">POPULAR LOCATIONS</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        {/* Trending Locations */}
        <div>
          <h3 className="font-bold text-gray-700 mb-4">TRENDING LOCATIONS</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h3 className="font-bold text-gray-700 mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Tech@OLX</li>
          </ul>
        </div>
        {/* OLX */}
        <div>
          <h3 className="font-bold text-gray-700 mb-4">OLX</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-gray-700 mb-4">FOLLOW US</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook text-2xl"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram text-2xl"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter text-2xl"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-youtube text-2xl"></i></a>
          </div>
          <div className="flex space-x-4">
            <a href="#">
              <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" />
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#002f34] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Logos */}
          <div className="flex space-x-8 items-center mb-4 md:mb-0">
            <img src="/Icons/cartrade_tech.svg" className="w-36" alt="CarTradeTech" />
            <img src="/Icons/olx.svg" className="w-16" alt="OLX" />
            <img src="/Icons/carwale.svg" className="w-16" alt="Carwale" />
            <img src="/Icons/bikewale.svg" className="w-16" alt="Bikewale" />
            <img src="/Icons/cartrade.svg" className="w-16" alt="CarTrade" />
            <img src="/Icons/mobility.svg" className="w-16" alt="Mobility Outlook" />
          </div>
          {/* Copyright and Links */}
          <div className="text-gray-300 text-sm text-center md:text-left">
            <p>All rights reserved &copy; 2006-2024 OLX</p>
            <div className="mt-2">
              <a href="#" className="hover:underline">Help</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
