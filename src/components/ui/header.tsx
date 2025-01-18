'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div className="ml-auto flex gap-2">
        {[
          { href: '/register', label: 'Register' },
          { href: '/admin', label: 'Admin' },
          { href: '/data', label: 'Data' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors
              ${
                pathname === href
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
                  : 'bg-white text-black hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50'
              }
              focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
            prefetch={false}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
