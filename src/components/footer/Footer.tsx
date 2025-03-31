import React from "react";
import Link from "next/link";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#A42300] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              About JP E-Commerce
            </h3>
            <p className="text-gray-300">
              Your trusted destination for quality products. We provide the best
              shopping experience with carefully curated items.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@jpecommerce.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Shopping Street, Digital City</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 text-gray-300">
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
              >
                <BsWhatsapp />
              </a>
            </div>
            <div className="text-gray-300 flex flex-col items-end space-y-2">
              <div>
                © {new Date().getFullYear()} JP E-Commerce. All rights reserved.
              </div>
              <div className="text-sm">
                Created by{" "}
                <a
                  href="https://momatstudio.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Momatstudio IT Solutions (Pty) Ltd
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
