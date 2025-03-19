"use client";
import { FormEvent } from "react";

interface ShippingFormProps {
  formData: {
    name: string;
    email: string;
    primaryPhone: string;
    secondaryPhone: string;
    address: string;
  };
  errors: Record<string, string>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent) => void;
}

export default function ShippingForm({
  formData,
  errors,
  handleInputChange,
  handleSubmit,
}: ShippingFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:border-green-500 focus:ring-green-500`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:border-green-500 focus:ring-green-500`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cell Number (Primary) *
          </label>
          <input
            type="tel"
            name="primaryPhone"
            pattern="[0-9]{10}"
            placeholder="0123456789"
            value={formData.primaryPhone}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
              errors.primaryPhone ? "border-red-500" : "border-gray-300"
            } focus:border-green-500 focus:ring-green-500`}
            required
          />
          {errors.primaryPhone && (
            <p className="mt-1 text-sm text-red-500">{errors.primaryPhone}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cell Number (Secondary)
          </label>
          <input
            type="tel"
            name="secondaryPhone"
            pattern="[0-9]{10}"
            placeholder="0123456789"
            value={formData.secondaryPhone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
              errors.address ? "border-red-500" : "border-gray-300"
            } focus:border-green-500 focus:ring-green-500`}
            rows={3}
            required
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">{errors.address}</p>
          )}
          <button
            type="button"
            className="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={() => {
              // Add map selection functionality here
              alert("Map selection feature will be implemented here");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Select Location on Map
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Payment Date
          </label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            *Only applicable if you order with credit
          </p>
        </div>
      </form>
    </div>
  );
}
