import Link from "next/link";
import { Search, Trash2 } from "lucide-react";

const orders = [
  {
    id: "692d959f4661c5e5e2",
    date: "12/01/25",
    total: "$278.00",
    paymentStatus: "Not Paid",
    deliveryStatus: "Not Delivered",
  },
  {
    id: "658fdca8ac0a7541cd",
    date: "12/30/23",
    total: "$170.00",
    paymentStatus: "Not Paid",
    deliveryStatus: "Not Delivered",
  },
  {
    id: "654f8ee7ed7c4f1aa67",
    date: "11/11/23",
    total: "$0.00",
    paymentStatus: "Paid",
    deliveryStatus: "Not Delivered",
  },
];

export default function OrderHistoryPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-xl font-semibold text-center mb-6">Order history</h1>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <div className="flex w-full max-w-xl border border-lime-500">
          <input
            placeholder="search order by id"
            className="w-full bg-gray-100 px-4 py-2 outline-none text-sm"
          />
          <button className="bg-lime-500 text-white px-4 flex items-center justify-center">
            <Search size={16} />
          </button>
        </div>
      </div>

      <h2 className="text-sm font-semibold mb-3">Recent Orders</h2>

      {/* Scrollable table */}
      <div className="overflow-x-auto bg-white">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="text-left py-3 px-2">Order id</th>
              <th className="text-left px-2">Order date</th>
              <th className="text-left px-2">Total</th>
              <th className="text-left px-2">payment status</th>
              <th className="text-left px-2">delivery status</th>
              <th className="text-left px-2">details</th>
              <th className="px-2"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-none">
                <td className="py-4 px-2">{order.id}</td>
                <td className="px-2">{order.date}</td>
                <td className="font-medium px-2">{order.total}</td>
                <td
                  className={
                    order.paymentStatus === "Paid"
                      ? "text-lime-500 px-2"
                      : "text-red-500 px-2"
                  }
                >
                  {order.paymentStatus}
                </td>
                <td className="text-red-500 px-2">{order.deliveryStatus}</td>
                <td className="px-2">
                  <Link href={`/orders/${order.id}`} className="underline">
                    view details
                  </Link>
                </td>
                <td className="px-2 text-gray-400 hover:text-red-500 cursor-pointer">
                  <Trash2 size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
