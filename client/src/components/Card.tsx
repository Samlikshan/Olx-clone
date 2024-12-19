import { useNavigate } from "react-router-dom";

const Card = ({ id, imageUrl, price, title, description, condition, contactNumber, isFeatured }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Navigate to the product detail page
  };

  return (
    <div onClick={handleCardClick} className="border border-gray-300 rounded-lg overflow-hidden w-[300px] h-[400px] shadow-md hover:shadow-lg bg-white mb-8">
      {/* Image Section */}
      <div className="relative h-52 bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isFeatured && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            FEATURED
          </div>
        )}
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{price}</h3>
        <p className="text-md font-semibold text-gray-800 truncate">{title}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>

      {/* Footer Section */}
      <div className="px-4 pb-3 text-xs text-gray-400 flex justify-between">
        <span>{condition}</span>
        <span>{contactNumber}</span>
      </div>
    </div>
  );
};

export default Card;

