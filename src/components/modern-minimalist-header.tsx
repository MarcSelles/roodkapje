'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'

export function ModernMinimalistHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Roodkapje Ommen</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/placeholder.svg?height=40&width=120"
                alt="Roodkapje Ommen Logo"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Over ons
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Activiteiten
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Locatie
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
              Reserveren
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}