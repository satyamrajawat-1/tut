const MonthTag = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 transform hover:scale-105 ${
        active 
          ? "bg-green-500 hover:bg-green-600 text-white shadow-md" 
          : "bg-red-400 hover:bg-red-500 text-white shadow-sm"
      }`}
    >
      {label}
    </button>
  );
};

export default MonthTag;
