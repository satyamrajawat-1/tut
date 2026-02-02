import MonthTag from "./MonthTag";
import { updateSubscription, deleteSubscription } from "../services/api";

const months = [
  { key: "jan", label: "Jan" },
  { key: "feb", label: "Feb" },
  { key: "mar", label: "Mar" },
  { key: "apr", label: "Apr" },
  { key: "may", label: "May" },
  { key: "jun", label: "Jun" },
  { key: "jul", label: "Jul" },
  { key: "aug", label: "Aug" },
  { key: "sep", label: "Sep" },
  { key: "oct", label: "Oct" },
  { key: "nov", label: "Nov" },
  { key: "dec", label: "Dec" },
];

const SubscriptionCard = ({ subscription, refresh }) => {
  const handleToggleMonth = async (monthKey) => {
    const updatedUsage = {
      ...subscription.usage,
      [monthKey]: !subscription.usage[monthKey],
    };

    await updateSubscription(subscription._id, {
      usage: updatedUsage,
    });

    refresh();
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${subscription.name}"?`
    );

    if (!confirmed) return;

    await deleteSubscription(subscription._id);
    refresh();
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="text-lg font-bold text-gray-800">
          {subscription.name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">₹{subscription.monthlyCost.toFixed(2)}/month</p>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">Monthly Usage</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {months.map((month) => (
            <MonthTag
              key={month.key}
              label={month.label}
              active={subscription.usage[month.key]}
              onClick={() => handleToggleMonth(month.key)}
            />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
        <button
          onClick={handleDelete}
          className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
