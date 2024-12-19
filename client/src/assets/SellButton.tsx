export default function SellButton() {
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-white border-[5px] border-orange-500 text-orange-500 font-bold py-2 px-4 rounded-3xl flex items-center"
      >
        <span className="mr-2">SELL</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="orange"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
