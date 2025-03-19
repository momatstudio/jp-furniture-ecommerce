import Link from "next/link";

interface BreadcrumbProps {
  currentPage: string;
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8 text-sm">
      <Link href="/" className="text-gray-500 hover:text-gray-700">
        Home
      </Link>
      <span className="mx-2 text-gray-500">/</span>
      <Link href="/cart" className="text-gray-500 hover:text-gray-700">
        Cart
      </Link>
      <span className="mx-2 text-gray-500">/</span>
      <span className="text-gray-900 font-medium">{currentPage}</span>
    </nav>
  );
}
