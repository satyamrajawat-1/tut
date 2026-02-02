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
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 py-5 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">
          {subscription.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          ₹{subscription.monthlyCost.toFixed(2)} <span className="text-gray-400">/ month</span>
        </p>
      </div>

      {/* Body */}
      <div className="px-6 py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Monthly Usage
        </p>

        <div className="flex flex-wrap gap-2">
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

      {/* Footer */}
      <div className="flex items-center justify-end bg-gray-50 px-6 py-4 border-t border-gray-200">
        <button
          onClick={handleDelete}
          className="rounded-xl bg-gradient-to-r from-rose-500 to-red-600
                     px-5 py-2 text-sm font-semibold text-white
                     shadow-sm transition-all duration-200
                     hover:from-rose-600 hover:to-red-700 hover:shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
