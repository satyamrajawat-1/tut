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
      className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Subscription</h2>

      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Subscription Name (e.g. Netflix)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 min-w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        <input
          type="number"
          placeholder="Monthly Cost"
          value={monthlyCost}
          onChange={(e) => setMonthlyCost(e.target.value)}
          className="w-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        <button 
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Add Subscription
        </button>
      </div>
    </form>
  );
};

export default AddSubscriptionForm;
