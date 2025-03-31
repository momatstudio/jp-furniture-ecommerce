"use client";
import { FormEvent } from "react";

interface ShippingFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    primaryPhone: string;
    secondaryPhone: string;

    address: string;
    city: string;
    region: string;
    postalCode: string;
  };
  errors: Record<string, string>;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    <div className="bg-white">
      <h3 className="mb-6 text-2xl font-medium">Customer Details</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-black">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`mt-1 block w-full border-b-1 py-2 font-light ${
              errors.firstName ? "border-red-500" : "border-gray-400"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`mt-1 block w-full border-b-1 py-2 font-light ${
              errors.lastName ? "border-red-500" : "border-gray-400"
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            name="email"
            placeholder="info@mail.co.za"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 block w-full border-b-1 py-2 font-light ${
              errors.email ? "border-red-500" : "border-gray-400"
            } focus:border-green-500 focus:ring-green-500`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Phone (Primary) *
          </label>
          <input
            type="tel"
            name="primaryPhone"
            pattern="[0-9]{10}"
            placeholder="0123456789"
            value={formData.primaryPhone}
            onChange={handleInputChange}
            className={`mt-1 block w-full border-b-1 py-2 font-light ${
              errors.primaryPhone ? "border-red-500" : "border-gray-400"
            } focus:border-green-500 focus:ring-green-500`}
            required
          />
          {errors.primaryPhone && (
            <p className="mt-1 text-sm text-red-500">{errors.primaryPhone}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Phone (Secondary)
          </label>
          <input
            type="tel"
            name="secondaryPhone"
            pattern="[0-9]{10}"
            placeholder="0123456789"
            value={formData.secondaryPhone}
            onChange={handleInputChange}
            className="mt-1 block w-full border-b-1 border-gray-400 py-2 font-light"
          />
        </div>
        <h3 className="mb-6 text-2xl font-medium">Delivery Details</h3>
        <div>
          <label className="block text-sm font-medium text-black">
            Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={`mt-1 block w-full py-2 border-b-1 font-light ${
              errors.address ? "border-red-500" : "border-gray-400"
            } `}
            rows={2}
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
            Select location
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-black">City *</label>
          <select
            value={formData.city}
            onChange={handleInputChange}
            name="city"
            required
            className={`mt-1 block w-full border-b-1 py-2 font-light ${
              errors.city ? "border-red-500" : "border-gray-400"
            }`}
          >
            <option value="">Select</option>
            <option value="Mabopane">Mabopane</option>
            <option value="Soshanguve">Soshanguve</option>
            <option value="Attrageville">Attrageville</option>
          </select>
          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Region *
          </label>
          <select
            value={formData.region}
            onChange={handleInputChange}
            name="region"
            required
            className={`mt-1 block w-full border-b-1 py-2 font-light ${
              errors.region ? "border-red-500" : "border-gray-400"
            }`}
          >
            <option value="">Select</option>
            <option value="pretoria">Pretoria</option>
          </select>
          {errors.region && (
            <p className="mt-1 text-sm text-red-500">{errors.region}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Postal code
          </label>
          <input
            type="number"
            name="postalCode"
            pattern="[0-9]{4}"
            placeholder="0001"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="mt-1 block w-full border-b-1 border-gray-400 py-2 font-light"
          />
        </div>
      </form>
    </div>
  );
}
