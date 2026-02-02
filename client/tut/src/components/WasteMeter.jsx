const WasteMeter = ({ amount }) => {
  return (
    <div className="mt-12 p-8 bg-gradient-to-r from-red-500 to-red-600 text-white text-center rounded-lg shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest opacity-90 mb-2">Annual Waste Analysis</p>
      <p className="text-4xl font-bold">💸 ₹{amount.toFixed(2)}</p>
      <p className="text-sm mt-2 opacity-90">Wasted on unused subscriptions this year</p>
    </div>
  );
};

export default WasteMeter;
