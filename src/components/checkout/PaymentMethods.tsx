import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

export default function PaymentMethods() {
  return (
    <div className="mt-8 border-t border-gray-200 pt-4">
      <h3 className="text-lg font-medium mb-4">Payment Methods Available</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <FaCreditCard className="text-2xl mb-2" color="blue" />
          <span className="text-sm text-center">Credit Card</span>
        </div>
        <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <BsCashCoin className="text-2xl mb-2" color="green" />
          <span className="text-sm text-center">Cash on Delivery</span>
        </div>
        <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <FaMoneyBillWave className="text-2xl mb-2" color="red" />
          <span className="text-sm text-center">EFT Payment</span>
        </div>
      </div>
    </div>
  );
}
