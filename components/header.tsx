"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Training", href: "/training" },
    { name: "Publications", href: "/publications" },
    { name: "Support", href: "/support" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ada-australia-logo.png"
                alt="ADA Australia"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
