import Image from "next/image";
import Link from "next/link";

export function ModernMinimalistHeader() {
  return (
    <header className="bg-white shadow-sm fixed z-50 w-full sm:block hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Roodkapje Ommen</span>
              <Image
                unoptimized
                className="rounded-full h-8 w-auto sm:h-14"
                src="/images/logo.webp"
                width={120}
                height={60}
                alt="Roodkapje Ommen Logo"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="#over"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Over
            </Link>
            <Link
              href="#buitenkant"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Buitenkant
            </Link>
            <Link
              href="#drone"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Dronebeelden
            </Link>
            <Link
              href="#inrichting"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Inrichting
            </Link>
            <Link
              href="#slaapkamers"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Slaapkamers
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="#reserveren"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Reserveren
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
