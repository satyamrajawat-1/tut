const WasteMeter = ({ amount }) => {
  return (
    <div
      className="
        relative mt-14 overflow-hidden rounded-2xl
        bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600
        px-8 py-10 text-center text-white
        shadow-xl transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-2xl
      "
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/20 blur-3xl" />

      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/90">
        Annual Waste Analysis
      </p>

      <p className="text-4xl sm:text-5xl font-bold tracking-tight">
        💸 ₹{amount.toFixed(2)}
      </p>

      <p className="mt-3 text-sm text-white/90">
        Wasted on unused subscriptions this year
      </p>
    </div>
  );
};

export default WasteMeter;
