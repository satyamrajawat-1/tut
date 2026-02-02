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
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🌱 Eco-Subscription Tracker
          </h1>
          <p className="text-gray-600 text-lg">Monitor and optimize your subscriptions to reduce waste</p>
        </div>

        <AddSubscriptionForm onAdd={loadSubscriptions} />

        {subscriptions.length > 0 ? (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Subscriptions</h2>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {subscriptions.map((sub) => (
                  <SubscriptionCard
                    key={sub._id}
                    subscription={sub}
                    refresh={loadSubscriptions}
                  />
                ))}
              </div>
            </div>
            <WasteMeter amount={calculateTotalWaste()} />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No subscriptions added yet. Start by adding your first subscription!</p>
          </div>
        )}
      </div>
    </div>
  );

};

export default Dashboard;
