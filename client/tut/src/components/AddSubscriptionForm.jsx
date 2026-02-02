import { useState } from "react";
import { createSubscription } from "../services/api";

const AddSubscriptionForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !monthlyCost) {
      alert("Please fill all fields");
      return;
    }

    await createSubscription({
      name,
      monthlyCost: Number(monthlyCost),
    });

    setName("");
    setMonthlyCost("");
    onAdd();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50
                 p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
    >
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800">
          Add Subscription
        </h2>
        <p className="text-sm text-gray-500">
          Track a new service and monitor your usage
        </p>
      </div>

      {/* Inputs */}
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Subscription Name (e.g. Netflix)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 min-w-[220px] rounded-xl border border-gray-300 bg-white
                     px-4 py-2.5 text-gray-700 shadow-sm
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                     outline-none transition"
        />

        <input
          type="number"
          placeholder="Monthly Cost (₹)"
          value={monthlyCost}
          onChange={(e) => setMonthlyCost(e.target.value)}
          className="w-44 rounded-xl border border-gray-300 bg-white
                     px-4 py-2.5 text-gray-700 shadow-sm
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                     outline-none transition"
        />

        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600
                     px-7 py-2.5 font-semibold text-white
                     shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700
                     transition-all duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddSubscriptionForm;
