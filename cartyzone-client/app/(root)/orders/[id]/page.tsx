import Link from "next/link";
import { User, Truck, MapPin, CalendarDays, Printer } from "lucide-react";

const order = {
  id: "692d959f4661c5e5e293a5a",
  date: "Mon Dec 01, 2025 1:18PM",
  status: "Pending",
  customer: {
    name: "Emmanuel Emmanuel",
    email: "ekontoh7@gmail.com",
    phone: "0554530737",
  },
  shipping: "Fargo express",
  paymentMethod: "Card / paypal",
  address: {
    city: "Agona Nsaba",
    address: "ZG 17/1 AGONA NSABA CENTRAL",
    postalCode: "00000",
  },
  items: [
    { name: "Samsung Curved TV", price: 216, qty: 1 },
    { name: "Lenovo Headset", price: 55, qty: 1 },
  ],
  summary: {
    subtotal: 278,
    shipping: 4,
    tax: 3,
    total: 278,
  },
};

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-semibold text-center md:text-left">
            Order Details
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <CalendarDays size={16} />
            {order.date}
          </div>
          <p className="text-sm text-gray-500 mt-1">Order ID: #{order.id}</p>
        </div>

        <Printer className="text-gray-500 cursor-pointer" />
      </div>

      {/* Info section (scrollable on small screens) */}
      <div className="overflow-x-auto mb-8">
        <div className="grid grid-cols-3 gap-6 min-w-[700px]">
          {/* Customer */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <User className="text-lime-500" size={20} />
              <h3 className="font-medium">Customer</h3>
            </div>
            <p>
              <span className="font-medium">Name:</span> {order.customer.name}
            </p>
            <p>
              <span className="font-medium">E-mail:</span>{" "}
              {order.customer.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {order.customer.phone}
            </p>
          </div>

          {/* Order Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Truck className="text-lime-500" size={20} />
              <h3 className="font-medium">Order Info</h3>
            </div>
            <p>
              <span className="font-medium">Shipping:</span> {order.shipping}
            </p>
            <p>
              <span className="font-medium">Payment method:</span>{" "}
              {order.paymentMethod}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className="text-red-500">{order.status}</span>
            </p>
          </div>

          {/* Deliver to */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-lime-500" size={20} />
              <h3 className="font-medium">Deliver to</h3>
            </div>
            <p>
              <span className="font-medium">City:</span> {order.address.city}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {order.address.address}
            </p>
            <p>
              <span className="font-medium">Postal Code:</span>{" "}
              {order.address.postalCode}
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="text-left py-3">Product</th>
              <th className="text-left">Price</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, i) => (
              <tr key={i} className="border-b">
                <td className="py-4 font-medium">{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.qty}</td>
                <td>${(item.price * item.qty).toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary */}
      <div className="mt-8 border-t pt-6 max-w-md ml-auto">
        <h3 className="font-medium mb-3 text-center">Order Summary</h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${order.summary.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${order.summary.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax price</span>
            <span>${order.summary.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lime-600 border-t pt-2">
            <span>Total</span>
            <span>${order.summary.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Link
        href="/orders"
        className="inline-block mt-8 text-lime-600 underline"
      >
        ← Back to orders
      </Link>
    </div>
  );
}
