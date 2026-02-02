const MonthTag = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          active
            ? "bg-gradient-to-r from-emerald-400 to-emerald-600 text-white shadow-md focus:ring-emerald-400"
            : "bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-sm focus:ring-rose-400"
        }
      `}
    >
      {label}
    </button>
  );
};

export default MonthTag;
