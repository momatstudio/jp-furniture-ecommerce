import Link from "next/link";

interface BreadcrumbProps {
  lastPage?: string;
  currentPage: string;
}

export default function Breadcrumb({ lastPage, currentPage }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8 text-sm pt-4">
      <Link href="/" className="text-gray-500 hover:text-gray-700">
        Home
      </Link>
      <span className="mx-2 text-gray-500">/</span>
      {lastPage && (
        <>
          <Link
            href={"/" + lastPage?.toLowerCase()}
            className="text-gray-500 hover:text-gray-700"
          >
            {lastPage}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
        </>
      )}
      <span className="text-gray-900 font-medium">{currentPage}</span>
    </nav>
  );
}
