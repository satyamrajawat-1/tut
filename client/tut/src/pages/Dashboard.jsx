import { useEffect, useState } from "react";
import { fetchSubscriptions } from "../services/api";
import SubscriptionCard from "../components/SubscriptionCard";
import WasteMeter from "../components/WasteMeter";
import AddSubscriptionForm from "../components/AddSubscriptionForm";

const Dashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  const loadSubscriptions = async () => {
    const res = await fetchSubscriptions();
    setSubscriptions(res.data);
  };

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const calculateTotalWaste = () => {
    return subscriptions.reduce((total, sub) => {
      const usedMonths = Object.values(sub.usage).filter(Boolean).length;
      return total + sub.monthlyCost * (12 - usedMonths);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      
      {/* ===== Navbar (Compact & Top-Aligned) ===== */}
      <nav className="sticky top-0 z-50 flex items-center justify-between
                      bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                      px-4 py-2 shadow-md">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-sm">
            🌱
          </div>
          <span className="text-sm font-semibold tracking-wide text-white">
            Eco-Subscription
          </span>
        </div>

        {/* Tagline */}
        <div className="hidden sm:block text-xs text-white/80">
          Track • Analyze • Save
        </div>
      </nav>

      {/* ===== Page Content ===== */}
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-10">

        {/* Add Form */}
        <AddSubscriptionForm onAdd={loadSubscriptions} />

        {subscriptions.length > 0 ? (
          <>
            {/* Section Header */}
            <div className="mt-10 mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                Your Subscriptions
              </h2>
              <span className="text-sm text-gray-500">
                {subscriptions.length} active
              </span>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {subscriptions.map((sub) => (
                <SubscriptionCard
                  key={sub._id}
                  subscription={sub}
                  refresh={loadSubscriptions}
                />
              ))}
            </div>

            {/* Waste Meter */}
            <WasteMeter amount={calculateTotalWaste()} />
          </>
        ) : (
          /* Empty State */
          <div className="mt-16 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
            <p className="text-lg font-medium text-gray-700">
              No subscriptions added yet
            </p>
            <p className="mt-2 text-gray-500">
              Start by adding your first subscription above
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
