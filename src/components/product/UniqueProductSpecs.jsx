"use client";
import React, { useState } from "react";

export default function UniqueProductSpecs({ product }) {
  const [selectedFeature, setSelectedFeature] = useState(null);
  return (
    <div className="mt-12 max-w-6xl mx-auto px-4 md:px-0">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {Object.keys(product.features).map((feature, index) => (
            <div key={index} className="flex-1">
              <button
                className={`p-4 text-center w-full rounded-t-lg transition-colors cursor-pointer
              ${
                selectedFeature === feature
                  ? "bg-gray-100 font-medium"
                  : "hover:bg-gray-50"
              }`}
                onClick={() => setSelectedFeature(feature)}
              >
                <h3 className="font-medium">{feature}</h3>
              </button>
              {selectedFeature === feature && (
                <div className="bg-gray-100 p-6 animate-fade-in mt-2 md:hidden">
                  <p className="text-gray-600 text-center">
                    {product.features[selectedFeature]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedFeature && (
          <div className="bg-gray-100 p-6 animate-fade-in hidden md:block">
            <p className="text-gray-600 text-center">
              {selectedFeature && product.features[selectedFeature]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
